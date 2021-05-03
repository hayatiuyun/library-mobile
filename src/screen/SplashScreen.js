import { Text, View } from 'native-base';
import React, { useEffect, useContext } from 'react'
import { Context as AuthContext } from '../context/signinContext'
import styles from '../styles/splashStyle'
const SplashScreen = ({navigation}) => {
    const { tryLocalSignin } = useContext(AuthContext);
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return (
        <View style={styles.mainView}>
            <Text style={styles.textView}>
                bits library
        </Text>
        </View>
    )
}

export default SplashScreen