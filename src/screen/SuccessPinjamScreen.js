import React, {useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, BackHandler } from 'react-native';
import Spacer from '../components/Spacer'
import styles from '../styles/successStyle'

const SuccessPinjamScreen = ({navigation}) => {
    
    const type = navigation.getParam('type')
    const id = navigation.getParam('id')
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')

    const imgCheck = require('../img/check.png')
    
    const backAction = () => {
        navigation.navigate('Beranda')
        return true;
    };
    
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])
    
    return (<>
        <View style={styles.mainView}>
            <View style={styles.viewCore}>
                <Image source={imgCheck} style={styles.img} />
                <Spacer margin={15} />
                <Text style={styles.textHeader}>Yeay!</Text>
                <Text style={styles.subTitle}>Buku berhasil dipinjam</Text>
            </View>
            <View style={styles.viewButton}>
                <Spacer margin={20}>
                    <TouchableOpacity
                        onPress={() =>
                            type === "pinjam" ?
                                navigation.navigate('DetailPinjam', { id: id, type: "pinjam", go_back_key: navigation.state.key, params: navigation.state.params  })
                                : navigation.navigate('Home', { go_back_key: navigation.state.key, params: navigation.state.params })}
                        style={styles.button}>
                        <Text style={styles.textButton}>
                            {
                                type === "pinjam" ?
                                    "Lihat Detail Peminjaman"
                                    : "Kembali ke Beranda"}
                            </Text>
                    </TouchableOpacity>
                </Spacer>
            <Spacer margin={ 10}/>
            </View>
        </View>
    </>)
}

export default SuccessPinjamScreen