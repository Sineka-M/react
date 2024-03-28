
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { BrowserRouter ,Routes,Route,Link} from 'react-router-dom';
import User from './component/User';
import OldBooks from './component/OldBooks';
import NewBooks from './component/NewBooks';
import Login from './component/Login';
import Dashboard from './component/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/about'>About</Link></li>
        <li><Link to ='/contact'>Contact</Link></li>
        <li><Link to ='/user/1'>User 1</Link></li>
        <li><Link to ='/user/2'>User 2</Link></li>
        <li><Link to ='/books-types/old_books'>Old Books</Link></li>
        <li><Link to ='/books-types/new_books'>New Books</Link></li>
        <li><Link to ='/login'>Login</Link></li>
        
        
      </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/user/:id' element={<User/>}/>
          <Route path='/books-types'>
            <Route path='old_books' element={<OldBooks/>}/>
            <Route path='new_books' element={<NewBooks/>}/>
            
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>



  


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
