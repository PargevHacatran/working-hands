import { BuilderInfoItem } from "../ui";

import styles from '../../styles/builder-info-card.module.css'
import { useEffect, useState } from "react";
import axios from "axios";

export const BuilderInfoCard = () => {
    // get datas

    const [datas, setDatas] = useState<string[]>([]);
    const email = self.location.href.split('email=')[1];

    useEffect(() => {
        axios
            .get(`https://working-hands.onrender.com/get-user/${email}`)
            .then((resp) => {
                setDatas((prev:string[]) => [...prev, resp.data.tel]);
                setDatas((prev:string[]) => [...prev, resp.data.email]);
                setDatas((prev:string[]) => [...prev, resp.data.position]);
                setDatas((prev:string[]) => [...prev, resp.data.name]);
            })
            .catch((err) => console.error(err))
    }, []);

    const listItemIcons = [
        './img/tel.png',
        './img/email.png'
    ];

    return (
        <div className={styles.builder__info}>
            <div className={styles.main__info}>
                <img src={'./img/builder-img.png'} alt="" />
                <div>
                    <h2 className={styles.builder__name}>{datas[datas.length - 1]}</h2>
                    {
                        localStorage.getItem('role') === 'builder'
                            ? <p>Баланс: <span>5000&#8381;</span></p>
                            : null
                    }
                </div>
            </div>
            <div>
            <h2 className={`${styles.builder__name} ${styles.builder__position}`}>{datas[datas.length - 2]}</h2>
                <ul>
                    {
                        listItemIcons.map((item, index) => (
                            <BuilderInfoItem
                                text={datas[index]}
                                imgURL={item}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}