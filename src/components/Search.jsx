const Search = ({textSearch, setTextSearch}) => {

    return (
      <div>
          <label>Search: <input type="search" value={textSearch} onChange={(e) => setTextSearch(e.target.value)}/></label>
      </div>
      
    )
  }
  
  export default Search