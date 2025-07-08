
import { useLoaderData } from "react-router";

const ViewApplications = () => {
    const applications = useLoaderData()
    console.log(applications)
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
                                    <select defaultValue="Choose A Option" className="select select-xs">
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