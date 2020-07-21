import React from 'react'

export default function Product(props) {
 // let product = props.product;
  let {product, handleProductSelected, handleBuyProduct} = props;
  return (
    <div className="card">
      <img className="card-img-top" src={product.hinhAnh} alt={product.tenSP} />
      <div className="card-body">
        <h4 className="card-title">{product.tenSP}</h4>
        <button className="btn btn-success" onClick={() => handleProductSelected(product)}>Chi tiết</button>
        <button type="button" className="btn btn-danger" onClick={() => handleBuyProduct(product)}>
          Mua
        </button>
      </div>
    </div>
  );
}
