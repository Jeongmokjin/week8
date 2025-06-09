import ProductInfo from "../components/ProductInfo";
import {ConditionBar,HowMany,DropBox,DropButton,OptionBox,Option,ProductsBox} from "../style/Product.style"
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Products({data,what}){ 
    const options=["기본","최신순","안 최신순"]; //분류 기준
    const [open,setOpen]=useState(false); //토글 열림,닫힘 변수
    const [select,setSelect]=useState("기본"); //분류 기준 변수
    const [filterForm, setFilter] = useState({  color:"",size:"",gender:"", type: "" });

    function Drop(){ //버튼 클릭하면 현재 상태에 not해서 반대 상태로
      setOpen(!open);
    }

    function NowOption(value){ //기준 선택하면 기준 바뀌면서 토글 닫기
      setSelect(value);
      setOpen(!open);
    }

  let sortingProduct=data;  //데이터 정렬해서 담을 변수
  if(select !=="기본"){ //기준이 기본이 아니면 실행
    sortingProduct=[...data].sort((a,b)=>{ //sort함수는 결과가 양수면 b,a순이고 음수면 a,b순으로 정렬
      return select==="최신순" ? b.id - a.id : a.id - b.id  
    }); //높은 가격순이면 b-a를 반환->양수면(b가 a보다 크면) b,a -> 내림차순 정렬
  }

  function Filter(what){
    // const filterData={
    //   color:filterForm.color,
    //   size:filterForm.size,
    //   gender:filterForm.gender,
    //   type:filterForm.type
    // };
    const filterData = Object.fromEntries(
    Object.entries(filterForm).filter(([_, value]) => value)
    );

    axios
      .get(`https://shopping-website-server.onrender.com/${what}`, {params:filterData})
      .then(() => {
        
        setFilter({ color:"",size:"",gender:"", type: ""});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return(
    <>
    <ConditionBar>
      <HowMany>상품 ({data.length})</HowMany>
      <p>상품 필터</p>
        <p>색상<InsertData value={filterForm.color} onChange={(e) => setFilter({...filterForm, color: e.target.value})}/></p>
        <p>사이즈<InsertData value={filterForm.size} onChange={(e) => setFilter({...filterForm, size: e.target.value})}/></p>
        <p>성별<InsertData value={filterForm.gender} onChange={(e) => setFilter({...filterForm, gender: e.target.value})}/></p>
        <p>종류<InsertData value={filterForm.type} onChange={(e) => setFilter({...filterForm, type: e.target.value})}/></p>
      <AdminButton onClick={(()=>Filter(what))} color="navy">적용</AdminButton>
      <DropBox>
        <DropButton onClick={Drop}>정렬 기준: {select} {open ? "∧":"∨"}</DropButton>
          {open && (
            <OptionBox>
              {options.map(option=>(
                <Option key={option} onClick={()=>NowOption(option)} now={select==option ? 1:0}>
                    {option}
                </Option>
              ))}
            </OptionBox>
          )}
      </DropBox>
    </ConditionBar>
    
    <ProductsBox>
      {sortingProduct.map(product=>(
        <ProductInfo 
        key={product.id}
        image={product.image}
        name={product.name}
        type={product.type}
        color={product.color}
        price={product.price}
        rating={product.rating}
        review={product.reviews}
        size={product.size}
        />
      ))}
    </ProductsBox>
    </>
  )
}
const AdminButton=styled.button`
    color: ${(props)=>props.color};

    &:hover{
      border-color: ${(props)=>props.color};
    }
`
const InsertData=styled.input`
    
`

export default Products;