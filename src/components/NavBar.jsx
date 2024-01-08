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
                                <a className="nav-link" href="#">Ofertas</a>
                                <a className="nav-link" href="#">Tecnologia</a>
                                <a className="nav-link" href="#">Hogar</a>
                                <a className="nav-link" href="#">Ropa</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-md-3 d-flex justify-content-end align-items-end pe-4 pb-2">
            <CartWidget/>
            </div>
            </>
    )
}
export default NavBar;