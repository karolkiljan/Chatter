import React, { Component } from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

const MaterialButtonDark = (props) => (
    <TouchableOpacity
        style={[styles.container, props.style]}
        onPress={() => props.navigation.navigate('Chat', {name: props.name})}
    >
        <Text style={styles.caption}>Login</Text>
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#212121",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
        paddingLeft: 16,
        paddingRight: 16
    },
    caption: {
        color: "#fff",
        fontSize: 14
    }
})

export default MaterialButtonDark