const Bucket = ({products, didBuy}) => {

  // function deleteData(id) {

  //   fetch(`http://localhost:3000/bucket/${id}`, { 
  //     method: "DELETE", 
  //   });

  //   }


  //   console.log(bucket)

  return (
    <div>
      <ul>
      {products.map((product) => <li key={product.id}>{product.title}
        <button onClick={() => didBuy(product.id)}>delete</button>
      </li>)}
      </ul>
    </div>
  )
}

export default Bucket