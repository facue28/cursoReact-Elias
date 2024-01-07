const NavBar = () => {
    return (
        <div classNameName="container ">
            <div classNameName="row ">
                <div classNameName="col">
                    <img src="" alt="" />
                </div>
                <div classNameName="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-info">
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
            </div>
        </div>
    )
}