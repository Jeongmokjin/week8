import {ProductBox, ProductImg, ProductName, ProductKind,ProductPrice} from "../style/Product.style"

function ProductInfo({image,name,color,price,type,rating,review,size}){ //사진 주소,특징,이름,종류,색상,가격을 받고 특징은 있으면 출력
    return(
        <ProductBox>
            <ProductImg src={image}/>
            <ProductName>{name}</ProductName>
            {type && <ProductKind>{type}</ProductKind>}
            <ProductKind>⭐{rating}</ProductKind>
            <ProductKind>후기 {review}개</ProductKind>
            <ProductKind>size: {size}</ProductKind>
            <ProductKind>{color} 색상</ProductKind>
            <ProductPrice>{price}$</ProductPrice>
        </ProductBox>
    )
}

export default ProductInfo;