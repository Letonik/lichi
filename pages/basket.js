import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {wrapper} from '../store/store'
import {increaseBasket, reduceBasket, showBasket} from "../store/productsReducer/productsReducer";
import * as cookie from 'cookie'
import {getBasketSelector} from "../store/selectors/selectors";
import ProductBasket from "../components/ProductBasket";
import MainContainer from "../components/MainContainer";
import style from '../styles/basket/container.module.scss';

const Basket = (props) => {
    const increase = (id, amount, count) => {
        (amount >= count) && props.increaseBasket(id)
    }

    return (
        <MainContainer>
            <div className={style.container}>
                {
                    props.productsBasket.map(p =>
                        <>
                            {p.count
                                ? <ProductBasket key={p.id} count={p.count} id={p.item_id} name={p.name}
                                                 article={p.article} color={p.colors.name} price={p.format_price[0]}
                                                 sizes={p.sizes} image={p.photos} reduce={props.reduceBasket}
                                                 amount={p.amount} increase={increase}/>
                                : <></>}
                        </>
                    )
                }
            </div>
        </MainContainer>
    );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    await store.dispatch(await showBasket(parsedCookies))
})

const mapStateToProps = (state) => {
    return {
        productsBasket: getBasketSelector(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showBasket: bindActionCreators(showBasket, dispatch),
        reduceBasket: bindActionCreators(reduceBasket, dispatch),
        increaseBasket: bindActionCreators(increaseBasket, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)