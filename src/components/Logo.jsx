import styled from "styled-components";
import { useNavigate } from "react-router";

function Logo(){ //로고 컴포넌트, 너무 과하게 분리했하는 생각이 들긴함, 로고 누르면 메인페이지로 이동
    const navigate = useNavigate();
    function ToMain(){
        navigate("/");
    }


    return(
        <>
        <LogoImg src="/media/나이키 로고.png" onClick={ToMain}/>
        </>
    )
}

const LogoImg=styled.img`
    width: 80px;
    height: 30px;
    cursor: pointer;
`

export default Logo;