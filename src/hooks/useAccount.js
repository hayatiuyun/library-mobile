import { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BackHandler, Alert } from 'react-native'

export default (navigation, keyPrevious, paramPrevious) => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPasswordEdit, setConfirmPasswordEdit] = useState("")

    const getData = async () => {
        await AsyncStorage.getItem('data_user')
            .then((data) => {
                var dataJSON = JSON.parse(data)
                setName(dataJSON.name)
                setMobile(dataJSON.mobile)
                setEmail(dataJSON.email)
                setAddress(dataJSON.address)
                setPassword(dataJSON.password)
            })
        const key = await AsyncStorage.removeItem('cart')
        console.log(key);
    }
    const backAction = () => {
        if (keyPrevious!=undefined) {
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
        getData()
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])
    
    return [getData, name, setName, mobile, setMobile, email, setEmail, address, setAddress, password, setPassword, confirmPasswordEdit, setConfirmPasswordEdit]
}