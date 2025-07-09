require('dotenv').config()
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;

const app = express()
app.use(cors())
app.use(express.json())



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gqjzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();




        app.get('/', (req, res) => {
            res.send("Hello world")
        })
        const jobsCollection = client.db('Jobs-Portal').collection('jobs')
        const jobsAppplyCollection = client.db('Jobs-Portal').collection('jobs-apply')


        /**Auth Related API */
        app.post('/jwt', async (req, res) => {
            const user = req.body
            const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' })
            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: false, //

                })
                .send({ success: true })
        })
        app.get('/jobs', async (req, res) => {
            const email = req.query.email
            let query = {}
            if (email) {
                query = { hr_email: email }
            }
            const cursor = jobsCollection.find(query)
            const result = await cursor.toArray()

            res.send(result)
        })

        app.post('/jobs', async (req, res) => {
            const addJob = req.body
            const result = await jobsCollection.insertOne(addJob)
            res.send(result)
        })
        app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await jobsCollection.findOne(query)
            res.send(result)
        })

        app.post('/jobs-application', async (req, res) => {
            const applications = req.body
            const result = await jobsAppplyCollection.insertOne(applications)
            const id = applications.job_id
            const query = { _id: new ObjectId(id) }
            const job = await jobsCollection.findOne(query);
            let newcount = 0
            if (job.applicationCount) {
                newcount = job.applicationCount + 1
            } else {
                newcount = 1
            }

            const filter = { _id: new ObjectId(id) }
            const updateDoc = {
                $set: {

                    applicationCount: newcount


                }
            }
            const updateResult = await jobsCollection.updateOne(filter, updateDoc)
            res.send(result)
        })


        // app.get('/jobs-application', async (req, res) => {
        //     const cursor = jobsAppplyCollection.find()
        //     const result = await cursor.toArray()
        //     res.send(result)
        // })

        app.get('/jobs-application', async (req, res) => {
            const email = req.query.email
            const query = { user_id: email }
            const result = await jobsAppplyCollection.find(query).toArray()

            for (const application of result) {
                console.log(application)
                const query1 = { _id: new ObjectId(application.job_id) }
                const job = await jobsCollection.findOne(query1)
                if (job) {
                    application.title = job.title
                    application.company = job.company
                    application.company_logo = job.company_logo
                }
            }
            res.send(result)
        })

        app.patch('/jobs-application/:id', async (req, res) => {
            const id = req.params.id
            const data = req.body
            const filter = { _id: new ObjectId(id) }
            const updateDoc = {
                $set: {
                    status: data.status
                }
            }
            const result = await jobsAppplyCollection.updateOne(filter, updateDoc)
            res.send(result)
        })

        app.get('/jobs-application/jobs/:job_id', async (req, res) => {
            const id = req.params.job_id
            const query = { job_id: id }
            const result = await jobsAppplyCollection.find(query).toArray()
            res.send(result)
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.listen(port, () => {
    console.log("It is running on port ", port)
})