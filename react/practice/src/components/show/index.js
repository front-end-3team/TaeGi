import { useState } from "react";
import OnClickShow from "./onClickShow";

function ShowIndex() {
    const [show, setShow] = useState(false);

    const onPushBtn = () => {
        setShow(!show);
    };
    return (
        <>
            <button onClick={onPushBtn}>보이기</button>
            {show && <OnClickShow />}
        </>
    );
}

export default ShowIndex;
