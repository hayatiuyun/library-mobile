import React from 'react'
import { View, Text } from 'react-native';
import styles from '../styles/cart'

const ItemInvoice = ({ data }) => (
    <View style={styles.mainViewInvoice}>
        <View>
            <View style={styles.viewNameItemInvoice}>
                <Text style={styles.title}>{data.name}</Text>
            </View>
            <Text style={styles.author}>{data.count} pcs</Text>
        </View>
        <View>
            <Text style={styles.title}>Rp. {data.priceTotalPerItem}</Text>
        </View>
    </View>
)

export default ItemInvoice