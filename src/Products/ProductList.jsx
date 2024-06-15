
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
                            <img src={selectedEarbud} alt="earbuds" className="image" />
                            <button onClick={() => addToCart({ name: "Google Pixel Buds Pro", price: 229 , quantity: 1 })}>Add to Cart</button>
                        </div>
                         <div className="ear-options">
                            <img src="src/assets/images/earbuds/earbuds_01.png" alt="earbuds" onClick={() => changeEarbudImage('src/assets/images/earbuds/earbuds_01.png')} />
                            <img src="src/assets/images/earbuds/earbuds_02.png" alt="earbuds" onClick={() => changeEarbudImage('src/assets/images/earbuds/earbuds_02.png')} />
                            <img src="src/assets/images/earbuds/earbuds_03.png" alt="earbuds" onClick={() => changeEarbudImage('src/assets/images/earbuds/earbuds_03.png')} />
                            <img src="src/assets/images/earbuds/earbuds_04.png" alt="earbuds" onClick={() => changeEarbudImage('src/assets/images/earbuds/earbuds_04.png')} />
                        </div> 
                    </div>
                </div>
                <button type="button" className="removeproduct">X</button>
            </section>
        </main>
    );
};

export default ProductList;











// const ProductList = () => {
//     return (
//         <main>
//             <div className="see">
//                 <img src="../assets/icons/Arrow.svg" alt="Arrow" className="arrow" />
//                 <p className="seepro">See product details</p>
//             </div>
//             <section className="container">
//                 <div className="leftcolumn">
//                     <div className="ears_container">
//                         <div className="ear">
//                             <img src="../assets/images/earbuds/earbuds_01.png" alt="earbuds" className="cimage" />
//                             {/* <button onClick={() => addToCart({ name: "Google Pixel Buds Pro", price: 229, quantity: 1 })}>Add to Cart</button> */}
//                         </div>
//                     </div>
//                 </div>
//                    <button type="button" className={styles.removeproduct}>X</button>

//             </section>
//         </main>

//     );
// }

// export default ProductList;