import styled from "styled-components";

function NavButton({name,link}){ //원하는 곳으로 이동하는 버튼(?) 호버효과 적용함, 버튼 이름하고 목적지 프롭스로 받음(재사용성 업)
    return(
        <NB href={link} >{name}</NB>
    )
}

const NB=styled.a`
    color: black;
    text-decoration: none;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;

    &:hover {
        border-bottom: 2px solid black;
        color: black;
    }
`

export default NavButton;