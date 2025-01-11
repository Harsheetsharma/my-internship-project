import Header from '../images/Header.jpg';
import Headerimg from '../images/Headerimg.jpeg';
export function MainImage() {
    return (
        <div className='' style={{ height: "20%" }}>
            <img class='w-100 img-fluid ' style={{ height: "440px", objectFit: "cover" }} src={Header} alt="Main Image" />
            <div class="position-absolute text-white text-start" style={{ top: "40%", left: "10%" }}>
                <div className='h2'>Computer Engineering</div>
                <div className='font-weight-normal '>142,765 Computer Engineers follow this</div>
            </div>
        </div>
    )
}