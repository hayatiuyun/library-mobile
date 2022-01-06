import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'
import { BackHandler} from 'react-native'
import perpus from '../api/perpus'

export default (id, navigation, keyPrevious, paramPrevious) => {

    const [data, setdata] = useState(null)
    const [statusbook, setStatusbook] = useState("")
    const getData = async (id) => {
        const response = await perpus.get(`/book/${id}`)
        var data_book = response.data.data.data_book
        data_book['stock_book'] = response.data.data.stock_book.qty
        setdata(data_book)
        data_book.stock_book > 0 ? setStatusbook("Tersedia") : setStatusbook("Kosong")
    }
    
    const backAction = () => {
        navigation.navigate(keyPrevious, paramPrevious)
        return true;
    };
    
    useEffect(() => {
        getData(id)
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])
    
    return [getData, data, statusbook]
}