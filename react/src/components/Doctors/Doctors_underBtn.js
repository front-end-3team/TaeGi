import Another from "../Another/another";
import {Link} from "react-router-dom";
function Doctors_underBtn(){
    return(
        <>
            <div class="doctors_under_btn">
                <div class="doctors_under_btn_txt">
                    <h3>헥톤프로젝트의 실버케어 프로젝트</h3>
                    <Link to='/Another'>또하나의가족</Link>
                </div>
                <div class="doctors_under_btn_text">
                <a href=".././"></a>
                <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div class="doctors_under_btn_contact"><a href="./contact.html">CONTACT</a>
                <i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </>
    );
}
export default Doctors_underBtn;