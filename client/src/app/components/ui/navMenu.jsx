import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useSearchElem } from "../../hooks/useSearchElem";
import { searchFurn } from "../../store/furniture";
import Links from "./links";

const NavMenu = () => {
    const { setValueSearch } = useSearchElem();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.searchFurn.value.trim();
        let trueValue;
        if (value) {
            trueValue = value[0].toUpperCase() + value.slice(1).toLowerCase();
        }
        setValueSearch(trueValue);
        history.push(`/katalog/search`);
        // dispatch(searchFurn(trueValue));
        e.target.searchFurn.value = "";
    };
    return (
        <aside
            className="position-fixed bg-white p-3 col-2 h-100"
            style={{ position: "absolute", zIndex: "100" }}
        >
            <div className="h6 mb-5">Город Черкесск</div>
            <div className="mb-2">
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "20px",
                        fontStyle: "italic"
                    }}
                >
                    Магазин мебельный
                </Link>
            </div>
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control mr-sm-2 mb-2"
                    type="search"
                    name="searchFurn"
                    aria-label="Search"
                />
                <button className="btn btn-outline-success my-sm-0">
                    Поиск
                </button>
            </form>
            <ul className="nav flex-column mt-3">
                <Links />
            </ul>
        </aside>
    );
};

export default NavMenu;
