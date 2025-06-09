import styled from "styled-components";
import MainIntro from "../components/MainIntro";

function MainPage(){ //메인페이지에 무언갈 더 넣는다는 가정으로 따로 분류해봄, 이렇게 분류하는게 맞나...? 
    return(
        <Page>
            <MainIntro/>
        </Page>
    )
}

const Page=styled.div`

`

export default MainPage;