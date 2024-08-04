import { useEffect, useState } from "react";
import { BuilderProfile, DevProfile } from "../components/blocks";

import styles from '../styles/profile.module.css';
import axios from "axios";

export function Profile () {
    const [role, setRole] = useState<string>(''); 

    useEffect(() => {
        const email = self.location.href.split('email=')[1];

        axios
            .get(`https://working-hands.onrender.com/get-user/${email}`)
            .then(resp => setRole(resp.data.role))
            .catch((err) => console.error(err));
    }, []);

    if (role) {
        if (role === 'builder') {
            return (
                <div className={styles.profile}>
                    <BuilderProfile />
                </div>
            )
        } else if (role === 'dev') {
            return (
                <div className={styles.profile}>
                    <DevProfile />
                </div>
            )
        }   
    }
}