// /import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
//import Main from './component/Main';
import About from './component/About';

function App() {
  return (
    <div>
       <Nav></Nav>
      <main>
      <About></About>
       {/*<Main></Main>*/}
      </main>
    </div>
  );
}

export default App;
