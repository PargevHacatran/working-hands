import styles from '../../styles/builder-reviews.module.css';

interface IBuilderReview {
    imgURL: string;
    name: string;
    text: string;
    position: string;
    star: number;
}

export const BuilderReview = ({ imgURL, text, name, position, star }:IBuilderReview) => {
    return (
        <div>
            <img src={imgURL} alt="" />
            <div className={styles.builder__reviews__content}>
                <div className={styles.top__info}>
                    <p className={styles.builder__reviews__name}>{ name } <span>({ position })</span></p>
                    <div className={styles.star__group}>
                        <p>{ star }</p>
                        <img src="./img/star.png" alt="" />
                    </div>
                </div>
                <p>{ text }</p>
            </div>
        </div>
    );
}