import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import { format, isSameDay, isBefore } from 'date-fns'
import { navigate } from '../navigationRef';
import styles from '../styles/listPinjamanStyle'

const Item = ({ data, type, navigation }) => {
    const end_date = Date.parse(data.borrow_card.end_date)
    const start_date = Date.parse(data.borrow_card.start_date)
    const startDate = format(start_date, 'd MMM yyyy')
    const endDate = format(end_date, 'd MMM yyyy')
    var dataBook = data.borrowd_book
    const now = new Date()
    if (dataBook == null) {
        dataBook = []
    }
    return <TouchableOpacity onPress={() => navigate('DetailPinjam', { id: data.borrow_card.id, type: type, go_back_key: navigation.state.key, params: navigation.state.params  })}>
        <Spacer margin={5}>
            <View style={styles.mainViewItem}>
                <Text numberOfLines={1} >
                    {dataBook.map((data, i) => (
                        <BookItem data={data} key={i} />
                    ))}
                </Text>
                <Spacer margin={5} />
                <View style={styles.viewDate} >
                    <Text style={styles.textDate}>{startDate} - {endDate}</Text>
                    {data.borrow_card.terlambat == true || (isBefore(end_date, now) && !isSameDay(now, end_date)) ?
                        <View style={styles.viewLabelTerlambar}>
                            <Text style={styles.textTerlambat}>Terlambat</Text>
                        </View>
                        : null}
                </View>
            </View>
        </Spacer>
    </TouchableOpacity>
}

const BookItem = ({ data }) => {
    return (<Text style={styles.textNameofBook}>{data.name}, </Text>)
}

export default Item