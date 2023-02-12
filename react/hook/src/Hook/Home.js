// import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Hook 함수</h1>
            <ul>
                <li>
                    <Link to="/Usestate">useState</Link>
                </li>
                <li>
                    <Link to="/UseEffect">useEffect</Link>
                </li>
                <li>
                    <a href="/">d</a>
                </li>
                <li>
                    <a href="/">f</a>
                </li>
            </ul>
        </>
    );
}
export default Home;
