import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productList from "../__mock__/products.json";

function DetailPage() {
    const [data, setData] = useState(productList.products);
    const params = useParams();

    const { productNumber } = params;

    let newarr = productList.products.filter(
        (el) => el.productNumber === productNumber
    );

    return (
        <>
            <div>
                <h4>{data[0].productName}</h4>
                <p>상품번호: {newarr[0].productNumber}</p>
                <p>가격: {Number(newarr[0].productPrice).toLocaleString()}원</p>
                <p>사이즈: {newarr[0].productSize}</p>
                <p>평점: {newarr[0].productRating}</p>
                <p>리뷰: {newarr[0].productReview}</p>
                <hr />
                <h2>리뷰</h2>
                <hr />
                {newarr[0].Review.map((list) => (
                    <>
                        <p>reviewer: {list.reviewer}</p>
                        <p>review: {list.review}</p>
                        <sp>rating: {list.rating}</sp>
                        <hr />
                    </>
                ))}
                <>
                    {/* <p>reviewer: {list.reviewer}</p>
                    <p>review: {list.review}</p>
                    <p>rating: {list.rating}</p> */}
                </>
                <></>
            </div>
        </>
        /* 상세 페이지는 자유롭게 꾸미시면 됩니다. 아직 해당 부분의 진도가
            나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은 미리
            콘솔에 찍어두었습니다. 단, 없는 번호 상품으로 접근 시 state페이지로
    돌아가도록 구현해주세요 */

        // <div>
        //         <h4>{list.productName}</h4>
        //         <p>상품번호: {list.productNumber}</p>
        //         <p>가격: {Number(list.productPrice).toLocaleString()}원</p>
        //         <p>사이즈: {list.productSize}</p>
        //         <p>평점: {list.productRating}</p>
        //         <p>리뷰: {list.productReview}</p>
        //     </div>
    );
}
export default DetailPage;
