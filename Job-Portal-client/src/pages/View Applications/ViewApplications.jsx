
import { useLoaderData } from "react-router";

const ViewApplications = () => {
    const applications = useLoaderData()
    console.log(applications)

    const handleUpdateStatus = (e, id) => {
        console.log(e.target.value, id)
        const data = {
            status: e.target.value
        }

        fetch(`https://job-server-side.vercel.app/jobs-application/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };
    return (
        <div>
            <div className="bg-gray-50 p-5">
                My Apllication - {applications.length}
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Github</th>
                                <th>Update Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {applications.map((application, index) => <tr key={application._id}>
                                <th>{index + 1}</th>
                                <td>{application.user_id}</td>
                                <td>{application.github}</td>
                                <td>
                                    <select
                                        onChange={(e) => handleUpdateStatus(e, application._id)}
                                        defaultValue={application.status || 'choose'} className="select select-xs">
                                        <option>Selected</option>
                                        <option>Rejected</option>
                                        <option>Pending</option>

                                    </select></td>
                            </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewApplications;