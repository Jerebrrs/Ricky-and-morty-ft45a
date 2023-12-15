import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar.jsx";


export default function Nav(props) {
    return (
        <div style={{
            backgroundColor: "gray",
            padding: "10px",
            borderRadius: "20px",
            width: "950px"
        }} >
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/favorites">
                <button>Favorites</button>
            </NavLink>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <button onClick={props.logout}>Logout ❌</button>
            <hr />
            <SearchBar onSearch={props.onSearch} />

        </div>
    );
}
