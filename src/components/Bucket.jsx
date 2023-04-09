const Bucket = ({products, didBuy, setBucket }) => {


  return (
    <div className="window">
      <button className="close" onClick={() => setBucket (false)}><i className="fa-solid fa-xmark"></i></button>
      <ul>
      {products.map((product) => 
       product.buy
      ? 
      <li key={product.id}>{product.title}
        <button className="delete" onClick={() => didBuy(product)}>delete</button>
      </li>
      
      : ""
      )}
      </ul>
    </div>
  )
}

export default Bucket