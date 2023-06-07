import { View, Text, StyleSheet, Image, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Dimensions } from 'react-native'
import { useEffect, useLayoutEffect } from 'react';

const Card = (props) => {
    let flag = false;
    useLayoutEffect(() => {
        props.navigation.setOptions(
            {
                headerTitle: "negm",
                headerRight: () => <View style={{ flexDirection: 'row', gap: 5 }}>
                    {flag && <Icon name="star" color={'white'} size={24} />}
                    <Icon name="man-outline" color={'white'} size={24} /></View>
            }
        )
    }, [])
    return (
        <View style={Styles.con}>
            <View style={Styles.card}>
                <View>
                    <Image style={{ width: 90, height: 90, borderRadius: 50, top: -40 }}
                        source={require('../assets/favicon.png')}
                    />
                </View>
                <Text>iti aswan</Text>
                <View style={Styles.bot}>
                    <Icon name='heart' size={20} color={'red'} />
                    <Icon name='ios-star-sharp' size={20} color={'#f6db0b'} />

                </View>
            </View>
        </View >
    )
}

const Styles = StyleSheet.create({
    con: {
        backgroundColor: '#b7b6b6',
        width: Dimensions.get('screen').width,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: 200,
        height: 175,
        backgroundColor: '#b7b6b6',
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center'
    },
    bot: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    }
})

export default Card