import { useNavigate } from "react-router-dom";
import atg_illustration from '../images/atg_illustration.png';

export function Signin() {

    const navigate = useNavigate();
    function handlesignup() {
        navigate('/signup');
    }
    return (
        <div className="w-50 roundec position-absolute border shadow" style={{ height: "490px", left: "500px", top: "100px", borderRadius: "15px", backgroundColor: "" }}>
            <div className="w-full position-relative text-center pt-2" style={{ color: "#008A45", height: "40px", backgroundColor: "#EFFFF4", borderRadius: "15px 15px 0 0" }} >
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </div>
            <div className="w-full position-relative mt-4">
                <div className="d-flex justify-content-between">
                    <div className="fs-4 fw-semibold ms-5">
                        Create Account
                    </div>
                    <div className="d-flex justify-content-center me-4">
                        <div className="text-secondary">Don’t have an account yet?</div>
                        <button onClick={handlesignup} className="bg-white border-0 text-primary pb-1" style={{ height: "30px", fontWeight: "bold" }}>Create new for free!</button>
                    </div>
                </div>
            </div>
            <div className="rounded bg ms-5 mt-4" style={{ width: "40%" }}>
                <div className="w-full"><input className="p-2 text-white border" style={{ width: "100%", backgroundColor: "#f0f0f0", borderRadius: "2px" }} type="email" name="" id="" placeholder="Email" /></div>
                <div>
                    <input className="p-2 text-white border" style={{ width: "100%", backgroundColor: "#f0f0f0", borderRadius: "2px" }} type="password" name="" id="" placeholder="Password" />
                </div>
                <div className="w-full">
                    <button class="btn btn-primary mt-4" type="button" style={{ borderRadius: "18px", width: "100%" }}>Create Account</button>
                </div>
                <div className="mt-3">
                    <button type="button" class="btn btn-outline-secondary rounded-0" style={{ width: "100%" }}><img style={{ height: "20px", width: "20px", marginBottom: "2px" }} src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" /> Sign up with facebook</button>
                </div>
                <div className="mt-2 mb-2">
                    <button type="button" class="btn btn-outline-secondary rounded-0" style={{ width: "100%" }}> <img style={{ height: "20px", width: "20px", marginBottom: "2px" }} src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" /> Sign up with Google</button>
                </div>
                <div className="text-center fs-6 mt-4"> <button className="border-0 bg-white ">Forgot Password?</button> </div>
            </div>
            <div className="position-absolute" style={{ left: "55%", top: "20%" }}>
                <img style={{ height: "300px", width: "300px" }} src={atg_illustration} alt="" />
            </div>
            <div className="text-secondary position-absolute " style={{ marginLeft: "480px", bottom: "38px", fontSize: "14px" }} >By signing up, you agree to our Terms & conditions, Privacy policy</div>
        </div>
    )
}