import axios from "axios";
import { useEffect, useState } from "react";

const useJobs = (sort, search, min, max) => {

    const [jobs, setjobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3000/jobs?sort=${sort}&search=${search}&min=${min}&max=${max}`)
            .then(response => {
                setLoading(false)
                setjobs(response.data)
            })
    }, [sort, search, min, max])


    return { jobs, loading }
};

export default useJobs;