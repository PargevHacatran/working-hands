import { useEffect, useState } from 'react';
import styles from '../../styles/form.module.css';
import { Button, Input } from '../ui';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CodeForm = () => {
    const [code, setCode] = useState<string>();
    const [dbCode, setDbCode] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(true);

    function checkCode() {
        if (code) {
            if (code.length === 4) {
                setDisabled(false);
            } else {
                setDisabled(true);
            }
        }
    }

    const email = localStorage.getItem('email');
        const name = localStorage.getItem('name');
        const tel = localStorage.getItem('tel');
        const pass = localStorage.getItem('pass');
        const position = localStorage.getItem('position');

    function sendDatas(e: any) {
        e.preventDefault();
        
        localStorage.setItem('role', 'builder');

        if (code === dbCode.random_code) {
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
                .then(resp => resp)
                .catch(err => console.error(err));

            self.location.href = `http://localhost:5173/profile?email=${email}`;
        }
    }

    useEffect(() => {
        checkCode()
        
        if (!dbCode) {
            axios
                .post('https://working-hands.onrender.com/authorization/get-random-code', tel)
                .then(resp => setDbCode(resp.data))
                .catch(err => console.error(err));
        }

        console.log(dbCode);
    }, [code]);

    return (
        <div className={`${styles.form} ${styles.form__code}`}>
            <h1 className={styles.form__title}>Введите код</h1>
            <p className={styles.form__subtitle}>Мы отправили вам сообщение с кодом. Пожалуйста, впишите код в поле ниже</p>

            <form>
                <Input
                    name="code"
                    type="text"
                    placeholder='-- --'
                    onChange={(e: any) => setCode(e.target.value)}
                    className={styles.code__input}
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