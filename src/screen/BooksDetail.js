import React, { useContext, useEffect } from 'react'
import Header from '../components/Header';
import { View, Image, Text, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Spacer from '../components/Spacer';
import styles from '../styles/booksDetail'
import TentangBuku from '../components/TentangBukuComp'
import { Context } from '../context/pinjamContext'
import useBook from '../hooks/useBookDetail'

const BooksDetail = ({ navigation }) => {
    const id = navigation.getParam('id')
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')
    const dataPrevious = navigation.getParam('data_previous')
    

    const { state, addToChart } = useContext(Context)
    const [getData, data, statusbook] = useBook(id, navigation, keyPrevious, paramPrevious)

    if (!data) {
        return null
    }
    
    return (<>
        <Header title={data.name} left="chevron-left" right={false} />
        <Spacer margin={10} />

        {/* View of Image Detail Book */}
        <View style={styles.viewImage}>
            <Image source={require('../img/dvc.jpg')} resizeMode={"cover"} style={styles.imageStyle} />
            <Spacer margin={6} />
            <Text style={styles.textTitleStyle}>{data.name}</Text>
            <Text style={styles.textAuthorStyle}>{data.author}</Text>
            <Spacer margin={10} />
            <Text style={styles.textPriceStyle}>Rp {data.price}</Text>
        </View>
        {/* View of Detail sinopsis */}

        <ScrollableTabView
            initialPage={0}
            tabBarUnderlineStyle={styles.underlineStyle}
            tabBarActiveTextColor="#17c3b2"
            tabBarInactiveTextColor="#CCCCCC"
            tabBarTextStyle={styles.tabBarTextStyle}
            renderTabBar={() => <ScrollableTabBar tabsContainerStyle={styles.tabContainerstyle} />}
        >
            <View tabLabel='Sinopsis'>
                <ScrollView>
                    <Spacer margin={15}>
                        <Text style={styles.textDetailStyle}>{data.sinopsis}</Text>
                    </Spacer>
                    <Spacer margin={45} />
                </ScrollView>
            </View>
            <View tabLabel='Tentang Buku'>
                <ScrollView>
                    <Spacer margin={15}>
                        <TentangBuku data={data} />
                        <Spacer margin={45} />
                    </Spacer>
                </ScrollView>
            </View>
        </ScrollableTabView>

        <View style={styles.mainbottomView}>
            <View>
                <Text style={styles.stockColor}>Stok</Text>
                <Spacer margin={5} />
                <View style={styles.viewStock}>
                    <Text style={styles.stockValue}>{data.stock_book}</Text>
                    <Spacer margin={5} />
                    <View style={styles.statusbookView} ><Text style={styles.statusbookText}>{statusbook}</Text></View>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonPinjam} onPress={async () => addToChart({ data }, 1, navigation.state.key, navigation.state.params, dataPrevious)}>
                <Text style={styles.textPinjam}>Pinjam Buku</Text>
            </TouchableOpacity>
        </View>
    </>)
}

export default BooksDetail 