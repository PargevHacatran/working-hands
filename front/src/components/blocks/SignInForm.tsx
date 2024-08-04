import { useEffect, useState } from 'react';
import styles from '../../styles/form.module.css';
import { Button, Input } from '../ui';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

interface IUser {
    email: string;
    name: string;
    password: string;
    tel: string;
    position: string;
    role: string | 'builder';
}

export const SignInForm = () => {
    const naviagte = useNavigate();

    const [email, setEamil] = useState<string>()
    const [pass, setPass] = useState<string>();
    const [userList, setUserList] = useState<IUser[]>([]);

    function sendDatas (e:any) {
        e.preventDefault();

        axios
            .get(`https://working-hands.onrender.com/get-user/${email}`)
            .then((resp) => setUserList((prev:IUser[]) => [...prev, resp.data]))
            .catch((err) => console.error(err))

        if (userList) {
            if (pass === userList[0].password) {
                localStorage.setItem('role', userList[0].role)
                self.location.href = `http://localhost:5173/profile?email=${email}`
            } else {
                e.target.classList.add(styles.wrong__btn);
                e.target.innerHTML = 'Ошибка'
            }
        } 
    }

    useEffect(() => console.log(), [userList]);

    return (
        <div className={styles.form}>
            <h1 className={styles.form__title}>Вход</h1>
            
            <form>
                <Input
                    name="email"
                    type="email"
                    placeholder="email@email.com"
                    className={styles.form__input}
                    onChange={(e:any) => setEamil(e.target.value)}
                />
                <Input
                    name="pass"
                    type="password"
                    placeholder="******"
                    className={styles.form__input}
                    onChange={(e:any) => setPass(e.target.value)}
                />
                <Button
                    btnText="Продолжить"
                    className={styles.form__btn}
                    onClick={(e:any) => sendDatas(e)}
                />
            </form>
        </div>
    );
}