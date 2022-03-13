import ReactDOM from 'react-dom';
import Navbar from './Navbar';







function App (){
return(
<div className="root">
    <Navbar />
    
    
    
    </div>)
}

let root = document.querySelector(".root")
ReactDOM.render(<App />, root)
