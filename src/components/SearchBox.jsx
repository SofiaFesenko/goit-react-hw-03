function SearchBox({ onchange }) {
    return (
      <div style={{border: "1px solid black", padding: "10px", width: "250px"}}>
        <p>find contacts by name</p>
        <input onChange={onchange} />
      </div>
    )
  }
  
  export default SearchBox