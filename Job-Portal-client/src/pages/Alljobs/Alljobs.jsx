import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import JobCard from "../JobCard";

const Alljobs = () => {
    const [sort, setSort] = useState(false)
    const { jobs, loading } = useJobs(sort)
    return (
        <div>
            <h1 className="text-center text-2xl mb-2">All Jobs</h1>

            <div className="w-2/12 p-5 bg-amber-600 rounded-2xl m-5 text-center">
                <button onClick={() => setSort(!sort)} className={`btn btn-info ${sort && 'btn-success'}`} >{sort === true ? "Sorted By Salary" : "Sort By salary"}</button>
            </div>
            {loading ? <p className="text-3xl text-center text-yellow-200">Loading...</p> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-white p-5">
                {jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
            </div>}
        </div>
    );
};

export default Alljobs;