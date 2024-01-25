import './search-box.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <div className="SearchBox">
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        ></input>
    </div>
)

export default SearchBox