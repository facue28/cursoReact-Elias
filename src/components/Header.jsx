import CartWidget from "./CartWidget";
import LogoTienda from "./LogoTienda";
import NavBar from "./NavBar";
import Search from "./Search";


const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-primary">
                <div className="col-md-3">
                    <LogoTienda tamano={150}/>
                    
                </div>
                <div className="col-md-9 d-flex pb-2 ">
                <Search/>
                </div>
            </div>
            <div className="row bg-primary">
                <NavBar/>
            </div>
        </div>
    )
}

export default Header;