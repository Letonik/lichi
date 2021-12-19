import style from '../styles/productsPage/product.module.scss'
const Product = ({id, addToBasket}) => {
    return (
        <div className={style.product}>
            <div><img src="dress.jpg" alt="dress"/></div>
            <button onClick={() => addToBasket(id)}>Add {id}</button>
        </div>
    );
};

export default Product;