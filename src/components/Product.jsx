import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";


const Product = ({product}) => {

    

    const [bucket, setBucket] = useState({})

    function str_gen() {
        const allStr = '123456789QWERTYUIOPASDFGHJKLZXCVBNM';
        let str = '';
        for (let i = 0; i < 5; i++) {
            let pos = Math.floor(Math.random() * allStr.length);
            str += allStr.substring(pos,pos+1);
        }
        return str;
    }

    async function buyProduct(title) {
        let id = str_gen()
        const objectId = {id, title}
        const res = await fetch("http://localhost:3000/bucket", { 
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST", 
              body: JSON.stringify(objectId),
            });

            const obj = await res.json()
            setBucket([...bucket, obj])
    }

    useEffect(() => {
        fetch('http://localhost:3000/bucket')
          .then(response => response.json())
          .then(json => setBucket(json))
      }, []);
    
      console.log(bucket)

    const context = {
        bucket,
        setBucket,
    }


    return (
        <Context.Provider value={ context }>
        <div className="list-item"  >
            <Link className="cursor" to={`/${product.id}`}>{ product.title }</Link>
            <span>{product.price}</span>
            <img src={product.img} alt="" />
            <button className="button-buy" onClick={() => buyProduct( product.title )}>Buy</button>
        </div>
        </Context.Provider> 
    )
}

export default Product;