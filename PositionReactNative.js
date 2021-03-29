import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import cart from './cart.png';

const PositionReactNative = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart}/>
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    )
}

export default PositionReactNative;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    iconCart: {
        width: 50,
        height: 50,
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: 'black',
        width: 100,
        height: 100,
        borderRadius: 100/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    text: {
        fontSize: 12,
        fontWeight: '700',
        marginTop: 10
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6fcf97',
        padding: 5,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }
})
