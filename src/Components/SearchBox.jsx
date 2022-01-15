const SearchBox = (props) => {

    return (
        <div className="col col-sm-4">
            <input className="form-control" value={props.value}
            onChange={(event) => props.SetSearchValue(event.target.value)}
            placeholder="Search your movie..."/>
        </div>
    );
}

export default SearchBox;