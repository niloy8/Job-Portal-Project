import axios from "axios";
import { useEffect, useState } from "react";

const useJobs = (sort) => {

    const [jobs, setjobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3000/jobs?sort=${sort}`)
            .then(response => {
                setLoading(false)
                setjobs(response.data)
            })
    }, [sort])


    return { jobs, loading }
};

export default useJobs;