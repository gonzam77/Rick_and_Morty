import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from "react-router-dom";

function Nav({ onSearch, logout }) {

    return (
        <div className={style.nav}>
            <Link to="/home">
                <button className={style.home}>Home</button>
            </Link>
            <Link to="/about">
                <button className={style.about}>About</button>
            </Link>
            <button onClick={logout} className={style.logout}>Logout</button>
            <div className={style.searchBar}>
                <SearchBar className={style.searchBar} onSearch={onSearch} />
            </div>
        </div>
    )
}

export default Nav;