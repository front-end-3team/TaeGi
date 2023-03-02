const ReducerQ1List = ({ ingredients, onClick }) => {
    return (
        <tbody>
            {ingredients.map((ingredient) => (
                <tr>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.price}</td>
                    <td>
                        <button onClick={() => onClick(ingredient)}>
                            삭제
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};
export default ReducerQ1List;
