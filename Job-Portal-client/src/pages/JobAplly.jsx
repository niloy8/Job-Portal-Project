import { useNavigate, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const JobAplly = () => {

    const { id } = useParams()
    const { user } = useAuth()
    console.log(id, user);
    const nevigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const linkdin = form.linkdin.value
        const github = form.github.value
        const resume = form.resume.value

        const applyDetails = {
            job_id: id,
            user_id: user.email,
            linkdin,
            github,
            resume
        }

        fetch('http://localhost:3000/jobs-application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applyDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    nevigate('/my-aaplication')
                }
            })
        console.log(applyDetails)
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Apply Now</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Linkdin</label>
                            <input type="url" name="linkdin" className="input" placeholder="linkdin" />
                            <label className="label">Github</label>
                            <input type="url" name="github" className="input" placeholder="github" />
                            <label className="label">Resume</label>
                            <input type="url" name="resume" className="input" placeholder="Resume" />

                            <button className="btn btn-neutral mt-4">Apply</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobAplly;