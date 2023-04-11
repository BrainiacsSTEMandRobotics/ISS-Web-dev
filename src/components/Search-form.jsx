import React,{useState} from 'react'
import "./styles/search-form.css"

const Search = () => {
  const [searchValue,setSearchValue] = useState("")
  return (
    <form className='search-form'>
          <input
              value={searchValue}
              onChange={(e) => { setSearchValue(e.target.value) }}
              placeholder="search"
          />
    </form>
  )
}
export default Search
