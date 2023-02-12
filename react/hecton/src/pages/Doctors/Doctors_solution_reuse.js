function Doctors_solution_reuse({ title, contents }) {
    return (
        <>
            <div class="doctors">
                <img
                    src="https://www.hectonproject.com/icon/doctors.svg"
                    alt=""
                    width="180px"
                ></img>
                <div>{title}</div>
            </div>
            <p>{contents}</p>
        </>
    );
}
export default Doctors_solution_reuse;
