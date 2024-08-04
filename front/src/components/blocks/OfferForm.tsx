import { useState } from 'react';

import { Input, Button } from '../ui';

import styles from '../../styles/form.module.css';
import axios from 'axios';
import { uid } from 'react-uid';

export const OfferForm = () => {
    const email = localStorage.getItem('email');
    
    const [description, setDescription] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [price, setPrice] = useState<string>();
    const [deadline, setDeadline] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    function createOffer (e:any) {
        e.preventDefault();

        axios
            .post(
                'https://working-hands.onrender.com/vacancies/set-vacancy', 
                {
                    "vacancy_id": '',
                    "category": category,
                    "title": title,
                    "price": price,
                    "description": description,
                    "devEmail": email,
                    "deadline": '',
                    "responses": []
                  }
            )
            .then(resp => console.log(resp.data))
            .catch(err => console.error(err))
    }

    return (
        <div className={styles.offer__wrapper}>
            <h2>Создать вакансию</h2>
            <form className={styles.form}>
                <Input 
                    type="text"
                    name="title"
                    placeholder='Нужен Маляр'
                    className={styles.form__input}
                    onChange={(e:any) => setTitle(e.target.value)}
                />
                <Input 
                    type="text"
                    name="price"
                    placeholder='5000'
                    className={styles.form__input}
                    onChange={(e:any) => setPrice(e.target.value)}
                />
                <Input 
                    type="text"
                    name="category"
                    placeholder='Высоко-/Низко-квалфицированные работник'
                    className={styles.form__input}
                    onChange={(e:any) => setCategory(e.target.value)}
                />
                <Input 
                    type="text"
                    name="description"
                    placeholder='Прокапать крикой до шахты'
                    className={styles.form__input}
                    onChange={(e:any) => setDescription(e.target.value)}
                />
                <Button 
                    btnText='Создать'
                    onClick={(e:any) => createOffer(e)}
                    className={styles.form__btn}
                />
            </form>
        </div>
    )
}