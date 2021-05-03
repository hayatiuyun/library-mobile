import React, { useState, useContext } from 'react';
import { View, Text, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer'
import styles from '../styles/auth'
import style from '../styles/general'
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/signinContext'

const IndexScreen = () => {
    const { state, signin } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [securePass, setSecurePass] = useState(true)
    return (
        <View style={styles.mainView}>
            {state.errorMessage ?
                <Spacer margin={20}>
                    <View style={style.errorView}>
                        <Text style={style.errorText}>{state.errorMessage}</Text>
                    </View>
                </Spacer>
                : null}
            <Text style={styles.text}>bits library</Text>
            <Spacer margin={15}>
                <View style={styles.formView}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Email/User Name"
                        style={styles.input} />


                    <View style={styles.viewPass} >
                        <TextInput
                            secureTextEntry={securePass}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.pass} />
                        
                        <TouchableOpacity onPress={() => setSecurePass(!securePass)}>
                            {securePass ? 
                                <Feather name="eye" size={24} color="#CCCCCC" />
                                : <Feather name="eye-off" size={24} color="#CCCCCC" />}
                        </TouchableOpacity>
                    </View>
                    
                    <Spacer margin={10}/>
                    <TouchableOpacity style={styles.lupaSandi} >
                        <Text style={styles.link}>Lupa Kata Sandi?</Text>
                    </TouchableOpacity>

                    <Spacer margin={15} />
                    <Button
                        onPress={() => signin({ email, password })}
                        title="Masuk"
                        titleStyle={styles.titleButton} buttonStyle={styles.button} />
                </View>
            </Spacer>
        </View>
    )
}

IndexScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
}


export default IndexScreen