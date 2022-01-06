import  { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import perpusAPI from '../api/perpus';
import { BackHandler, Alert } from 'react-native'


export default (navigation, keyPrevious, paramPrevious) => {
    const [dataBorrow, setDataBorrow] = useState(null)
    const [dataReturn, setDataReturn] = useState(null)
    
    const getIdUser = async () => {
        const data_id_user = await AsyncStorage.getItem('usr_id')
        getData("borrow", parseInt(data_id_user))
        getData("return", parseInt(data_id_user))
    }
    
    const getData = async (type, id) => {
        await perpusAPI.get(`/${type}?usr_id=${id}`)
            .then((data) => {
                if (type == "borrow") {
                    setDataBorrow(data.data.data)
                } else if (type == "return") {
                    setDataReturn(data.data.data)
                }
            })
    }
    
    const backAction = () => {
        if (keyPrevious != undefined) {
            navigation.navigate(keyPrevious, paramPrevious)
        } else {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
        }

        return true;
    };
    
    useEffect(() => {
        getIdUser()
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])
    
    return [getIdUser, dataBorrow, dataReturn]
}