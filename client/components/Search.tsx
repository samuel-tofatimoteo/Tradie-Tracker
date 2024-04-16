import React from 'react'

interface SearchProps {
  search: string
  setSearch: (search: string) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Search: </h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to search..."
      />
    </div>
  )
}

export default Search
