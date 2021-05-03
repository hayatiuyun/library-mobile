import React from 'react'
import { View, Text, ScrollView} from 'react-native';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Item from '../components/ItemPinjamanList'
import { SimpleLineIcons } from '@expo/vector-icons';
import usePinjamanList from '../hooks/usePinjamanList';
import styles from '../styles/listPinjamanStyle'

const PinjamanListScreen = ({navigation}) => {

    const [getIdUser, dataBorrow, dataReturn] = usePinjamanList()
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')

    return (
        <View style={styles.mainView}>
            <Header
                title="Daftar Pinjaman"
                left={"chevron-left"} />
            <Spacer margin={10} />
            <View style={styles.viewScrollTabView}>
                <ScrollableTabView
                    tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                    tabBarActiveTextColor="#17c3b2"
                    tabBarInactiveTextColor="#CCCCCC"
                    tabBarTextStyle={styles.tabBarTextStyle}
                    renderTabBar={() => <ScrollableTabBar />}>
                    <View tabLabel='Sedang Dipinjam'>
                        <ScrollView>
                            {dataBorrow != null ?
                                dataBorrow.map((data, i) => {
                                    return <Item data={data} key={i} navigation={navigation} type="pinjam" />
                                })
                                : <View style={styles.viewDatanull}>
                                    <SimpleLineIcons name="social-dropbox" size={30} color="#CCCCCC" />
                                    <Text style={styles.textNull}>Buku tidak ditemukan</Text>
                                </View>
                            }
                        </ScrollView>
                        <Spacer margin={45} />
                    </View>
                    <View tabLabel='Sudah Dikembalikan'>
                        <ScrollView>
                            {dataReturn != null ?
                                dataReturn.map((data, i) => {
                                    return <Item data={data} navigation={navigation} key={i} type="kembali" />
                                })
                                : <View style={styles.viewDatanull}>
                                    <SimpleLineIcons name="social-dropbox" size={30} color="#CCCCCC" />
                                    <Text style={styles.textNull}>Buku tidak ditemukan</Text>
                                </View>
                            }
                        </ScrollView>
                    </View>
                </ScrollableTabView>
            </View>
        </View>
    )
}

export default PinjamanListScreen