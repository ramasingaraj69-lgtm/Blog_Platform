function SearchBar({

  search,

  setSearch,

}) {

  return (

    <input
      type="text"
      placeholder="Search blogs..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      style={{
        width: "100%",
        padding: "16px",
        borderRadius: "15px",
        border: "1px solid #ddd",
        marginBottom: "30px",
      }}
    />
  );
}

export default SearchBar;