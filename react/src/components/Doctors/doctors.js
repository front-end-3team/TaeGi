import Header from '../Header';
import Footer from '../Footer';
import Doctors_header from './Doctors_header';
import Doctors_img1 from './Doctors_img1';
import Doctors_img2 from './Doctors_img2';
import Doctors_solution from './Doctors_solution';
import Doctors_underBtn from './Doctors_underBtn';
import '../../css/reset.css';
import '../../css/doctors.css';
import '../../css/link.css';
function Doctors(){
    return(
        <>
        <Header></Header>
        <Doctors_header></Doctors_header>
        <Doctors_img1></Doctors_img1>
        <Doctors_img2></Doctors_img2>
        <Doctors_solution></Doctors_solution>
        <Doctors_underBtn></Doctors_underBtn>
        <Footer></Footer>
        </>
    )
}
export default Doctors;