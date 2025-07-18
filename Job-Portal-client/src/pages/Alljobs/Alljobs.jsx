import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import JobCard from "../JobCard";
const Alljobs = () => {
    const [sort, setSort] = useState(false)
    const [search, setSearch] = useState('')
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const { jobs, loading } = useJobs(sort, search, min, max)
    return (
        <div>
            <h1 className="text-center text-2xl mb-2">All Jobs</h1>

            <div className="w-11/12 p-5  rounded-2xl m-5 text-center flex items-center gap-5 bg-white">
                <button onClick={() => setSort(!sort)} className={`btn btn-info ${sort && 'btn-success'}`} >{sort === true ? "Sorted By Salary" : "Sort By salary"}</button>

                <input onKeyUp={(e) => setSearch(e.target.value)} type="text" className="input w-1/2 outline-1 outline-amber-300" placeholder="Search" />


                <div className="space-y-3">
                    <input onKeyUp={(e) => setMin(e.target.value)} type="number" placeholder="Min" className="input  outline-1 outline-amber-300 " />
                    <input onKeyUp={(e) => setMax(e.target.value)} type="number" placeholder="Max" className="input outline-1 outline-amber-300" />
                </div>
            </div>
            {loading ? <p className="text-3xl text-center text-yellow-200">Loading...</p> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-white p-5">
                {jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}

            </div>}

        </div>
    );
};

export default Alljobs;