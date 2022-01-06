import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useContext } from 'react'
import { Context } from '../context/pinjamContext'
import perpus from '../api/perpus'
import { navigate } from '../navigationRef'
import { BackHandler } from 'react-native'

export default (navigation, keyPrevious, paramPrevious, dataCart) => {
    const [dataAll, setdata] = useState(null)
    const [totalCost, settotalCost] = useState(0)
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [dateCurrent, setDate] = useState(new Date());
    const [dateBook, setDateBook] = useState(new Date());
    const [msgDate, setMsgDate] = useState("")
    const { state, saveItemCart } = useContext(Context)
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateCurrent;
        setShow(Platform.OS === 'ios');
        if (currentDate < dateCurrent) {
            setDateBook(dateCurrent);
            setMsgDate("Atur tanggal pengembalian buku sesuai tanggal sekarang atau lebih")
        } else {
            setMsgDate("")
            setDateBook(currentDate);
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    const getDataCart = async () => {
        
        setdata(dataCart)
        var price = []
        dataCart.forEach(element => {
            price.push(element.priceTotalPerItem)
        });
        settotalCost(price.reduce((a, b) => a + b, 0))
    }

    const removeData = (id) => {
        const dataOldCopy = [...dataAll]
        const indexData = dataAll.findIndex(index => index.id === id);
        dataOldCopy.splice(indexData, 1)
        setdata(dataOldCopy)
    }

    const count = (id, type, stock_book) => {
        const dataExist = [...dataAll];
        const indexData = dataAll.findIndex(index => index.id === id);
        if (type == "plus" && dataExist[indexData].count < stock_book) {
            dataExist[indexData].count = dataExist[indexData].count + 1
        } else if (type == "minus" && dataExist[indexData].count > 0) {
            dataExist[indexData].count = dataExist[indexData].count - 1
        } else {
            dataExist[indexData].count = dataExist[indexData].count
        }
        dataExist[indexData].priceTotalPerItem = dataExist[indexData].price * dataExist[indexData].count
        setdata(dataExist)
        setTotal()
    }

    const setTotal = () => {
        var price = []
        dataAll.forEach(element => {
            price.push(element.priceTotalPerItem)
        });
        settotalCost(price.reduce((a, b) => a + b, 0))
    }
    
    

    const continuePinjam = () => {
        console.log(navigation.state.params);
        saveItemCart(dataAll)
        navigate('ContinuePinjam', {
            data: dataAll,
            start_date: dateCurrent,
            end_date: dateBook,
            total: totalCost,
            type: "pinjam",
            go_back_key: navigation.state.key,
            params: navigation.state.params
        })
    }
    
    const backAction = () => {
        console.log(paramPrevious);
        navigation.navigate(keyPrevious, paramPrevious)
        return true;
    };

    useEffect(() => {
        getDataCart()
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])

    return [getDataCart, removeData, count, continuePinjam, onChange, showDatepicker, dataAll, totalCost, show, mode, dateCurrent, dateBook, msgDate]

}
