import { useDispatch } from 'react-redux'
import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice'

function SearchBox() {
  const dispatch = useDispatch()

  const hadnleInput = (event) => {
    const value = event.target.value
    dispatch(changeFilter(value))
  }

    return (
      <div className={css.block} >
        <p>find contacts by name</p>
        <input onChange={hadnleInput} />
      </div>
    )
  }
  
  export default SearchBox