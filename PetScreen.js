import React from 'react';
import {View,FlatList} from 'react-native';
import Pets from './components/Pets';

const PetScreen = () => {
  const animals = [
    {name:'Hope',animal: 'Dog', year: '4', location: 'Stafford Virginia'},
    {name:'Sam', animal: 'Cat', year: '6', location: 'Coventry Uk'},
    {name:'New',animal: 'Cow', year: '9', location: 'Lebanon Ashaiman'},
    {name:'Mark',  animal: 'Horse', year: '2', location: 'Gbawe Mallam'},
  ]
  return (
    <View>
    <FlatList
      data = {animals}
      renderItem = {({item}) => {
      return<Pets name={item.name} type={item.animal} age={item.year} place={item.location}/>
    }}
    keyExtractor = {(item)=> item.year}
    />
    </View>
  );
}



export default PetScreen;