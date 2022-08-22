import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';


function App() {
  //States
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredToDos, setFilteredToDos] =useState([]);
  //useEffect
  useEffect(() => {
    filterHandler();
  }, [toDos, status]);
  //functions
  const  filterHandler =() => {
    switch (status) {
      case 'completed':
        setFilteredToDos(toDos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  }


  return (
    <div className="App">
      <header>
        <h1> My Todo List</h1>
      </header>
      <Form  inputText = {inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText}
      setStatus={setStatus}
      />
      <Todolist filteredToDos={filteredToDos} setToDos={setToDos} toDos={toDos}/>
      </div>
  )
}

export default App;
