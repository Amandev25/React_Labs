import {ReactDOM} from 'react-dom';


const portalRoot = document.getElementById('portal-root');
const MyPortal = ({children}) => {
   return ReactDOM.createPortal(
    children,
    portalRoot
   )

}

export default MyPortal;