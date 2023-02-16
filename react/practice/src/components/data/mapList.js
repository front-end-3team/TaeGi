function MapList({ dataList, onRemove }) {
    return dataList.map((list) => (
        <div>
            {list.id} {list.name}
            <button onClick={onRemove=() => list.id/}>꿈나라로~</button>
        </div>
    ));
}
export default MapList;
