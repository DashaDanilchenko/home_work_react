import Product from "./Product";

const ListProducts = ({ products }) => {
    return (
        <>
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

export default ListProducts;