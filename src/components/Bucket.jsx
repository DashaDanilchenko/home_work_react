const Bucket = ({products, didBuy}) => {


  return (
    <div>
      <ul>
      {products.map((product) => 
       product.buy
      ? <li key={product.id}>{product.title}
        <button onClick={() => didBuy(product.id)}>delete</button>
      </li>
      : ""
      )}
      </ul>
    </div>
  )
}

export default Bucket