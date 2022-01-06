import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Spacer from '../components/Spacer'
import useCart from '../hooks/useCart'
import styles from '../styles/cart'

const Item = ({data}) => {
    const [getDataCart, removeData, count, continuePinjam, onChange, showDatepicker, dataAll, totalCost, show, mode, dateCurrent, dateBook] = useCart()
    return <View style={styles.mainViewListCart}>
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
}

export default Item