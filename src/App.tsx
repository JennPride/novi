import data from './data'
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="flex flex-col text-center w-100 m-8">
      <p className="text-2xl m-auto w-100"> Novi Takehome </p>
      <DataTable data={data}/>
    </div>
  );
}

export default App;
