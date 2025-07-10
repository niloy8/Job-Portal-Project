/**
 * Step 1- after successfull log in generate a jwt token
 * npm i jwt and cookie-parser
 *jwt.sign(data, 'secret',{})
 *
 *
 *
 * Step 2 - send token generated in the server side to the client side
 *
 *
 *localstorage ---> easy and not that secure
http-cookie --> better
3. for sensitive or secure or private or protected apis: send token to the server side
app.use(cors({
    origin: "http://localhost:5173/",
    credentials: true
}))
4. validate the token in the server side
if valid: provide data
if not valid : log out
 */