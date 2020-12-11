// import logo from './logo.svg';
import './App.scss'; // import SCSS
import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap
import topHeader from './components/topHeader.png';
import Charts from './components/charts/charts';

function App() {
  return (
    <div className="App">
      <img src={topHeader} alt="header" width="1480"/>
      
      <Charts />
      
    </div>
  );
}

export default App;
