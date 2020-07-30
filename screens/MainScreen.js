import React, { useState } from "react"
import {StyleSheet, View, StatusBar, TextInput, Text} from "react-native"
import MaterialButtonDark from "../components/MaterialButtonDark"

const MainScreen = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const onChangeText = func => text => func(text)

    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.container}>
                <Text style={styles.hiD}>Hi :D</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholder="Login"
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    selectionColor="rgba(179,21,21,1)"
                    style={styles.placeholder}
                    onChangeText={onChangeText(setName)}
                    value={name}
                ></TextInput>
                <TextInput
                    placeholder="password"
                    selectionColor="rgba(179,21,21,1)"
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    style={styles.placeholder1}
                    onChangeText={onChangeText(setPassword)}
                    value={password}
                    secureTextEntry={true}
                ></TextInput>
            </View>
            <View style={styles.container}>
                <MaterialButtonDark
                    style={styles.materialButtonDark}
                    navigation={props.navigation}
                    name={name}
                ></MaterialButtonDark>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(117, 191, 195, 1)",
        alignItems: "center",
        justifyContent: "center",
    },
    placeholder: {
        flex: 0.2,
        fontFamily: "roboto-regular",
        color: "white",
        // marginTop: 422,
    },
    placeholder1: {
        flex: 0.2,
        fontFamily: "roboto-regular",
        color: "white",
        // marginTop: 4,
    },
    hiD: {
        fontFamily: "roboto-regular",
        color: "rgba(243,236,236,1)",
        height: 58,
        width: 119,
        fontSize: 35,
        // marginTop: -356,
    },
    materialButtonDark: {
        height: 36,
        width: 100,
        // marginTop: 306,
    }
})

export default MainScreen

