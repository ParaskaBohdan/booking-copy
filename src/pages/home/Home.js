import SearchBar from '../../components/searchBar/SearchBar';
import './style.css'

const Home = () => {
    return ( 
    <>
    <div className="bar">
        <SearchBar />
        <button>
            GO
        </button>
    </div>
    </> );
}
 
export default Home;