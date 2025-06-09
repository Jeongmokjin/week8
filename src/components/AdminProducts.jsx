import {ConditionBar,HowMany,DropBox,DropButton,OptionBox,Option,ProductsBox,
  ProductBox, ProductImg, ProductName, ProductKind,ProductPrice
} from "../style/Product.style"
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function AdminProducts({data, getClothes, getShoes,what}){
    const options=["기본","최신순","안 최신순"]; 
    const [open,setOpen]=useState(false); 
    const [select,setSelect]=useState("기본"); 
    const [form, setForm] = useState({ 
        image:"" ,name: "",rating:"",review:"",price:"",soldout:"",
        color:"",size:"",gender:"", type: "" });
    const [filterForm, setFilter] = useState({  color:"",size:"",gender:"", type: "" });


  function Drop(){
    setOpen(!open);
  }

  function NowOption(value){ 
    setSelect(value);
    setOpen(!open);
  }

  let sortingProduct=data; 
  if(select !=="기본"){ 
    sortingProduct=[...data].sort((a,b)=>{ 
      return select==="최신순" ? b.id - a.id : a.id - b.id  
    }); 
  }
 
  function addProduct(what){
      const productData=form;
      axios
          .post(`https://shopping-website-server.onrender.com/${what}`, productData)
          .then(() => {
              setForm({
                  image:"" ,name: "",rating:"",review:"",price:"",soldout:"",
                  color:"",size:"",gender:"", type: ""});
              if(what=="clothes") getClothes();
              else getShoes();
          })
          .catch((err) => {
              console.error(err);
          });
  }

  function Delete(id,what){
    console.log("삭제 요청 ID:", id);
    if (window.confirm("정말 이 제품을 삭제하시겠습니까?")) {

      axios
        .delete(`https://shopping-website-server.onrender.com/${what}/${id}`)
        .then(() => {
          if(what=="clothes") getClothes();
          else getShoes();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  function Put(id,what){
    const productData=form;

      axios
        .put(`https://shopping-website-server.onrender.com/${what}/${id}`, productData)
        .then(() => {
          setForm({
            image:"" ,name: "",rating:"",review:"",price:"",soldout:"",
            color:"",size:"",gender:"", type: ""});
          if(what=="clothes") getClothes();
          else getShoes();
        })
        .catch((err) => {
          console.error(err);
        });
  }

  function Patch(id,what){
    const patchData={};
    Object.keys(form).forEach((key) => {//객체 요소를 배열로 만듦,객체의 name같은게 key임
      if (form[key] !== "") {//입력된 값이 있으면면
        patchData[key] = form[key]; // 변경된 필드만 추출
      }
    });
    axios
      .patch(`hhttps://shopping-website-server.onrender.com/${what}/${id}`, patchData)
      .then(() => {
          setForm({
            image:"" ,name: "",rating:"",review:"",price:"",soldout:"",
            color:"",size:"",gender:"", type: ""});
          if(what=="clothes") getClothes();
          else getShoes();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function Filter(what){
    const filterData={
      color:filterForm.color,
      size:filterForm.size,
      gender:filterForm.gender,
      type:filterForm.type
    };

    axios
      .get(`https://shopping-website-server.onrender.com/${what}`, {params:filterData})
      .then((res) => {
        if(what=="clothes"){
          getClothes(res.data)
        } else{
          getShoes(res.data)
        }
        setFilter({ color:"",size:"",gender:"", type: ""});
      })
      .catch((err) => {
        console.error(err);
      });
  }


  return(
    <>
    <InsertBox>
        <p>이미지 링크<InsertData value={form.image} onChange={(e) => setForm({...form, image: e.target.value})}/></p>
        <p>제품 이름<InsertData value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/></p>
        <p>별점<InsertData value={form.rating} onChange={(e) => setForm({...form, rating: e.target.value})}/></p>
        <p>리뷰<InsertData value={form.review} onChange={(e) => setForm({...form, review: e.target.value})}/></p>
        <p>가격<InsertData value={form.price} onChange={(e) => setForm({...form, price: e.target.value})}/></p>
        <p>매진 여부<InsertData value={form.soldout} onChange={(e) => setForm({...form, soldout: e.target.value})}/></p>
        <p>색상<InsertData value={form.color} onChange={(e) => setForm({...form, color: e.target.value})}/></p>
        <p>사이즈<InsertData value={form.size} onChange={(e) => setForm({...form, size: e.target.value})}/></p>
        <p>성별<InsertData value={form.gender} onChange={(e) => setForm({...form, gender: e.target.value})}/></p>
        <p>종류<InsertData value={form.type} onChange={(e) => setForm({...form, type: e.target.value})}/></p>
        <AdminButton onClick={()=>addProduct(what)} color="green" >새상품 추가</AdminButton>
    </InsertBox>

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
        <ProductBox>
            <ProductImg src={product.image}/>
            <ProductName>{product.name}</ProductName>
            {product.type && <ProductKind>{product.type}</ProductKind>}
            <ProductKind>⭐{product.rating}</ProductKind>
            <ProductKind>후기 {product.reviews}개</ProductKind>
            <ProductKind>{product.size}</ProductKind>
            <ProductKind>{product.color} 색상</ProductKind>
            <ProductPrice>{product.price}$</ProductPrice>
            <ButtonBox>
              <AdminButton onClick={() => Put(product.id,what)} color="orange">상품 변경</AdminButton>
              <AdminButton onClick={()=> Patch(product.id,what)} color="yellowgreen">상품 부분 변경</AdminButton>
              <AdminButton onClick={() => Delete(product.id,what)} color="red">상품 제거</AdminButton>
            </ButtonBox>
        </ProductBox>
      ))}
    </ProductsBox>
    </>
    )
}

const ButtonBox=styled.div`
  display: flex;
  gap: 10px;
`
const AdminButton=styled.button`
    color: ${(props)=>props.color};

    &:hover{
      border-color: ${(props)=>props.color};
    }
`
const InsertBox=styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
const InsertData=styled.input`
    
`
export default AdminProducts;