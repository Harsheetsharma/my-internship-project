export function PostButtons() {

    return (
        <div>
            <div className="d-flex justify-content-between position-absolute  align-items-center " style={{ height: "10%", left: "18%", width: "55%" }} >
                <div className="d-flex justify-content-between text-secondary p-2">
                    <p className="ps-4 text-decoration-underline text-primary" style={{ cursor: "pointer" }}>All Posts(32)</p>
                    <p className="ps-4" style={{ cursor: "pointer" }}>Artical</p>
                    <p className="ps-4" style={{ cursor: "pointer" }}>Event</p>
                    <p className="ps-4 " style={{ cursor: "pointer" }}>Education</p>
                    <p>Job</p>
                </div>
                <div className="d-flex justify-content-between pe-5 mb-3">
                    <button className=" bg-gray border-0 me-3 rounded " style={{ width: "133px" }} >Write a Post</button>
                    <button className=" bg-primary rounded border-0 text-white" style={{ width: "133px", height: "40px" }}>Join Group</button>
                </div>
            </div>
            <div className=" position-absolute" style={{ width: "70p%", left: "370px", top: "570px" }}><hr /></div>
        </div>
    )
}
