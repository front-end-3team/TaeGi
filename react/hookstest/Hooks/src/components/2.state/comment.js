import styled from "styled-components";

function Comment({ postComments, setPost, nameValue, contentsValue }) {
    //삭제
    const onListRemove = (list) => {
        if (list.myComment === false)
            return alert("자신이 추가한 데이터만 삭제가능합니다");
        setPost((prev) => ({
            ...prev,
            Comments: [
                ...prev.Comments.filter((el) => {
                    return el.User.nickname !== list.User.nickname;
                }),
            ],
        }));
        console.log(list.myComment);
    };

    //변경
    const onListChange = (list) => {
        setPost((prev) => ({
            ...prev,
            Comments: [
                ...prev.Comments.filter((el) => {
                    return el.User.nickname !== list.User.nickname;
                }),
                {},
            ],
            // ...prev,
            // Comments: [
            //     ...prev.Comments,
            //     {
            //         User: {
            //             nickname: nameValue,
            //         },
            //         content: contentsValue,
            //         myComment: true,
            //     },
            // ],
        }));
    };

    return (
        <S.CommentItem>
            {postComments.map((el) => (
                <>
                    <p>
                        작성자: <span>{el.User.nickname}</span>
                    </p>
                    <p>
                        댓글 내용: <span>{el.content}</span>
                    </p>
                    <button onClick={() => onListChange(el)}>수정</button>
                    <button onClick={() => onListRemove(el)}>삭제</button>
                </>
            ))}
        </S.CommentItem>
    );
}
export default Comment;

const CommentItem = styled.li`
    border: 1px solid #000;
    margin: 10px;
`;

const S = {
    CommentItem,
};
