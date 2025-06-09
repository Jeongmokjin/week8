import styled from "styled-components";
import { useNavigate } from "react-router";

function MainIntro(){ //메인페이지 소개?, 주요 상품 같은 정보
    const navigate = useNavigate();
    function ToShoes(){
        navigate("/ShoesPage");
    }

    return(
        <Box>
            <ImgBox>
                <MainImg src="media/메인화면 운동.png" onClick={ToShoes}/>
                <MainImg src="media/메인화면 신발.png" onClick={ToShoes}/>
            </ImgBox>
            <TextBox>
                <Text weight="500" size="18px">나이키 농구</Text>
                <Text weight="900" size="50px">힘과 지혜를 담은 진주</Text>
                <Text weight="350" size="18px">
                    에이원 'OG 펄'. 에이자의 할머니가 
                    손녀에게 강인함을 상징하는 진주를 선물하는 순간에서 영감을 받았습니다.</Text>
                <BuyButton onClick={ToShoes}>구매하기</BuyButton>
            </TextBox>
        </Box>
    )
}

const Box=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const  ImgBox=styled.div`
    display: flex;
    flex-direction: row;
`
const MainImg=styled.img`
    margin: 0;
    width: 50%;
    cursor: pointer;
`
const TextBox=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
`
const Text=styled.p`
    color: black;
    font-family: Pretendard;
    font-weight: ${(props)=>props.weight};
    font-size: ${(props)=>props.size};
    margin: 10px;
    line-height: 1;
`
const BuyButton=styled.button`
    background-color: black;
    border-radius: 50px;
    color: white;
    font-family: Pretendard;
    font-weight: 500;
    width: 100px;
    margin-top: 15px;

    &:hover{
        background-color: #5b5b5b;
        border: none;
    }
`
export default MainIntro;