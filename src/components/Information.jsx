import styled from "styled-components"

function Information(){ //할인 정보 같은 유용한 정보 제공하는 컴포넌트,자세히보기 누르면 메인페이지로 이동
    return(
        <InformationBar>
            <Info>대학생 할인 프로그램 안내</Info>
            <InfoLink href="/">자세히 보기</InfoLink>
        </InformationBar>
    )
}

const InformationBar=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: #f1f1f1;
    width: 90vw;
`

const Info=styled.p`
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
`

const InfoLink=styled.a`
    font-family: Pretendard;
    font-size: 13px;
    color: black;
    text-decoration: underline;

    &:hover{
        color: black;
    }
`
export default Information;