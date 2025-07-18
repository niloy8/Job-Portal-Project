import axios from "axios";
import { useEffect, useState } from "react";

const useJobs = () => {

    const [jobs, setjobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(response => {
                setLoading(false)
                setjobs(response.data)
            })
    }, [])


    return { jobs, loading }
};

export default useJobs;