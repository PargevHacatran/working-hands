import { LoginForm } from '../components/blocks';
import { CodeForm } from '../components/blocks/CodeForm';
import styles from '../styles/auth.module.css';

export function Code() {
    return (
        <div className={styles.auth__wrapper}>
            <div className={styles.auth__content__wrapper}>
                <CodeForm />
                <img src="./img/auth-bg.jpg" alt="" className={styles.auth__bg__img} />
            </div>
        </div>
    );
}