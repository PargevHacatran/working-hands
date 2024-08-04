import { useNavigate } from 'react-router-dom';
import styles from '../../styles/build-company.module.css';

const buildCompanys = [
    'https://static.tildacdn.one/tild6465-3664-4862-b562-356535336663/ssk_logo_2.svg', // сск
    'https://static.tildacdn.one/tild3665-3164-4264-b535-666430373864/ava.svg', // ава
    'https://static.tildacdn.one/tild6133-3432-4764-a232-383635353963/incity.svg', // инсити
    'https://static.tildacdn.one/tild3466-3334-4337-b535-336334666435/tochno.svg', // тично
    'https://optim.tildacdn.one/tild3439-6565-4738-b863-653237636362/-/resize/264x/-/format/webp/image_188.png', // семья
    'https://static.tildacdn.one/tild6632-6434-4839-b636-313036613863/dogma.svg', // догма
    'https://optim.tildacdn.one/tild3234-3033-4262-b032-373038316137/-/resize/264x/-/format/webp/pobeda.png', // победа
    'https://optim.tildacdn.one/tild6539-3238-4730-b865-356337316535/-/resize/264x/-/format/webp/alfa.png', // альфа-строй-инвест
    'https://static.tildacdn.one/tild3736-3239-4533-b866-323930356336/photo.svg', // десо
    'https://static.tildacdn.one/tild3233-3931-4362-b636-636233616336/devug.svg', // девелопмент-юг
    'https://static.tildacdn.one/tild6435-6136-4863-b538-306565363833/aa.svg', // девелопмент груп
    'https://static.tildacdn.one/tild3363-3864-4735-b237-353064663764/garant.svg', // гарантия
    'https://optim.tildacdn.one/tild6539-3931-4737-b237-623931366134/-/resize/264x/-/format/webp/evropea.png', // квропея
    'https://optim.tildacdn.one/tild3932-3132-4362-b834-313538363237/-/resize/264x/-/format/webp/b898ed1b-fecf-4fbb-a.png', // афк
    'https://optim.tildacdn.one/tild3935-3064-4336-a664-636134653832/-/resize/264x/-/format/webp/neometria_adkk.png', // неометрия
    'https://optim.tildacdn.one/tild3865-3834-4338-a634-303735336335/-/resize/264x/-/format/webp/2.png' // арт
];

const buildCompanysDevs = [
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
    'edu@gmail.com',
]

export const BuildCompany = () => {
    return (
        <div className={styles.company__wrapper}>
            {
                buildCompanys.map((company, index) => (
                    <img 
                        src={company} 
                        alt="" className="company"
                         onClick={() => {
                            self.location.href = `http://localhost:5173/profile?email=${buildCompanysDevs[index]}`
                            localStorage.setItem('devProfileImg', company)
                        }} />
                ))
            }
        </div>
    );
}