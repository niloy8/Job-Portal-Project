import { useLoaderData } from "react-router";

const Jobdetail = () => {
    const { title, company } = useLoaderData();
    return (
        <div className="m-4 p-4">
            <h1 className="text-3xl">Job Details for : {title}</h1>
            <p>Apply In This Company : {company}</p>
            <button className="btn btn-secondary mt-2">Apply Now</button>

        </div>
    );
};

export default Jobdetail;