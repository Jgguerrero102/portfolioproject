import React, { useState } from "react"
import { Button, Pressable, StyleSheet, Text, TextInput } from "react-native"
export default function LoginApp() {
    let [loggedin, setLoggedIn] = useState(false)
    let [username, setUsername] = useState("")
    let [error,setError] = useState(false)
    let doLogin = useCallback(() => {
        if (password === " Ch@rge!") {
        setLoggedIn(true)
        }
        setError(true)
    })
    return !loggedin ?
        <>
            <Text style={styles.welcome}>Please <Text>Log In</Text></Text>
            <TextInput value={username} onChange={text => setUsername(text)} placeholder="Username" style={styles.textinput}></TextInput>
            <TextInput value={password} onChange={text => setPassword(text)} secureTextEntry={true} placeholder="Password" style={styles.textinput}></TextInput>
            <Text style={styles.text}>{error ? "Error! Wrong password": ""}.</Text>
            <Pressable style={styles.button} onPress={() => doLogin()}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
            <Button title="Login" onPress={() => doLogin()}></Button>
        </>
        : <Text>Welcome User</Text>
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    error: {
        color: "red",
        paddingVertical: 8
    },

    welcome: {
        fontSize: 16,
        paddingVertical: 15,
        lineHeight: 21,
        letterSpacing: 0.25,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    textinput: {
        fontSize: 20,
        width: 200,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairWidth,
        padding: 5,
        margin: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});