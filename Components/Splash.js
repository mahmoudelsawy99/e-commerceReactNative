import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = (props) => {
    useEffect(() => {

        setTimeout(() => {
            props.navigation.navigate('form');
        }, 3000)
    }, [])
    return (
        <View style={style.con}>
            <Image style={{ width: 400, height: 400 }} source={require('../assets/loader.gif')} />
        </View>
    )
}
const style = StyleSheet.create({
    con: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Splash