import './App.css';
import data from './data'
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="App">
      <h1> Novi Takehome </h1>
      <DataTable data={data}/>
    </div>
  );
}

export default App;
