import { useNavigate } from 'react-router-dom';

const Signout = () => {
    const navigate = useNavigate();

    localStorage.removeItem('token');
    navigate('/home');

}
 
export default Signout;
