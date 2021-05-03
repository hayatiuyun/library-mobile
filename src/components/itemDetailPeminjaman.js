import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from '../styles/detailPinjamStyle'

const imgBook = require('../img/dvc.jpg')
const Item = ({ data}) => (
    <View style={styles.mainViewItem}>
        <Image source={imgBook} style={styles.imgItem} />
        <View style={styles.viewCaptionItem}>
            <View>
                <Text style={styles.itemNameStyle}>{data.name}</Text>
                <Text style={styles.itemAuthorStyle}>Oleh: {data.author}</Text>
            </View>
            <View>
                <Text>
                    <Text style={styles.itemSubtotalStyle}>Rp. {data.subtotal},</Text>
                    <Text style={styles.itemQtyStyle}> {data.qty} pcs</Text>
                </Text>
            </View>
        </View>
    </View>
)

export default Item