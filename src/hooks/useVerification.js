import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useContext } from 'react'
import perpus from '../api/perpus'
import { navigate } from '../navigationRef'
import { Context } from '../context/pinjamContext'
import { Context as EditProvider } from '../context/signinContext'
import { BackHandler } from 'react-native'

export default (data, type, navigation, keyPrevious, paramPrevious) => {
    const key = navigation.state.key
    const param = navigation.state.params
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [idUser, setidUser] = useState(0)
    const [id, setId] = useState(0)
    const [passwordInput, setpasswordInput] = useState("")

    const { state, checkoutCart, kembaliBook } = useContext(Context)
    const [msg, setmsg] = useState("")
    const { editUser } = useContext(EditProvider)

    const [disable, setDisable] = useState(false)
    
    const getUser = async () => {
        const data_user = await AsyncStorage.getItem('data_user')
        const data_id_user = await AsyncStorage.getItem('usr_id')
        setidUser(parseInt(data_id_user))
        var dataCopy = JSON.parse(data_user)

        if (type === "kembali") {
            setId(data.borrow_card.id)
        }
        if (dataCopy.name == "") {
            setname("Pengguna")
        } else {
            setname(dataCopy.name)
        }
        setpassword(dataCopy.password)
    }
    
    const pinjam = (start_date, end_date, total) => {
        const borrow_card = {
            "start_date": start_date.toString(),
            "end_date": end_date.toString(),
            "usr_id": idUser,
            "status": "peminjaman",
            "total": total,
            "terlambat": false
        }
        var borrowd_book = []
        data.forEach(element => {
            borrowd_book.push({
                "book_id": element.id,
                "qty": element.count,
                "price": element.price,
                "subtotal": element.priceTotalPerItem
            })
        });

        if (passwordInput != password) {
            setmsg("Password Salah. Silakan periksa kembali")
            setDisable(true)

        } else {
            setmsg("")
            setDisable(false)

            checkoutCart({ borrow_card, borrowd_book, key, param })
        }
    }
    
    const kembali = (data) => {
        if (passwordInput != password) {
            setmsg("Password Salah. Silakan periksa kembali")
            setDisable(true)
        } else {
            setmsg("")
            setDisable(false)
            kembaliBook(data, id)
        }
    }
    
    const edit = () => {
        if (passwordInput != password) {
            setmsg("Password Salah. Silakan periksa kembali")
            setDisable(true)

        } else {
            setmsg("")
            setDisable(false)
            editUser({ idUser, data: data })
        }
    }
    
    const backAction = () => {
        navigation.navigate(keyPrevious, paramPrevious)
        return true;
    };
    
    useEffect(() => {
        getUser()
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])

    return [getUser, pinjam, kembali, setDisable, passwordInput, setpasswordInput,disable, name, password, idUser, id, msg, edit]
}