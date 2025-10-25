type SearchBarProps = {
    onQueryChange : (text:string) => void
}

export function SearchBar({onQueryChange}:SearchBarProps){
    return(
        <input type="text" placeholder="Search users..." onChange={(e)=> onQueryChange(e.target.value)}/>
    )
}