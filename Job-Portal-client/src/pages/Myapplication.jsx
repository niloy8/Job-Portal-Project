import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Myapplication = () => {
    const [data, setData] = useState([])
    console.log(data)
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:3000/jobs-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [user.email])
    return (
        <div>
            My Apllication - {data.length}
        </div>
    );
};

export default Myapplication;