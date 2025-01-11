import Headerimg from '../images/Headerimg.jpeg';
import sarthak from '../images/sarthak.jpeg';
import secondpost from '../images/secondpost.jpeg';
import sarawest from '../images/sarawest.jpeg';
import carpost from '../images/carpost.jpeg';
import ronaljones from '../images/ronaljones.jpeg';
import josephgray from '../images/josephgray.jpeg';
export function Posts() {
    return (
        <div className='position-relative bg-white' style={{ left: "19%", top: "100px", width: "30%", height: "1730px" }}>
            <div id="1" className='border rounded' style={{ height: "26%" }} >
                <div><img className='position-relative pt-2 rounded ' src={Headerimg} alt="Main image" style={{ height: "220px", width: "100%", objectFit: "cover" }} /></div>
                <div className='font-semibold pt-2 ps-4'><span ></span>✍️ Article</div>

                <div className='d-flex justify-content-between text-align-center fw-semibold fs-6 ps-4 pt-2' style={{ width: "100%" }}>
                    <div className='' style={{ width: "400px" }}>
                        What if famous brands had regular fonts? Meet RegulaBrands!
                    </div>
                    <button className='fw-bold fs-4 me-5 border-0 bg-white' style={{ cursor: "pointer" }}>...</button>
                </div>
                <div className='text-secondary ps-4 pt-2 w-100'>I've worked in UX for the better part of a decade. From now on, I plan to rei…</div>

                <div className='d-flex postion-relative justify-content-between mt-4 align-items-center' style={{ height: "10%" }}>
                    <div className='d-flex justify-content-between ms-4 align-items-center'>
                        <div className=''><img className='rounded-circle' style={{ height: "10%", width: "30px", objectFit: "cover" }} src={sarthak} alt="" /></div>
                        <div className='ms-3'>Sartak kamra</div>
                    </div>
                    <div className='d-flex justify-content-betwen align-items-center'>
                        <div className='me-3'>
                            1.4k views
                        </div>
                        <div className='me-3 '><button className='border-0 rounded ' style={{ height: "80%", width: "60px" }}>Share</button></div>
                    </div>
                </div>
            </div>

            <div id="2" className='border rounded mt-2' style={{ height: "26%" }} >
                <div><img className='position-relative rounded ' src={secondpost} alt="Main image" style={{ height: "220px", width: "100%", objectFit: "cover" }} /></div>
                <div className='font-semibold pt-2 ps-4'><span ></span>🔬️ Education</div>

                <div className='d-flex justify-content-between fw-semibold fs-6 ps-4 pt-2' style={{ width: "100%" }}>
                    <div className='' style={{ width: "400px" }}> Tax Benefits for Investment under National Pension Scheme launched by Government</div>
                    <button className='fw-bold fs-4 me-5 border-0 bg-white' style={{ cursor: "pointer" }}>...</button>
                </div>
                <div className='text-secondary ps-4 pt-2 w-100'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>

                <div className='d-flex position-relative justify-content-between mt-4 align-items-center' style={{ height: "10%" }}>
                    <div className='d-flex justify-content-between ms-4 align-items-center'>
                        <div className=''><img className='rounded-circle' style={{ height: "10%", width: "30px", objectFit: "cover" }} src={sarawest} alt="" /></div>
                        <div className='ms-3'>Sara west</div>
                    </div>
                    <div className='d-flex justify-content-betwen align-items-center'>
                        <div className='me-3'>
                            1.4k views
                        </div>
                        <div className='me-3 '><button className='border-0 rounded ' style={{ height: "80%", width: "60px" }}>Share</button></div>
                    </div>
                </div>
            </div>


            <div id="3" className='border rounded mt-2' style={{ height: "26%" }} >
                <div><img className='position-relative rounded ' src={carpost} alt="Main image" style={{ height: "220px", width: "100%", objectFit: "cover" }} /></div>
                <div className='font-semibold pt-2 ps-4'><span ></span>🗓️ Meetup</div>

                <div className='d-flex justify-content-between align-items-center fw-semibold fs-6 ps-4 pt-2' style={{ width: "100%", height: "40px" }}>
                    <div className='w-full' style={{ width: "400px" }}> Finance & Investment Elite Social Mixer @Lujiazui</div>
                    <div className='mt-0 text-align-center mb-3'>
                        <button className='fw-bold fs-4 me-5 border-0  bg-white ' style={{ cursor: "pointer", height: "30px" }}>...</button>
                    </div>
                </div>
                <div className='d-flex justify-content-between ms-4 mt-1' style={{ width: "65%" }}>
                    <div className='d-flex'>
                        <div><img style={{ height: "20px", width: "20px" }} src="https://img.icons8.com/?size=100&id=23&format=png&color=000000" alt="" /></div>
                        <div>Fri,12 Oct,2018</div>
                    </div>
                    <div className='d-flex'>
                        <div><img style={{ height: "20px", width: "20px" }} src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" alt="" /></div>
                        <div>Ahmdabad,India</div>
                    </div>
                </div>

                <button class="btn border ms-4 mt-3 text-warning" style={{ width: "90%" }} type="button">Visit Website</button>

                <div className='d-flex justify-content-between mt-4 align-items-center'>
                    <div className='d-flex justify-content-between ms-4 align-items-center'>
                        <div className=''><img className='rounded-circle' style={{ height: "30px", width: "30px", objectFit: "cover" }} src={ronaljones} alt="" /></div>
                        <div className='ms-3'>Ronal Jones</div>
                    </div>
                    <div className='d-flex justify-content-betwen align-items-center'>
                        <div className='me-3'>
                            1.4k views
                        </div>
                        <div className='me-3 '><button className='border-0 rounded ' style={{ height: "40px", width: "60px" }}>Share</button></div>
                    </div>
                </div>
            </div>

            <div id="4" className='border rounded mt-2' style={{ height: "15%" }} >
                <div className='font-semibold pt-2 ps-4 d-flex align-items-center' style={{ width: "100%" }}>
                    <div><span ><img style={{ height: "20px", width: "20px" }} src="https://img.icons8.com/?size=100&id=164W4QT7pxij&format=png&color=000000" alt="" /></span></div>
                    <div className='ms-2 mt-1'>Job</div>
                </div>

                <div className='d-flex justify-content-between align-items-center fw-semibold ps-4 pt-2 w-full' style={{ height: "40px", fontSize: "18px" }}>
                    <div className='' style={{ width: "400px" }}>Software Developer</div>
                    <div className='mt-0 text-align-center mb-3'>
                        <button className='fw-bold fs-4 me-5 border-0  bg-white ' style={{ cursor: "pointer", height: "30px" }}>...</button>
                    </div>
                </div>
                <div className='d-flex postion-relative justify-content-between ms-4 mt-1' style={{ width: "100%" }}>
                    <div className='d-flex'>
                        <div><img style={{ height: "20px", width: "20px" }} src="https://img.icons8.com/?size=100&id=OuyPuUC8DZXQ&format=png&color=000000" alt="" /></div>
                        <div className='ms-1'>Innovaccer Analytics Private Ltd.</div>
                    </div>
                    <div className='d-flex w-full me-5'>
                        <div><img style={{ height: "20px", width: "20px" }} src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" alt="" /></div>
                        <div>Noida,India</div>
                    </div>
                </div>

                <button class="btn border ms-4 mt-3 text-success" style={{ width: "90%" }} type="button">Apply on Timesjobs</button>

                <div className='d-flex justify-content-between mt-4 align-items-center'>
                    <div className='d-flex justify-content-between ms-4 align-items-center'>
                        <div className=''><img className='rounded-circle' style={{ height: "30px", width: "30px", objectFit: "cover" }} src={josephgray} alt="" /></div>
                        <div className='ms-3'>Joseph Gray</div>
                    </div>
                    <div className='d-flex justify-content-betwen align-items-center'>
                        <div className='me-3'>
                            1.4k views
                        </div>
                        <div className='me-3 '><button className='border-0 rounded ' style={{ height: "40px", width: "60px" }}>Share</button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}