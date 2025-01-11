import onefollow from '../images/onefollow.jpeg';
import secondlocation from '../images/secondlocation.jpeg';
import thirdlocation from '../images/thirdlocation.jpeg';
import fourthlocation from '../images/fourthlocation.jpeg';
import { useState } from 'react';

export function Locations() {
    const [follow, setFollow] = useState("Follow");
    const [follow1, setfollow1] = useState("Follow");
    const [follow2, setfollow2] = useState("Follow");
    const [follow3, setfollow3] = useState("Follow");
    return (
        <div className="position-absolute " style={{ left: "53%", width: "20%", height: "62%", top: "67%" }}>
            <div className="d-flex justify-content-between align-items-center mt-3 w-full">
                <div className="d-flex align-items-center ">
                    <div className="ms-1"><img style={{ height: "25px", width: "25px" }} src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" alt="" /></div>
                    <div className="ms-2 rounded border"><input className="border p-1" type="text" placeholder="Enter your location" /></div>
                </div>
                <div>
                    <img className="me-3" style={{ height: "25px", width: "25px", cursor: "pointer" }} src="https://img.icons8.com/?size=100&id=86376&format=png&color=000000" alt="" />
                </div>
            </div>
            <div><hr /></div>
            <div className="d-flex ms-2 w-full">
                <span className="me-3"><img style={{ height: "20px", width: "20px" }} src="https://img.icons8.com/?size=100&id=11691&format=png&color=000000" alt="" /></span>
                <div>Your location will help us serve better and extend a personalised experience.</div>
            </div>

            <div className="mt-5 ms-1" style={{ width: "100%", height: "500px" }}>
                <div className="d-flex align-items-center">
                    <div className="ms-2"><img style={{ height: "15px", width: "15px" }} src="https://img.icons8.com/?size=100&id=85597&format=png&color=000000" alt="" /></div>
                    <div className="ms-2">RECOMMENDED GROUPS</div>
                </div>
                <div className='d-flex justify-content-between align-items-center ms-1 mt-5'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img className='rounded-circle' style={{ height: "30px", width: "30px", objectFit: "cover" }} src={onefollow} alt="" />
                        </div>
                        <div className='ms-2'>
                            Leisure
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {
                            setFollow("Following");
                        }} className='border bg-white rounded'>{follow}</button>
                    </div>

                </div>
                <div className='d-flex justify-content-between align-items-center ms-1 mt-5'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img className='rounded-circle' style={{ height: "30px", width: "30px", objectFit: "cover" }} src={secondlocation} alt="" />
                        </div>
                        <div className='ms-2'>
                            Activism
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {
                            setfollow1("Following");
                        }} className='border bg-white rounded'>{follow1}</button>
                    </div>

                </div>
                <div className='d-flex justify-content-between align-items-center ms-1 mt-5'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img className='rounded-circle' style={{ height: "30px", width: "30px", objectFit: "cover" }} src={thirdlocation} alt="" />
                        </div>
                        <div className='ms-2'>
                            MBA
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {
                            setfollow2("Following");
                        }} className='border bg-white rounded'>{follow2}</button>
                    </div>

                </div>
                <div className='d-flex justify-content-between align-items-center ms-1 mt-5'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img className='rounded-circle' style={{ height: "30px", width: "30px", objectFit: "cover" }} src={fourthlocation} alt="" />
                        </div>
                        <div className='ms-2'>
                            Philosophy
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {
                            setfollow3("Following");
                        }} className='border bg-white rounded'>{follow3}</button>
                    </div>

                </div>
            </div>
        </div>
    )
} 
