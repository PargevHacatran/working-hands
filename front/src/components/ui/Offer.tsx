import axios from 'axios';
import styles from '../../styles/offer.module.css';
import { Button } from './Button';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarWrapper } from '../blocks/Calendar';

interface IOffer {
    uid: string;
    title: string;
    price: number;
    name: string;
    description: string;
    responses: string[];
    category: string;
    devEmail: string;
}

export const Offer = ({ uid, title, price, name, description, responses, category, devEmail }: IOffer) => {
    const [respondets, setRespondents] = useState<object[]>([]);
    const popupRef = useRef<HTMLDivElement>();
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');
    const [display, setDsiplay] = useState<string>('none');

    const vacancyId = uid;

    function addWorker() {
        axios
            .post(
                `https://working-hands.onrender.com/vacancies/update-responses/${vacancyId}`, email
            )
            .then((resp) => console.log(resp))
            .catch((err) => console.error(err));
    }

    function handlePopup(e: any) {
        setRespondents([]);

        const block = popupRef?.current;

        if (popupRef) {
            if (block?.classList.contains(styles.offer__popup))
                block.classList.remove(styles.offer__popup);
            else {
                block.classList.add(styles.offer__popup);
            }
        }

        responses.map(async (respoonse) => {
            try {
                axios
                    .get(`https://working-hands.onrender.com/get-user/${respoonse}`)
                    .then(resp => {
                        setRespondents((prev: object[]) => [...prev, { email: respoonse, name: resp.data?.name }])
                    })
                    .catch((err) => console.error(err))
            } catch (err) {
                console.error(err);
            }
        })
    }

    return (
        <div className={styles.offer} data-f={category === 'Низкоквалифицированная' ? 'low' : 'high'}>
            <div className={styles.offer__row} onClick={(e: any) => handlePopup(e)}>
                <h3 className={styles.offer__title}>{title}</h3>
                <p className={styles.offer__price}>Цена: <span>{price}&#8381;</span>/день</p>
            </div>
            <div className={styles.offer__popup} ref={popupRef}>
                <div className={styles.offer__row}>
                    <p className={styles.offer__description} >{description}</p>
                    <div className={styles.offer__calendar}>
                        <img 
                            src="./img/calendar.png" 
                            alt="" 
                            onClick={() => {
                                if (display !== 'flex') {
                                    setDsiplay('flex');
                                } else {
                                    setDsiplay('none');
                                }
                            }} />
                    </div>
                </div>
                <div className={styles.offer__row}>
                    <img src="" alt="" />
                    <p>{name}</p>
                </div>
                {
                    role === 'dev'
                        ? respondets.map((respondet) => (
                            <div className={styles.respondents} onClick={(e: any) => handlePopup(e)}>
                                <Link to={`/profile?email=${respondet.email}`}>{respondet.name}</Link>
                            </div>
                        ))
                        : 
                        <Button
                            className={styles.offer__response__btn}
                            btnText="Записаться на смену"
                            onClick={() => addWorker()}
                        />
                }
            </div>
            <div className={styles.calendar} style={{ display: display }}>
                <CalendarWrapper />
            </div>
        </div>
    );
}