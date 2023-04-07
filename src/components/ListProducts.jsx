import Product from "./Product";

const ListProducts = ({ products }) => {
    return (
        <>
            <ul className="todo-list">
                { products.map((product) => <Product 
                                                key={ product.id }  
                                                product={ product }
                                            />
                            )
                }
            </ul>
        </>
    );
}

export default ListProducts;