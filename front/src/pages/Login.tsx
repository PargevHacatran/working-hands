import { LoginForm } from '../components/blocks';
import styles from '../styles/auth.module.css';

export default function Login () {
    return (
        <div className={styles.auth__wrapper}>
            <div className={styles.auth__content__wrapper}>
                <LoginForm />
                <img src="./img/auth-bg.jpg" alt="" className={styles.auth__bg__img} />                
            </div>
        </div>
    );
}