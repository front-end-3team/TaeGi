import styled from "styled-components";
import List from "./List/List";
function List_taek() {
    return (
        <>
            <Header>게시판</Header>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
        </>
    );
}
export default List_taek;

const Header = styled.h1`
    font-size: 30px;
    color: red;
`;
