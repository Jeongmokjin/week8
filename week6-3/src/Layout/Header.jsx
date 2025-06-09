import styled from "styled-components"
import Logo from "../components/Logo";
import NavButton from "../components/NavButton";
import Search from "../components/Search";

function Header(){ //말 그대로 헤더임
    return(
        <H>
            <Logo/>
            <NavBar>
                <NavButton name="Main" link="/"/>
                <NavButton name="Clothing" link="/ClothingPage"/>
                <NavButton name="Shoes" link="/ShoesPage"/>
                <NavButton name="Adimin" link="/AdminPage"/>
            </NavBar>
            <Search/>
        </H>
    )
}

const H=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90vw;
    height: 50px;
    align-items: center;
`

const NavBar=styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`

export default Header;