import MainContainer from "../components/MainContainer";
import {connect} from "react-redux";
import {getProductSelector} from "../store/selectors/selectors";
import {addToBasket} from "../store/productsReducer/productsReducer";
import {bindActionCreators} from "redux";
import Product from "../components/Product";
import style from '../styles/productsPage/container.module.scss'

function Index(props) {
    return (
        <MainContainer>
            <div className={style.container}>
                {
                    props.products.map(p =>
                        <Product id={p} addToBasket={props.addToBasket}/>
                    )
                }
            </div>
        </MainContainer>
    );
}
const mapStateToProps = (state) => {
    return {
        products: getProductSelector(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToBasket: bindActionCreators(addToBasket, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);