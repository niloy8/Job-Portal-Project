import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";


const Mypostedjobs = () => {
    const { user } = useAuth()
    const [jobs, setjobs] = useState([])
    console.log(jobs)
    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setjobs(data))
    }, [user.email])
    return (
        <div>
            <div className="bg-gray-50 p-5">
                My Apllication - {jobs.length}
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Company Logo</th>
                                <th>Application Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td><img className='w-8' src={job.company_logo} alt="Logo" /></td>
                                <td>{job.applicationCount}</td>
                                <td><Link to={`/viewapplications/${job._id}`}><button className="btn btn-link">View Apllication</button></Link></td>
                            </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Mypostedjobs;