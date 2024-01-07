import CartWidget from "./CartWidget";
import LogoTienda from "./LogoTienda";
import Search from "./Search";


const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-primary">
                <div className="col-md-2">
                    <LogoTienda tamano={150}/>
                    
                </div>
                <div className="col-md-8 d-flex align-item-center">
                <Search/>
                </div>
                <div className="col-md-2 d-flex justify-content-end align-items-end px-4 py-1">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                /* CATEGORIAS */
            </div>
        </div>
    )
}

export default Header;