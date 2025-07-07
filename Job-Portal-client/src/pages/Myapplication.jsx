import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Myapplication = () => {
    const [data, setData] = useState([])
    console.log(data)
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:3000/jobs-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [user.email])
    return (
        <div>
            My Apllication - {data.length}
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Company Logo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {data.map((job, index) => <tr key={job._id}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td><img className='w-8' src={job.company_logo} alt="Logo" /></td>
                        </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myapplication;