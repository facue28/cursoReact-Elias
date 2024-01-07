import LogoCart from "./LogoCart";

const CartWidget = () => {
    return (
        <button type="button" class="btn btn-warning position-relative">
            <LogoCart tamano= {15}/>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">28+</span>
        </button>

    )
}

export default CartWidget;