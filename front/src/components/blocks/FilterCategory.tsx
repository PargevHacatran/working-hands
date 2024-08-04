import { useEffect } from 'react';
import styles from '../../styles/offer.module.css'; 
import filterStyles from '../../styles/filter-category.module.css';

export const FilterCategory = () => {
    function filterCategory (filterParam:string) {
        document.querySelectorAll(`.${styles.offer}`).forEach((item) => {
            item.style.display = 'block';
        });

        document.querySelectorAll(`.${styles.offer}`).forEach((item) => {
            if (item.dataset.f !== filterParam) {
                item.style.display = 'none';
            }
        });
    }

    return (
        <ul className={filterStyles.filter}>
            <li className={`low`} onClick={() => filterCategory('low')}>Низкоквалифицированные</li>
            <li className={`high`} onClick={() => filterCategory('high')}>Высококвалифицированные</li>
        </ul>
    );
}