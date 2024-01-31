import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <div className="col-md-9">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                                <Link className="nav-link" to="/ofertas">Ofertas</Link>
                                <Link className="nav-link" to="/tecnologia">Tecnologia</Link>
                                <Link className="nav-link" to="/hogar">Hogar</Link>
                                <Link className="nav-link" to="/ropa">Ropa</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Link className="col-md-3 d-flex justify-content-end align-items-end pe-4 pb-2" to="/">
            <CartWidget/>
            </Link>
            </>
    )
}
export default NavBar;