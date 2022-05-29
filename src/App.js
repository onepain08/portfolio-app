
import './App.css';
import {About, Header, Projects, Comments} from './containers/index';
import {Nav, MediaIcon} from './components/index';

function App() {
  return (
    <div className="App">
     <Nav />
     {/* <Header /> */}
     <About />
     <Projects />
     <Comments />
    </div>
  );
}

export default App;
