import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import About2 from './About2';
function App() {
  const blogData = [
    {
      title:"sknsalkds",
      category:"sdnfbdsf",
      desc:"slkdsflksdnslfkdsn",
      content:"salfkdnlfksdnsdlfk",
      image:"sadsfdsfsd",
    }
  ]
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About content="Kuch bhi"/>}/>
      <Route path="/about2" element={<About2 content="Kuch bhi nhi"/>}/>
    </Routes>
  );
}

export default App;
