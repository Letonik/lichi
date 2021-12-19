import Link from "next/link";
import style from '../styles/NavBar.module.scss'
import {useRouter} from "next/router";



const NavBar = () => {
    const router = useRouter();

    return (
        <div className={style.navBar}>
            <Link href='/'>
                <a className={router.pathname == "/" ? style.linkActive : ""}>
                    ПРОДУКТЫ
                </a>
            </Link>
            <img src="lichi.jpg" alt="logo"/>
            <Link href='/basket'>
                <a className={router.pathname == "/basket" ? style.linkActive : ""}>
                    КОРЗИНА
                </a>
            </Link>
        </div>
    );
};

export default NavBar;