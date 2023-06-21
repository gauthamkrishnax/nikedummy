import Link from "../Utils/Link/Link";
import Search from "../Utils/Search/Search";

import "./header.module.scss";
import styles from './header.module.scss'

import { UilAnchor } from '@iconscout/react-unicons'
import { UilBolt } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'

function Header() {
    return (  <div class="pageheader">
    <div class="cmp-adaptiveform-pageheader">
        <div className={styles.first_nav}>
            <div><UilAnchor size="30" color="#111111" /></div>
            <div>
                <ul>
                    <li><Link text="Find a Store" /></li>
                    <li><Link text="Help" /></li>
                    <li><Link text="Join Us" /></li>
                    <li><Link text="Sign In" /></li>
                </ul>
            </div>
        </div>

        <div className={styles.second_nav}>
            <div><UilBolt size="50" /></div>
            <div className={styles.nav}>
                <div>
                    <ul>
                        <li><Link text="New & Featured" /></li>
                        <li><Link text="Men" /></li>
                        <li><Link text="Women" /></li>
                        <li><Link text="Kids" /></li>
                        <li><Link text="Sale" /></li>
                    </ul>
                </div>
                <Search />
                <UilHeart size="30" />
                <UilShoppingBag size="30" />
            </div>
        </div>
    </div>
  </div> )
}

export default Header;