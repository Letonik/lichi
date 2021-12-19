import style from '../styles/basket/ProductBasket.module.scss'


const ProductBasket = ({id, image, name, article, price, color, sizes,
                           count, amount, increase, reduce}) => {
    return (
        <div className={style.productBasket}>
            <div className={style.image}>
                <img src={image} alt="img"/>
            </div>
            <div className={style.main}>
                <div className={style.head}>
                    <div className={style.name}>{name.toUpperCase()}</div>
                    <div className={style.delete} onClick={() => reduce(id, true)}>
                        x
                    </div>
                </div>
                <div className={style.price}>{price} Р</div>
                <div className={style.info}>
                    <div className={style.items}>
                        <span className={style.names}>
                             Размер
                        </span>
                        <span className={style.values}>
                            {sizes}
                        </span>
                    </div>
                    <div className={style.items}>
                        <span className={style.names}>
                             Цвет
                        </span>
                        <span className={style.values}>
                            {color}
                        </span>
                    </div>
                    <div className={style.items}>
                        <span className={style.names}>
                             Артикул
                        </span>
                        <span className={style.values}>
                            {article.toUpperCase()}
                        </span>
                    </div>
                    <div className={style.items}>
                        <span className={style.names}>
                             Кол-во
                        </span>
                        <span className={style.values}>
                            <span className={style.button} onClick={() => reduce(id, false)}>{'<'}</span>
                            <span className={style.count}>{count}</span>
                            <span className={style.button} onClick={() => increase(id, amount, count)}>{'>'}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBasket;