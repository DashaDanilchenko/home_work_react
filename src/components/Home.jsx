import { useState, useEffect } from 'react';
import Product from "./Product";
import { Link } from 'react-router-dom';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(json => setProducts(json))
    }, []);

    return (
        <>
        <Link to="bucket">Bucket</Link>
            <div className="list">
                { products.map((product) => <Product 
                                                key={ product.id }  
                                                product={ product }
                                            />
                            )
                }
            </div>
        </>
    );
}

export default Home;