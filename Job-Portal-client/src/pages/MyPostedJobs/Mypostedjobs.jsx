import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const Mypostedjobs = () => {
    const { user } = useAuth()
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setjobs(data))
    }, [user.email])
    return (
        <div>
            My Posted Jobs - {jobs.length}
        </div>
    );
};

export default Mypostedjobs;