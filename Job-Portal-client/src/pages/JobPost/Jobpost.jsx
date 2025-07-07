
const Jobpost = () => {
    return (
        <form className="w-7xl text-center">
            <div className="card-body">
                <fieldset className="fieldset grid grid-cols-2">
                    <div >
                        <label className="label">Title</label>
                        <input type="text" className="input" placeholder="Title" />
                    </div>
                    <div>
                        <label className="label">Location</label>
                        <input type="text" className="input" placeholder="Location" />
                    </div>

                    <div className="w-7xl flex justify-center">
                        <input type="submit" className="btn btn-primary" value="Post Job" />
                    </div>
                </fieldset>
            </div>
        </form>
    );
};

export default Jobpost;