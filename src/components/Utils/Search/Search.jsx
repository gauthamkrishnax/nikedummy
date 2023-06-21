import styles from './Search.module.scss';


import { UilSearch } from '@iconscout/react-unicons'

function Search() {
    return ( 
    <div className={styles.container}>
        <div>
            <UilSearch  size="20"/>
        </div>
        <span>
            <input type="text" placeholder="Search" />
        </span>
    </div> 
    );
}

export default Search;