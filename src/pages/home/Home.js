import DatePicker from "../../components/datePicker/DatePicker";
import DropCounter from "../../components/dropCounter/dropCounter";
import Search from "../../components/search/Search";
import './style.css'

const Home = () => {
    return ( 
    <>
    <div className="AllSearch">
        <Search />
        <DatePicker />
        <DropCounter />
        <button>
            GO
        </button>
    </div>
    </> );
}
 
export default Home;