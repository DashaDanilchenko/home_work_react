const Bucket = ({products }) => {


  return (
    <div className="bucket">
      <button className="close" onClick={() => console.log (false)}><i className="fa-solid fa-xmark"></i></button>
      <ul>
      {products.map((product) => 
       product.buy
      ? 
      <li key={product.id}>{product.title}
        <button className="delete" onClick={() => console.log(product)}>delete</button>
      </li>
      
      : ""
      )}
      </ul>
    </div>
  )
}

export default Bucket