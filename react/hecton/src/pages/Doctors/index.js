import Header from "../../components/Header/Header";
import Doctors_head from "./Doctors_head";
import Doctors_img from "./Doctors_img";
import Doctors_solution_top from "./Doctors_solution_top";
import Doctors_under_btn from "./Doctors_under_btn";
import Footer from "../../components/Footer/Footer";

import "../../css/doctors.css";
import "../../css/reset.css";

function Doctors() {
    return (
        <>
            <Header></Header>
            <Doctors_head></Doctors_head>
            <Doctors_img></Doctors_img>
            <Doctors_solution_top></Doctors_solution_top>
            <Doctors_under_btn></Doctors_under_btn>
            <Footer></Footer>
        </>
    );
}

export default Doctors;
