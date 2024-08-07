import css from './SearchBox.module.css'

function SearchBox({ handleinput }) {
    return (
      <div className={css.block} >
        <p>find contacts by name</p>
        <input onChange={handleinput} />
      </div>
    )
  }
  
  export default SearchBox