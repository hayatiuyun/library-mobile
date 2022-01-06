import createDataContext from './createDataContext'
import perpusAPI from '../api/perpus';
import { navigate } from '../navigationRef';
import AsyncStorage from '@react-native-async-storage/async-storage';

const pinjamReducer = (state, action) => {
    switch (action.type) {
        case 'get_chart':
            return action.data
        default:
            state;
    }
}

const addToChart = dispatch => async (dataPush, count, keyPrevious, paramPrevious, dataPrevious) => {
    console.log(paramPrevious);
    var dataNew = dataPush.data
    dataNew['count'] = count
    dataNew['priceTotalPerItem'] = dataPush.data.price * count
    if (!dataPrevious) {
        var cart = []
        cart.push(dataNew)
        navigate('PinjamBook', { data: cart, go_back_key: keyPrevious, params: paramPrevious })
    } else {
        let newProduct = dataPrevious
        const id = []
        newProduct.forEach(element => {
            id.push(element.id)
        });

        if (!id.includes(dataPush.data.id)) {
            if (!newProduct) {
                newProduct = [];
            } else {
                newProduct.push(dataNew)
            }
            navigate('PinjamBook', { data: newProduct, go_back_key: keyPrevious, params: paramPrevious })
        }
    }
}

const saveItemCart = dispatch => async (data) => {
    var dataStore = JSON.stringify(data)
    await AsyncStorage.setItem('cart', dataStore)
}

const checkoutCart = dispatch => async (dataPinjam, keyPrevious, paramPrevious) => {
    perpusAPI.post('/borrow', dataPinjam)
        .then(async (data) => {
            if (data.data != null) {
                navigate('SuccessPinjam', { id: data.data.data.borrow_id, type: "pinjam", go_back_key: keyPrevious, params: paramPrevious });
            } else {
                navigate('PinjamBook', { go_back_key: keyPrevious, params: paramPrevious })
            }
        })
}

const kembaliBook = dispatch => async (data, id, keyPrevious, paramPrevious) => {
    perpusAPI.post(`/return/${id}`, data)
        .then((response) => {
            navigate('SuccessPinjam', { id: id, type: "kembali", go_back_key: keyPrevious, params: paramPrevious });
        })
}

export const { Provider, Context } = createDataContext(
    pinjamReducer,
    { addToChart, saveItemCart, checkoutCart, kembaliBook },
    []
);