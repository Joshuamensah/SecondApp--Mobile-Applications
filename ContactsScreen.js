import React from 'react';
import {View, FlatList} from 'react-native';
import Contact from'./components/Contact'

export default function ContactsScreen() {
    const contacts = [
        {name:"sam Bob", number:"043-786-7654"},
        {name:"Daniel Mensah", number:"231-563-2387"},
        {name:"Susana Mensah", number:"543-711-6758"},
        {name:"Jared Mensah", number:"001-234-6534"},
        {name:"Mom", number:"035-654-9876"},
        {name:"Daddy", number:"233-654-5878"},
        {name:"sam Bob", number:"043-786-7654"},
        {name:"Daniel Mensah", number:"231-563-2387"},
        {name:"Susana Mensah", number:"543-711-6758"},
        {name:"Jared Mensah", number:"001-234-6534"},
        {name:"Mom", number:"035-654-9876"},
        {name:"Daddy", number:"233-654-5878"},
        {name:"sam Bob", number:"043-786-7654"},
        {name:"Daniel Mensah", number:"231-563-2387"},
        {name:"Susana Mensah", number:"543-711-6758"},
        {name:"Jared Mensah", number:"001-234-6534"},
        {name:"Mom", number:"035-654-9876"},
        {name:"Daddy", number:"233-654-5878"},
    ]
    return (
        <View>
            <FlatList
                data={contacts}
                renderItem={({item}) =>{
                    return <Contact name={item.name} phone={item.number}/>
                }}
                keyExtractor={(item,index) =>item.number}
            />
        </View>
    );
}

 
