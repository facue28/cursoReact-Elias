const Search = () => {
    return (
        
            <div className="container-fluid d-flex justify-content-start ">
                <form className="d-flex p-2 col-5 align-items-end ">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button className="btn bg-primary-subtle" type="submit">Buscar</button>
                </form>
            </div>
    )
}
export default Search;