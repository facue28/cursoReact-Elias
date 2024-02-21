import { Link } from "react-router-dom";
import Logo from "../assets/logo-yellow.png";

const LogoTienda = ({tamano}) => {
    return (
        <Link to={"/"}> 
            <img src={Logo} alt="TiendOn" width={tamano} />
        </Link>
    )
}

export default LogoTienda;