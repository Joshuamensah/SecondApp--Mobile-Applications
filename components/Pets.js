import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Pets = ({ name, type, age, place }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Cat.jpeg")} style={styles.image} />
      <View style={styles.InfoContainer}>
        <Text style={styles.InfoName}>{name}</Text>
        <Text style={styles.InfoType}>{type}</Text>
        <Text style={styles.InfoAge}>{age} years old</Text>

        <View style={styles.locationContainer}>
          <EvilIcons name="location" size={22} color="grey" />
          <Text style={styles.location}>{place}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: "row",
        marginHorizontal: 20,
        borderRadius: 20,
    },
    image: {
        width: 150,
        height: 170,
        borderRadius: 20
    },
    InfoContainer: {
        backgroundColor:"white",
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        height: 140,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: 180,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    InfoName: {
        color: '#4f53a5',
        fontWeight: 'bold',
        fontSize: 23
    },
    InfoType: {
        color: '#afafaf',
        fontSize: 17,
        marginVertical: 5
    },
    InfoAge: {
        color: '#afafaf',
        fontSize: 17,
        marginVertical: 5
    },
    location: {
        color: '#afafaf',
        fontSize: 17
    },
    locationContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    searchContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 30,
        height: 50,
        borderRadius: 9,
        alignContent: 'center'
    }
});

export default Pets;
