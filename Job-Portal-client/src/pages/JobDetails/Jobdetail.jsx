import { Link, useLoaderData } from "react-router";

const Jobdetail = () => {
    const { _id, title, company } = useLoaderData();

    return (
        <div className="m-4 p-4">
            <h1 className="text-3xl">Job Details for : {title}</h1>
            <p>Apply In This Company : {company}</p>
            <Link to={`/jobapply/${_id}`}> <button className="btn btn-secondary mt-2">Apply Now</button></Link>

        </div>
    );
};

export default Jobdetail;