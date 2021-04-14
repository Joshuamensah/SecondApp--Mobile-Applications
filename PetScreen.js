import React from 'react';
import {FlatList} from 'react-native';
import Pets from './components/Pets';

const App = () => {
  const animals = [
    {name:"Hope", type:"kitty", how_old:"2years"},
    {name:"Sam", type:"kitty"},
    {name:"New", type:"kitty"},
    {name:"Mark", type:"kitty"},
  ]
  return (
    <FlatList
      data = {animals}
      renderItem = {({item}) => {
      return<Pets name={item.name} diff={item.type}/>
    }}
    keyExtractor = {(item)=> item.type}
    />
  );
}



export default App;