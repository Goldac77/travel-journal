import './App.css';
import Nav from './component/Nav';
import Card from './component/Card';
import data from './data';

function App() {
  const cardElements = data.map((item) => {
    return <Card {...item}/>
  })
  return (
    <div className="App">
      <Nav/>
      {cardElements}
    </div>
  );
}

export default App;
