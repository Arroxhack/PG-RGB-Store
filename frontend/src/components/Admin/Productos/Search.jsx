import React,{useEffect} from 'react'

const Search = ({search, setSearch}) => {

    const searchFilter=e=>{
        e.preventDefault()
      setSearch(e.target.value)
    }

    useEffect(() => {
      }, [search])

  return (
    <div>
        <input className='border mx-5 my-5' type="text" value={search} onChange={searchFilter} placeholder='Search product'/>
    </div>
  )
}

export default Search