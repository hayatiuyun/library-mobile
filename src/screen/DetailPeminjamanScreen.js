import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/Header'
import Spacer from '../components/Spacer'
import { format, differenceInCalendarDays } from 'date-fns'
import { Feather } from '@expo/vector-icons';
import useDetailPinjam from '../hooks/useDetailPinjam';
import styles from '../styles/detailPinjamStyle'
import Item from '../components/itemDetailPeminjaman'

const DetailPeminjamanScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const type = navigation.getParam('type')
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')

    const denda = 5000;

    const [borrowdBook, dataBook, qtyTotal, dataPinjam, start_date, end_date, countDateLate, status, total, terlambat, now, lateDay] = useDetailPinjam(id, type, navigation, keyPrevious, paramPrevious)
    if (!dataBook || !dataPinjam) {
        return null
    }
    
    const renderItem = ({ item }) => (
        <Item data={item}/>
    )

    return (<>
        <Header left="chevron-left" title="Detail Peminjaman" right={false} />
        <Spacer margin={20}>
            {/* Top Tanggal Pinjam && Kembali */}
            <View style={styles.mainDateView}>
                {/* Tanggal Pinjam */}
                <View>
                    <Text style={[styles.textDate, { color: type === 'pinjam' ? '#17c3b2' : '#666666', }]}>{format(start_date, 'd MMMM yyyy')}</Text>
                    <Text style={styles.captionDate}>Tanggal Pinjam</Text>
                </View>
                <Feather name="arrow-right" size={24} color="#CCCCCC" />
                {/* Tanggal Kembali */}
                <View>
                    <Text style={[styles.textDate, { color: type === 'pinjam' && terlambat == false ? '#17c3b2' : type === 'pinjam' && terlambat == true ? '#f65c5c' : '#666666' }]}>{format(end_date, 'd MMMM yyyy')}</Text>
                    <Text style={styles.captionDate}>Tanggal Kembali</Text>
                </View>
            </View>
            {/* List Book */}

            <FlatList
                data={dataBook}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.itemBookListStyle}
            />

            {/* Total Biaya */}
            <View style={styles.totalCostViewStyle}>
                <Text style={styles.generalTextStyle}>Biaya yang sudah dibayar</Text>
                <Text style={[styles.generalTextStyle, styles.totalCostValueStyle]}>Rp. {total}</Text>
            </View>
            {
                type === 'pinjam' && terlambat == true ?
                    <View>
                        <View>
                            <Text style={styles.captTerlambatStyle}>Denda terlambat</Text>
                            <Text style={styles.valueDayTerlambatStyle}>{lateDay} hari</Text>
                        </View>
                        <View>
                            <Text>Rp. {denda}</Text>
                        </View>
                    </View>
                    : type === 'kembali' && terlambat == true ?
                        <View>
                            <View style={styles.viewCaptDetailPembayaranStyle}>
                                <Text style={styles.captDetailPembayaranStyle}>Detail Pembayaran</Text>
                                <Feather name="chevron-down" size={20} color="#ff9f1c" />
                            </View>
                            <Spacer margin={10} />
                            <View style={styles.viewItemDetailPembayaran}>
                                <Text numberOfLines={1} style={styles.textItemDetailPembayaran}>
                                    {dataBook.map((data, i) =>
                                        <Text key={i} numberOfLines={1} style={styles.generalTextStyle}>{data.name}, </Text>
                                    )}
                                </Text>
                                < Text style={styles.generalTextStyle}> {total - denda}</Text>
                            </View>
                            <Spacer margin={5} />
                            <Text style={styles.subTitleItemDetailListPembayaran}>{qtyTotal} Pcs, {differenceInCalendarDays(Date.parse(start_date), Date.parse(end_date))} hari</Text>
                            <Spacer margin={5} />
                            <View style={styles.viewDendaSectionKembali}>
                                <Text style={styles.generalTextStyle}>Denda Terlambat</Text>
                                <Text style={styles.generalTextStyle}>{denda}</Text>
                            </View>
                            <Text style={styles.subTitleItemDetailListPembayaran}>
                                {countDateLate} hari
                            </Text>
                        </View>
                        : null}
        </Spacer>
        <View style={styles.viewButton}>
            <Spacer margin={20}>
                <TouchableOpacity
                    disabled={status == "pengembalian" ? true : false}
                    onPress={() => navigation.navigate('ContinuePinjam', { data: { 'borrow_card': dataPinjam, 'borrowd_book': dataBook }, type: "kembali", go_back_key: navigation.state.key, params: navigation.state.params  })}
                    style={[styles.buttonStyle,{ backgroundColor: status == "pengembalian" ? "#DDDDDD" : "#ff9f1c" }]}>
                    <Text style={[styles.textButton,{ color: status == "pengembalian" ? "#999999" : "#FFFFFF"}]}>
                        {status == "pengembalian" ? "Sudah Dikembalikan" : "Kembalikan Buku"}
                    </Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    </>)
}

export default DetailPeminjamanScreen 