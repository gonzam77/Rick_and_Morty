import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
    return (
        <div className={style.nav}>
            <div>
                <Link to="/home">
                    <button className={style.button1}>Home</button>
                </Link>
            </div>
            <div>
                <Link to="/about">
                    <button className={style.button2}>About</button>
                </Link>
            </div>
            <div className={style.searchBar}>
                <SearchBar className={style.searchBar} onSearch={onSearch} />
            </div>

        </div>
    )
}

export default Nav;