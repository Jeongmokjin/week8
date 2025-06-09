import styled from "styled-components";

export const ProductBox=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 0.4;
`
export const ProductImg=styled.img`
    width: 400px;
    height: 400px;
`
export const ProductName=styled.p`
    color: black;
    font-family: Pretendard;
    font-weight: 550;
    margin-top: 20px;
    margin-bottom: 0;
`
export const ProductKind=styled.p`
    color: #7a7878;
    font-family: Pretendard;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 0;
`
export const ProductPrice=styled.p`
    color: black;
    font-family: Pretendard;
    font-weight: 550;
    margin-top: 30px;
`

export const ProductsBox=styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
`

export const ConditionBar=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
`

export const HowMany=styled.p`
    font-family: Pretendard;
    font-weight: 500;
    font-size: 25px;
`
export const DropBox=styled.div`
  display: flex;
  position: relative;
  width: 200px;
  height: 50px;
  flex-direction: column;
`
export const DropButton=styled.button`
    display: flex;
    border: none;
    font-family: Pretendard;
    font-weight: 400;
    background-color: white;
    cursor: pointer;
    justify-content: flex-end;

    &:focus{
        outline: none;
    }
`
export const OptionBox=styled.ul`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    text-align: right;
    padding: 20px;
    padding-left: 0;
    font-family: Pretendard;
    width: 100px;
    margin-left: auto;
`

export const Option=styled.li`
  list-style: none;
  justify-content: center;
  color: ${(props)=> ((props.now) ? "#c1bebe":"black")};
  cursor: ${(props)=> ((props.now) ? "not-allowed": "pointer")};

  &:hover{
    color: #6e6d6d;
  }
`