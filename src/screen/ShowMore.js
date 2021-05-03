import React, { useEffect } from 'react'
import { View, FlatList, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../components/Header'
import Spacer from '../components/Spacer'
import ResultDetail from '../components/ResultDetail'
import useResult from '../hooks/useResult'
import styles from '../styles/showMore'
const ShowMoreScreen = (props) => {
    const navigation = props.navigation
    const type = navigation.getParam('type')
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')
    const dataPrevious = navigation.getParam('data_previous')
    const [booksApi, results, error, result, eror] = useResult(10)
    var data = []
    var title = ''
    if (type === "newestbook") {
        title = "Terbaru"
        data = result
    }
    else if (type === "popularbook") {
        title = "Terpopuler"
        data = results
    }

    const backAction = () => {
        navigation.navigate(keyPrevious, paramPrevious)
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    return (<>
        <Header title={`Daftar Buku ${title}`} left="chevron-left" right />

        <FlatList
            horizontal={false}
            numColumns={2}
            contentContainerStyle={styles.containerStyle}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.viewItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('BooksDetail', { id: item.id, go_back_key: navigation.state.key, params: navigation.state.params, data_previous: dataPrevious  })}>
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                </View>
            )}
        />

    </>
    )
}

export default ShowMoreScreen