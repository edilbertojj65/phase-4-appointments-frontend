function Search({ searchTerm, onSearchChange }) {
  debugger
    return (
      <div className="searchbar">
        <label htmlFor="search">Search Appointments:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a Patient name to search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;