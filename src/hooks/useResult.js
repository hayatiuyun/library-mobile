import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'
import perpus from '../api/perpus'
import { BackHandler, Alert } from 'react-native'

export default (count, navigation) => {
    const [error, setError] = useState('');
    const [eror, setEror] = useState('');
    const [results, setResult] = useState([]);
    const [result, setResults] = useState([]);
    
    const booksApi = async () => {

        await perpus.get(`/newestbook?pages=0&perpages=${count}`)
            .then((response) => {
                var data = response.data.data
                const sortedActivities = data.slice().sort((a, b) => a.created_at - b.created_at)
                setResults(sortedActivities.reverse())
            })
            .catch((err) => setError(err))
        await perpus.get(`/popularbook?pages=0&perpages=${count}`)
            .then((resp) => {
                setResult(resp.data.data)
            })
            .catch((eRor) => setEror(eRor))
    }
    
    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    useEffect(() => {
        
        booksApi()
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);

    }, [])

    return [booksApi, results, error, result, eror]
}