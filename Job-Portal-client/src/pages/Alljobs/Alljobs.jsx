import useJobs from "../../hooks/useJobs";
import JobCard from "../JobCard";

const Alljobs = () => {
    const { jobs, loading } = useJobs()
    return (
        <div>
            <h1 className="text-center text-2xl mb-2">All Jobs</h1>
            {loading ? <p>Loading...</p> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-white p-5">
                {jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
            </div>}
        </div>
    );
};

export default Alljobs;