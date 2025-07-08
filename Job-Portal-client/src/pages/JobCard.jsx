import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaDollarSign } from "react-icons/fa6";
import { NavLink } from "react-router";
const JobCard = ({ job }) => {
    const { _id, title, location, company_logo, company, requirements, description, salaryRange } = job;
    return (
        <div className="card bg-accent-content shadow-sm p-2 border-2 border-blue-400 ">
            <div className="flex gap-2">
                <figure className="w-12">
                    <img
                        src={company_logo} alt="Jobs" />
                </figure>
                <div>
                    <h3 className="text-2xl">{company}</h3>
                    <p className="text-gray-600 flex gap-2 items-center"><HiOutlineLocationMarker />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-start ">
                    {requirements.map((skill, index) => <div key={index} className="badge badge-outline cursor-pointer hover:text-yellow-300">{skill}</div>)}
                </div>
                <div className="flex items-center">
                    <p className="flex items-center"><FaDollarSign />{salaryRange.min} - {salaryRange.max}</p>
                    <NavLink to={`/jobs/${_id}`}><button className="btn border-pink-300">Apply Now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default JobCard;