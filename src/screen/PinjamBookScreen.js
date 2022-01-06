import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, Dimensions, VirtualizedList, SafeAreaView, Button } from 'react-native'
import Header from '../components/Header'
import Spacer from '../components/Spacer'
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, differenceInCalendarDays } from 'date-fns'
import { Checkbox } from 'react-native-paper'
import ItemInvoice from '../components/ItemInvoice'
import useCart from '../hooks/useCart'
import styles from '../styles/cart'

const PinjamBookScreen = ({ navigation }) => {
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')
    const data = navigation.getParam('data')

    const [checked, setChecked] = useState(false);
    const [getDataCart, removeData, count, continuePinjam, onChange, showDatepicker, dataAll, totalCost, show, mode, dateCurrent, dateBook, msgDate] = useCart(navigation, keyPrevious, paramPrevious, data)

    if (!dataAll) {
        return null
    }

    const BelowCartList = () => {
        return (<>
            <TouchableOpacity style={styles.buttonShowMore} onPress={() => navigation.navigate('ShowMore', { type: "newestbook", go_back_key: navigation.state.key, params: navigation.state.params, data_previous:dataAll  })}>
                <Feather name="plus" size={20} color="#ff9f1c" />
                <Text style={styles.textShowMore}>Tambah buku lainnya</Text>
            </TouchableOpacity>
        </>)
    }
    const BelowInvoiceList = () => {
        return (<>
            <View style={styles.viewTotalBayar}>
                <View style={styles.viewColumnTotalBayar}>
                    <Text style={styles.title}>Total Bayar</Text>
                    <Text style={styles.author}>{dataAll.length} Buku, {differenceInCalendarDays(dateBook, dateCurrent)} Hari</Text>
                </View>
                <View style={styles.viewColumnTotalBayar}>
                    <Text style={styles.title}>Rp. {totalCost}</Text>
                </View>
            </View>
        </>)
    }

    const Item = ({ data }) => (
        <View style={styles.mainViewListCart}>
            <Image source={require('../img/dvc.jpg')} resizeMode={"cover"} style={styles.imageStyle} />
            <Spacer margin={10} />
            <View style={styles.viewOfDetailListCart}>
                <View>
                    <View style={styles.mainViewNameOfItem}>
                        <Text style={styles.title}>{data.name}</Text>
                    </View>
                    <View style={styles.viewOfAuthor}>
                        <Text style={styles.author}>Oleh: {data.author}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.jumlahText}>Jumlah</Text>
                    <Spacer margin={5} />
                    <View style={styles.mainViewJumlahItem}>
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.buttonCounterJumlahItem} onPress={() => count(data.id, "minus")}>
                                <Feather name="minus" size={20} color="#bbbbbb" />
                            </TouchableOpacity>
                            <View style={styles.textCountJumlahItem}>
                                <Text>{data.count}</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonCounterJumlahItem} onPress={() => count(data.id, "plus", data.stock_book)}>
                                <Feather name="plus" size={20} color="#bbbbbb" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => removeData(data.id)}>
                                <Feather name="trash" size={24} color="#cccccc" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item data={item} />
    );

    const renderItemList2 = ({ item }) => (
        <ItemInvoice data={item} />
    )

    return (<>

        <Header left="chevron-left" title="Pinjam Buku" right={false} />
        <Spacer margin={20} >
            <Text style={styles.titleSection}>Daftar buku yang akan dipinjam</Text>
        </Spacer>
        <FlatList
            contentContainerStyle={{ marginHorizontal: 20 }}
            data={dataAll}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={{ flexGrow: 1 }}
            ListFooterComponent={BelowCartList}
        />
        <Spacer margin={20} >
            <Text style={styles.titleSection}>Atur Tanggal</Text>
            <Spacer margin={5} />
            <View style={styles.rowBetween}>
                <View style={styles.row}>
                    <TouchableOpacity disabled={true} style={styles.startDate}>
                        <Feather name="calendar" size={20} color="#888888" />
                    </TouchableOpacity>
                    <View style={styles.startDate}>
                        <Text style={styles.textCalendar}>
                            {format(dateCurrent, "d MMM yyyy").toString()}
                        </Text></View>
                </View>
                <View style={styles.toDateView}>
                    <Feather name="minus" size={20} color="#bbbbbb" />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={showDatepicker} style={styles.endDate}><Feather name="calendar" size={20} color="#888888" /></TouchableOpacity>
                    <View style={styles.endDate}>
                        <Text style={styles.textCalendar}>{format(dateBook, "d MMM yyyy").toString()}</Text>
                    </View>
                </View>
            </View>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dateBook}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

            {msgDate ?
                <Text style={styles.textWarning}>{msgDate }</Text>
                :
                null
            }
        </Spacer>

        <Spacer margin={20}>
            <Text style={styles.titleSection}>Detail Biaya</Text>
        </Spacer>

        <Spacer margin={5} />
        <FlatList
            data={dataAll}
            renderItem={renderItemList2}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={BelowInvoiceList}
        />
        <Spacer margin={20}>
            <View style={styles.rowBetween}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text style={styles.textCalendar}>Dengan ini saya menyetujui untuk melakukan pengembalian sesuai tanggal yang telah ditentukan. Apabila melewati tanggal tersebut, saya bersedia membayar denda yang telah ditentukan.</Text>
            </View>
            <Spacer margin={5} />
            <TouchableOpacity disabled={!checked}
                style={checked ? styles.buttonEnable : styles.buttonDissable}
                onPress={() => continuePinjam()}>
                <Text style={checked ? styles.textButton : styles.textButtonDissable}>Lanjutkan Peminjaman</Text>
            </TouchableOpacity>
        </Spacer>
    </>)
}

export default PinjamBookScreen