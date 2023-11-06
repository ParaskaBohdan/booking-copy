import './style.css'


const Search = () => {
    return ( 
        <div className='DataPicker'>
            <form className='SearchBar' role="search">
                <input id="search" type="search" placeholder="Search..." autoFocus required /> 
            </form>
        </div>
     );
}
 
export default Search;