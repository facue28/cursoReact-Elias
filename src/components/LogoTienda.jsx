import Logo from "../assets/logo-yellow.png";

const LogoTienda = ({tamano}) => {
    return (
        <img src={Logo} alt="TiendOn" width={tamano} />
    )
}

export default LogoTienda;