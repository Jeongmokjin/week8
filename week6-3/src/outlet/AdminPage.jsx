import styled from "styled-components";
import Logo from "../components/Logo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminProducts from "../components/AdminProducts";

function AdminPage(){
    const [products, setProducts] = useState([]); // 상품
    const [what, setWhat] = useState("clothes");

    const getClothes= ()=>{
        setWhat("clothes");

        axios
            .get(`https://shopping-website-server.onrender.com/${what}`)
            .then((response) => {
            setProducts(Array.isArray(response.data) ? response.data : []);
            })
            .catch((err) => {
            console.error(err);
            })   
    };

    const getShoes= ()=>{
        setWhat("shoes");
        axios
            .get(`https://shopping-website-server.onrender.com/${what}`)
            .then((response) => {
            setProducts(Array.isArray(response.data) ? response.data : []);
            })
            .catch((err) => {
            console.error(err);
            })   
    };

    useEffect(() => {
        getClothes();
    }, []);

    return(
        <>
        <H>
            <Logo/>
            <NavBar>
                <AdminButton onClick={getClothes} color="navy">옷 조회</AdminButton>
                <AdminButton onClick={getShoes} color="navy">신발 조회</AdminButton>
            </NavBar>
        </H>
        <AdminProducts data={products} getClothes={getClothes} getShoes={getShoes} what={what}/>
        </>
    )
}

const H=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 90vw;
    height: 50px;
    align-items: center;
`
const NavBar=styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`
const AdminButton=styled.button`
    color: ${(props)=>props.color};

    &:hover{
      border-color: ${(props)=>props.color};
    }
`

export default AdminPage;