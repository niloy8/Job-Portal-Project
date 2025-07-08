import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Jobpost = () => {
    const { user } = useAuth()
    const handleAddjob = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData)
        const initialData = Object.fromEntries(formData.entries())
        const { min, max, currency, ...newJob } = initialData
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)
        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    };
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <form onSubmit={handleAddjob} className="w-full max-w-lg  bg-white p-8 rounded shadow">
                <div className="card-body">
                    <fieldset className="grid grid-cols-1 gap-4">
                        <div className="flex flex-col ">
                            <label className="label text-black">Title</label>
                            <input
                                type="text"
                                name="title"
                                className="input border border-gray-300 p-2 rounded w-full"
                                placeholder="Title"
                            />
                        </div>
                        <div className="flex  flex-col">
                            <label className="label text-black">Location</label>
                            <input
                                type="text"
                                name="location"
                                className="input border border-gray-300 p-2 rounded w-full"
                                placeholder="Location"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="label text-black">Job Type</label>
                            <select className="select select-bordered w-52">

                                <option>Hybrid</option>
                                <option>Full-time</option>
                                <option>Part Time</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="label text-black">Job Cetagory</label>
                            <select className="select select-bordered w-52">

                                <option>Hybrid</option>
                                <option>Full-time</option>
                                <option>Part Time</option>
                            </select>
                        </div>

                        <div className="flex  flex-col">
                            <label className="label text-black">Application Deadline</label>
                            <input
                                type="date"
                                name="deadline"
                                className="input border border-gray-300 p-2 rounded w-full"
                                placeholder="Deadline"
                            />
                        </div>
                        {/*Salary Range*/}
                        <div className="flex gap-2">
                            <div className="flex  flex-col">
                                <label className="label text-black">Max</label>
                                <input
                                    type="text"
                                    name="max"
                                    className="input border border-gray-300 p-2 rounded w-full"
                                    placeholder="Max"
                                    required
                                />
                            </div>
                            <div className="flex  flex-col">
                                <label className="label text-black">Min</label>
                                <input
                                    type="text"
                                    name="min"
                                    className="input border border-gray-300 p-2 rounded w-full"
                                    placeholder="Min"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="label text-black">Currency</label>
                                <select name="currency" className="select select-bordered w-52 " required>

                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>ERU</option>
                                </select>
                            </div>
                        </div>
                        {/**Description */}
                        <div className="flex  flex-col">
                            <label className="label text-black">Description</label>
                            <textarea
                                type="text"
                                required
                                cols={4}
                                name="description"
                                className="border bg-black border-gray-300 p-2 rounded w-full"
                                placeholder="Description"
                            />
                        </div>

                        <div className="flex  flex-col">
                            <label className="label text-black">Company</label>
                            <input
                                type="text"
                                name="company"
                                required
                                className="input border border-gray-300 p-2 rounded w-full"
                                placeholder="Company"
                            />
                        </div>
                        <div className="flex  flex-col">
                            <label className="label text-black">Write Requirements In next line</label>
                            <textarea
                                type="text"
                                cols={4}
                                name="requirements"
                                className="border bg-black border-gray-300 p-2 rounded w-full"
                                placeholder="Requirements"
                                required
                            />
                        </div>
                        <div className="flex  flex-col">
                            <label className="label text-black">Write the Responsibilities In Next Line</label>
                            <textarea
                                type="text"
                                cols={4}
                                name="responsibilities"
                                className="border bg-black border-gray-300 p-2 rounded w-full"
                                placeholder="Responsibilities"
                                required
                            />
                        </div>
                        <div className="flex  flex-col">
                            <label className="label text-black">hr_email</label>
                            <input
                                type="email"
                                cols={4}
                                defaultValue={user?.email}
                                name="hr_email"
                                className="border bg-black border-gray-300 p-2 rounded w-full"
                                placeholder="hr_email"
                                required
                            />
                        </div>
                        <div className="flex  flex-col">
                            <label className="label text-black">hr_name</label>
                            <input
                                type="text"
                                defaultValue={user?.name}
                                cols={4}
                                name="hr_name"
                                className="border bg-black border-gray-300 p-2 rounded w-full"
                                placeholder="hr_name"
                                required
                            />
                        </div>
                        <div className="flex  flex-col">
                            <label className="label text-black">Company Logo</label>
                            <input
                                type="url"
                                cols={4}
                                name="company_logo"
                                className="border bg-black border-gray-300 p-2 rounded w-full"
                                placeholder="logo"
                                required
                            />
                        </div>


                    </fieldset>

                    <div className="flex justify-center mt-8">
                        <input
                            type="submit"
                            className="btn btn-primary w-full"
                            value="Post Job"
                        />
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Jobpost;