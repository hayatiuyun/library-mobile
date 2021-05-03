import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ImageEditor } from 'react-native'
import Spacer from '../components/Spacer'
import { Appbar } from 'react-native-paper'
import { Feather } from '@expo/vector-icons';
import styles from '../styles/continueStyle'
import style from '../styles/general'
import useVerification from '../hooks/useVerification';

const ContinuePinjamScreen = ({ navigation }) => {
    const cart = navigation.getParam('data')
    const type = navigation.getParam('type')
    const start_date = navigation.getParam('start_date')
    const end_date = navigation.getParam('end_date')
    const total = navigation.getParam('total')
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')

    const [getUser, pinjam, kembali, setDisable, passwordInput, setpasswordInput, disable, name, password, idUser, id, msg, edit] = useVerification(cart, type, navigation, keyPrevious, paramPrevious)
    const [securePass, setSecurePass] = useState(true)

    return (<>
        <Appbar style={styles.appbarStyle}>
            <TouchableOpacity onPress={() =>
                type === "pinjam" ?
                    navigation.navigate('PinjamBook', { go_back_key: navigation.state.key, params: navigation.state.params })
                    : type === "kembali" ?
                        navigation.navigate('DetailPinjam', { id: id, type: "pinjam", go_back_key: navigation.state.key, params: navigation.state.params  })
                        : type === "setting" ?
                            navigation.navigate('AccountScreen', { go_back_key: navigation.state.key, params: navigation.state.params })
                            : {}
            }>
                <Feather name="chevron-left" size={22} color="black" />
            </TouchableOpacity>
        </Appbar>
        {msg ?
            <Spacer margin={20}>
                <View style={style.errorView}>
                    <Text style={style.errorText}>{msg}</Text>
                </View>
            </Spacer>
            : null}
        <View style={styles.viewForm}>

            <Image source={require('../img/user.png')} style={styles.imageForm} />
            <Spacer margin={10} />
            <Text style={styles.nameText}>Hai, {name}</Text>
            <Spacer margin={10} />
            <Text style={styles.subtitleText}>Masukkan kata sandi untuk melanjutkan</Text>
            <Spacer margin={10} />
            <View style={styles.viewPass}>
                <TextInput
                    value={passwordInput}
                    secureTextEntry={securePass}
                    placeholder="Password"
                    onChangeText={setpasswordInput}
                    style={styles.pass} />
                
                <TouchableOpacity onPress={() => setSecurePass(!securePass)}>
                    {securePass ?
                        <Feather name="eye" size={24} color="#CCCCCC" />
                        : <Feather name="eye-off" size={24} color="#CCCCCC" />}
                </TouchableOpacity>
            </View>
            <Spacer margin={10} />
            {password != passwordInput ? true : false ?
                <Text>Pastikan password yang dimasukkan benar</Text>
                : null
            }
            <TouchableOpacity style={styles.buttonForgetPass}>
                <Text style={styles.textForgetPass}>Lupa kata sandi</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewButton}>
            <Spacer margin={20}>
                <TouchableOpacity
                    disabled={password != passwordInput ? true : false}
                    onPress={() => {
                        type === "pinjam" ?
                            pinjam(start_date, end_date, total)
                            : type === "kembali" ?
                                kembali(cart)
                                : type === "setting" ?
                                    edit()
                                    : {}
                    }}
                    style={styles.button}>
                    <Text style={styles.textButton}>{type === "pinjam" ? "Proses Peminjaman" : "Proses Pengembalian"}</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    </>)
}

export default ContinuePinjamScreen