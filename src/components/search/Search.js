import './style.css'


const Search = () => {
    return ( 
        <div className='DataPicker'>
            <form className='SearchBar' onsubmit="event.preventDefault();" role="search">
                <input id="search" type="search" placeholder="Search..." autofocus required /> 
            </form>
        </div>
     );
}
 
export default Search;