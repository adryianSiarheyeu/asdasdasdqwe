import logo from './logo.svg';
import './App.css';
import TW from "./TW";
import {useCallback, useState} from "react";

const App = () => {
  const [list, setList] = useState([{name: 'kek',}, {name: 'qweqwe',}, {name: 'h',}, {name: 'g',}, {name: 'sssss',}, {name: 'swssss',}]);

  const handleRemove = (index) => {
    const listCopy = [...list];

    listCopy.splice(index, 1);

    setList(listCopy)
  }

  return <TW items={list} handleRemove={handleRemove}/>
}


export default App;
