import './SearchBar.css';


function SearchBar({searchText, onSearchTextChange, inStock, onInStockChange}) {
    return (
      <form>
        <input value={searchText} type="text" 
        placeholder="Search..."

        onChange={(e) => onSearchTextChange(e.target.value)}
        
        />
        <label>
          <input  type="checkbox"
            checked={inStock}
            onChange={(e) => onInStockChange(e.target.checked)}

          />
          Only show products in stock
        </label>
      </form>
    );
  }

export default SearchBar;