import { useState } from 'react';
import styles from '../../styles/form.module.css';
import { Button, Input } from '../ui';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEamil] = useState<string>();
    const [name, setName] = useState<string>();
    const [tel, setTel] = useState<string>();
    const [position, setPosition] = useState<string>();
    const [pass, setPass] = useState<string>();
    const [dbCode, setDbCode] = useState<string>();
    const [disabled, setDisabled] = useState<boolean>(true);

    const role = localStorage.getItem('role');

    const sendDatas = (e: any) => {
        e.preventDefault();

        if (email && name && tel && position && pass) {
            localStorage.setItem('tel', tel);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('position', position);
            localStorage.setItem('pass', pass);
            localStorage.setItem('role', 'builder');

            axios
                .post(
                    'https://working-hands.onrender.com/set-user',
                    {
                        email: email,
                        tel: tel,
                        name: name,
                        position: position,
                        password: pass,
                        role: 'builder'
                    }
                )
                .then(resp => console.log(resp))
                .catch(err => console.error(err));

            self.location.href = `http://localhost:5173/profile?email=${email}`;

        }
    }

    return (
        <div className={styles.form}>
            <h1 className={styles.form__title}>Регистрация</h1>

            <form>
                <Input
                    name="email"
                    type="email"
                    placeholder="email@email.com"
                    className={styles.form__input}
                    onChange={(e: any) => setEamil(e.target.value)}
                />
                <Input
                    name="name"
                    type="text"
                    placeholder="Иванов Иван"
                    className={styles.form__input}
                    onChange={(e: any) => setName(e.target.value)}
                />
                <Input
                    name="tel"
                    type="text"
                    placeholder="+7 999 999 99 99"
                    className={styles.form__input}
                    onChange={(e: any) => setTel(e.target.value)}
                />
                <Input
                    name="position"
                    type="text"
                    placeholder="Маляр"
                    className={styles.form__input}
                    onChange={(e: any) => setPosition(e.target.value)}
                />
                <Input
                    name="pass"
                    type="password"
                    placeholder="******"
                    className={styles.form__input}
                    onChange={(e: any) => setPass(e.target.value)}
                />
                <Button
                    btnText="Продолжить"
                    className={styles.form__btn}
                    onClick={(e: any) => sendDatas(e)}
                />
            </form>
        </div>
    );
}