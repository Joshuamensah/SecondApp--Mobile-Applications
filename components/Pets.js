import React from 'react';
import {View, Text, Image,  StyleSheet} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const Pets = ({name,diff}) => {
    return (
        <View style={styles.container}>
            <Image source = {require('../assets/Cat.jpeg')} style={styles.image} />
            <View style={styles.view}>
                <Text>{name}</Text>
                <Text>{diff}</Text>
                <Text>Kitty</Text>
            </View>
            <View>
            <EvilIcons name="location" size={30} color="grey" />
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 30,
        alignItems: "center",
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 10,
    },
    view: {
        justifyContent: "center",
        marginHorizontal: 15,
        flex: 4
    }
})

export default Pets;