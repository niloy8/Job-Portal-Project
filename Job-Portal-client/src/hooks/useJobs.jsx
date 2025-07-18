import axios from "axios";
import { useEffect, useState } from "react";

const useJobs = (sort, search) => {

    const [jobs, setjobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3000/jobs?sort=${sort}&search=${search}`)
            .then(response => {
                setLoading(false)
                setjobs(response.data)
            })
    }, [sort, search])


    return { jobs, loading }
};

export default useJobs;