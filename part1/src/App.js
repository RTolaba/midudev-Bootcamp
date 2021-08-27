import Mensaje from './Mensaje.js';
import './App.css';



const Descripcion = () => {
  return <p>Esta es la app del curso Bootcamp</p>
    }



const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos TRabajando"/>
      <Mensaje color="green" message="En un Curso"/>
      <Mensaje color="blue" message="de REACT"/>
      <Descripcion />
    </div>
  );
}

export default App;
