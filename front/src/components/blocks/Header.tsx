import { Link } from "react-router-dom"
import styles from '../../styles/header.module.css';

export const Header = () => {
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');
    const tel = localStorage.getItem('tel');

    return (
        <header className={styles.header}>
            <img src="./img/logo.jfif" alt="" className={styles.header__logo} />

            <nav>
                <ul className={styles.header__list}>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/"> {/* exchange/responses  */}
                            { 
                                role === 'builder'
                                    ? 'Биржа'
                                    : 'Отклики'
                            }
                        </Link>
                    </li>
                    <Link to={`/profile?email=${email}`}>
                        <li>
                            <img src="./img/dev-img.png" alt="" />
                            <div>
                                <p>{ email }</p>
                                <p>{ tel }</p>
                            </div>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}