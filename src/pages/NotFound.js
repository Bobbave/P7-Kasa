import {NavLink} from "react-router-dom";

const NotFound = () => {
    document.title = "Kasa - Error 404";
    return (
        <main className="notFound">
            <div>
                <h1>404</h1>
                <h2 className="notFound_desktop">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
                <h2 className="notFound_mobile">
                    Oups! La page que <br /> vous demandez n'existe pas.
                </h2>
            </div>
            <div className="return_link">
                <NavLink to="/">Retourne sur la page d'accueil</NavLink>
            </div>
        </main>
    );
};

export default NotFound;