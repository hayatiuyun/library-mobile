import createDataContext from './createDataContext'
import perpusApi from '../api/perpus'
import { navigate } from '../navigationRef'
import AsyncStorage from '@react-native-async-storage/async-storage';

const signReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return { token: action.payload, data: action.data,exp_time: action.exp_time }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signout':
            return { token: null, errorMessage: '' }
        case 'msg':
            return{...state, msg : action.payload}
        default:
            return state;
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    const exp_time = new Date(await AsyncStorage.getItem('exp_time'))
    var now = new Date()
    if (token && (exp_time > now)) {
        dispatch({ type: 'signin', payload: token })
        navigate('Beranda')
    } else {
        navigate('Index')
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' })
    navigate('Index')
    // somehow sign out!!!
};

const signin = dispatch => async ({ email, password }) => {
    await perpusApi.post('/user/login', { email, password })
        .then( async (response) => {
            var data = response.data.data
            const msg = response.data.message
            console.log(response.data);
            if  (msg == "success")  {
                var token = data.token_data
                var data_user = data.data_user
                dispatch({ type: 'signin', payload: token.token, data: data_user, exp_time: token.exp_time })
                await AsyncStorage.setItem('token', token.token)
                await AsyncStorage.setItem('exp_time', token.exp_time)
                await AsyncStorage.setItem('data_user', JSON.stringify(data_user))
                await AsyncStorage.setItem('usr_id', token.user_id)
                navigate('Beranda')
            } else {
                dispatch({ type: 'add_error', payload: "Email atau Password salah. Silahkan periksa kembali" })
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'add_error', payload: "Kesalahan teknis. Mohon tunggu beberapa saat lagi untuk login kembali" })
        })
}

const editUser = dispatch => async ({ id, data }) => {
    console.log(data);
    await perpusApi.put(`/user/${id}`, data)
        .then( async (data) => {
            var data_user = JSON.stringify(data.data.data)
            console.log(data);
            await AsyncStorage.setItem('data_user', data_user)
            dispatch({ type: "msg", payload: "Perubahan berhasil dilakukan" })
            navigate('Beranda')
        })
        .catch((err) => {
            dispatch({type:"msg", payload:"Perubahan gagal dilakukan"})
        })
}

export const { Provider, Context } = createDataContext(
    signReducer,
    { signin, signout, tryLocalSignin, editUser },
    { token: null, errorMessage: '', data: {}, msg:"" },
) 