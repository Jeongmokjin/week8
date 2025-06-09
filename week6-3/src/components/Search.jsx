import styled from "styled-components";

function Search(){ //디자인만 하고 기능은 구현하지 않았음, 사실 못한 걸지도...(시도는 안 해봄)
    return(
        <SearchBox>
            <SearchImg src="/media/나이키 돋보기.png"/>
            <SearchInsert type="text" placeholder="검색"/>
        </SearchBox>
    )
}

const SearchBox=styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #f1f1f1;
`
const SearchImg=styled.img`
    width: 25px;
    height: 25px;
    margin-left: 10px;
`
const SearchInsert=styled.input`
    flex-grow: 1;
    background: transparent;
    border: none;
    outline: none;
    font-size: 14px;

    &::placeholder{
        color: #615f5f;
        text-align: center;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.98px;
        text-align: left;
    }
`

export default Search;