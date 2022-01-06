import React from 'react'
import { View, Image, Text, } from 'react-native'
import styles from '../styles/card'
const ResultDetail = ({ result }) => {

    const imgUrl = require('../img/dvc.jpg')
    return <View style={styles.resultDetailView}>
        <Image resizeMode={"cover"}
            style={styles.imageDetail}
            source={imgUrl}
        />
        <View style={styles.captDetail}>
            <Text style={styles.textNameCaptDetail}>
                {result.name}
            </Text>
            <Text style={styles.textAuthorDetail}>
                {result.author}
            </Text>
            <Text style={styles.textCaptDetail}>
                Rp {result.price}
            </Text>
        </View>
    </View>
}

export default ResultDetail