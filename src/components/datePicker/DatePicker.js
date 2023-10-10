import './style.css'

const DatePicker = () => {
    return ( 
        <>
            <div tabindex="0">
                <input type="text" tabindex="-1" />
                <input type="date"/>—<input type="date" />
            </div>
        </>
     );
}
 
export default DatePicker;