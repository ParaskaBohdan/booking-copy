import './style.css'

const DatePicker = () => {
    return ( 
        <>
            <div className='DataPicker' tabIndex="0">
                <input type="text" tabIndex="-1" />
                <input type="date"/>—<input type="date" />
            </div>
        </>
     );
}
 
export default DatePicker;