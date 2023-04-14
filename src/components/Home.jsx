import Product from "./Product";

const Home = ({ products }) => {
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

export default Home;