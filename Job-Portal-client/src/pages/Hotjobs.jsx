import React from "react";
import JobCard from "./JobCard";

const Hotjobs = () => {

    const [jobs, setJobs] = React.useState([]);

    React.useEffect(() => {
        fetch('https://job-server-side.vercel.app/jobs')
            .then(response => response.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-white p-6">
                {jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
        </div>
    );
};

export default Hotjobs;