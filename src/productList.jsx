


const ProductList = () => {
    return (
        <main>
            <div className="see">
                <img src="../assets/icons/Arrow.svg" alt="Arrow" className="arrow" />
                <p className="seepro">See product details</p>
            </div>
            <section className="container">
                <div className="leftcolumn">
                    <div className="ears_container">
                        <div className="ear">
                            <img src="../assets/images/earbuds/earbuds_01.png" alt="earbuds" className="cimage" />
                            {/* <button onClick={() => addToCart({ name: "Google Pixel Buds Pro", price: 229, quantity: 1 })}>Add to Cart</button> */}
                        </div>
                    </div>
                </div>

            </section>
        </main>

    );
}

export default ProductList