import { useState } from "react";
import MapList from "./mapList";

function MakeIndex() {
    const [dataList, SetDataList] = useState([
        {
            id: 1,
            name: "박선영",
        },
        {
            id: 2,
            name: "김태기",
        },
        {
            id: 3,
            name: "김민식",
        },
        {
            id: 4,
            name: "조아연",
        },
    ]);

    const onRemove = (id) => {
        console.log(id);
    };

    return (
        <>
            <MapList dataList={dataList} onRemove={onRemove} />
        </>
    );
}
export default MakeIndex;
