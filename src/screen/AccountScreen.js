import React, { useState } from 'react'

import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Header from '../components/Header'
import Spacer from '../components/Spacer'
import styles from '../styles/accountStyle'
import useAccount from '../hooks/useAccount';
import { Feather } from '@expo/vector-icons';

const width = Dimensions.get('window').width

const AccountScreen = ({ navigation }) => {
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')
    const [getData, name, setName, mobile, setMobile, email, setEmail, address, setAddress, password, setPassword, confirmPasswordEdit, setConfirmPasswordEdit] = useAccount(navigation, keyPrevious, paramPrevious)
    const [securePass, setSecurePass] = useState(true)
    const [secureConfirmPass, setSecureConfirmPass] = useState(true)

    return (
        <>
            <Header
                title="Pengaturan"
                left={"chevron-left"} />
            <ScrollView>

                <Spacer margin={20}>
                    <Spacer margin={10}>
                        <View style={styles.mainViewPhotoProfile}>
                            <Image source={require('../img/user.png')} style={styles.imgPhotoProfile} />
                            <Spacer margin={5} />
                            <TouchableOpacity >
                                <Text style={styles.textPhotoProfile}>Ubah Foto Profil</Text>
                            </TouchableOpacity>
                        </View>
                    </Spacer>
                    <Spacer margin={10} />
                    <View >
                        <Text style={styles.titleSection}>Informasi Pribadi</Text>
                        <Spacer margin={5} />
                        <View style={styles.mainViewPrivateInformation}>
                            <View style={styles.mainViewLabelInformation}>
                                <Text style={styles.label}>Nama</Text>
                                <Text style={styles.label} >No. HP</Text>
                                <Text style={styles.label}>Email</Text>
                                <Text style={styles.label}>Alamat</Text>
                            </View>
                            <Spacer margin={20} />
                            <View style={{ justifyContent: "space-between", alignItems: "stretch", width: width / 1.75 + 20 }}>
                                <TextInput value={name} onChangeText={setName} style={styles.textInput} />
                                <TextInput value={mobile} onChangeText={setMobile} style={styles.textInput} />
                                <TextInput value={email} onChangeText={setEmail} style={styles.textInput} />
                                <TextInput value={address} onChangeText={setAddress} style={styles.textInput} />
                            </View>
                        </View>
                    </View>
                    <Spacer margin={10} />
                    <View>
                        <Text style={styles.titleSection}>Ubah Kata Sandi</Text>
                        <Spacer margin={10} />
                        <Text style={styles.labelPass}>Kata sandi baru</Text>
                        <View style={styles.viewPass}>
                            <TextInput
                                secureTextEntry={securePass}
                                onChangeText={setPassword}
                                value={password}
                                style={styles.inputPass} />
                            <TouchableOpacity onPress={() => setSecurePass(!securePass)}>
                                {securePass ?
                                    <Feather name="eye" size={24} color="#CCCCCC" />
                                    : <Feather name="eye-off" size={24} color="#CCCCCC" />}
                            </TouchableOpacity>
                        </View>
                        <Spacer margin={5} />
                        <Text style={styles.labelPass}>Ulangi kata sandi baru</Text>
                        <View style={styles.viewPass}>
                            <TextInput
                                secureTextEntry={secureConfirmPass}
                                onChangeText={setConfirmPasswordEdit}
                                value={confirmPasswordEdit}
                                style={styles.inputPass} />
                            <TouchableOpacity onPress={() => setSecureConfirmPass(!secureConfirmPass)}>
                                {secureConfirmPass ?
                                    <Feather name="eye" size={24} color="#CCCCCC" />
                                    : <Feather name="eye-off" size={24} color="#CCCCCC" />}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Spacer margin={20} />
                    <TouchableOpacity
                        disabled={password != confirmPasswordEdit ? true : false}
                        onPress={() => navigation.navigate('ContinuePinjam', { data: { name, email, mobile, address, password }, type: "setting", go_back_key: navigation.state.key, params: navigation.state.params})}
                        style={styles.button}>
                        <Text style={styles.textButton}>
                            Simpan Perubahan
                        </Text>
                    </TouchableOpacity>
                </Spacer>
            </ScrollView>
        </>
    )
}

export default AccountScreen