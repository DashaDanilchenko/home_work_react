import { useState, useEffect } from 'react';
import Product from "./Product";
import { Link } from 'react-router-dom';

const Home = ({bucket, setBucket}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(json => setProducts(json))
    }, []);

  return (
    <div>
         <Link className="link"  to="bucket">Bucket</Link>
         <Link className="link"  to="newProduct">New Product</Link>
            <div className="list">
                { products.map((product) => <Product 
                                                key={ product.id }  
                                                product={ product }
                                                bucket={bucket}
                                                setBucket={setBucket}
                                            />
                            )
                }
            </div>
    </div>
  )
}

export default Home;