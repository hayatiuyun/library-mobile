import React, { useContext } from 'react'
import {  View, Text } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Spacer from '../components/Spacer';
import useResult from '../hooks/useResult'
import { Context } from '../context/signinContext'
import ResultList from '../components/ResultList';
import style from '../styles/general'
import styles from '../styles/berandaStyle'

const Notification = ({error, title}) => 
    (
    <View style={error? style.errorView : style.successView}>
        <Spacer></Spacer>
        <Text style={style.errorText}>{title}</Text>
    </View>
)

const BerandaScreen = ({navigation}) => {

    const netInfo = useNetInfo();

    const [booksApi, results, error, result, eror] = useResult(3, navigation);
    const { state } = useContext(Context)
    return (<>
        <Header right title="Bits Library" left={"menu"} />
        {!netInfo.isConnected ? <Notification error title="Tidak ada koneksi internet" /> : null}
        { state.msg ? <Notification title={state.msg} /> : null }
        <Spacer margin={10} />
        <ScrollView>
            <Carousel />
            <View style={styles.viewFlatlist}>
                <ResultList results={results} type="popularbook" title="Terpopuler" subtitle="Sedang ramai dipinjam" />
                <Spacer margin={5} />
                <ResultList results={result} type="newestbook" title="Terbaru" subtitle="Baru saja diupload" />
            </View>
        </ScrollView>

    </>)
}


export default BerandaScreen