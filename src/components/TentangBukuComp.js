import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/booksDetail'

const TentangBuku = ({data}) => {
    return (<>
        <View style={styles.mainViewTentangBuku}>
            <View style={styles.viewTentangBuku}>
                <Text style={styles.captTentangStyle}>ISBN</Text>
                <Text style={styles.captTentangStyle}>ISBN13</Text>
                <Text style={styles.captTentangStyle}>Genre</Text>
                <Text style={styles.captTentangStyle}>Bahasa</Text>
                <Text style={styles.captTentangStyle}>Tanggal Terbit</Text>
                <Text style={styles.captTentangStyle}>Jumlah Halaman</Text>
            </View>
            <View style={styles.viewTentangBuku}>
                <Text style={styles.valueTentangStyle}>{data.isbn}</Text>
                <Text style={styles.valueTentangStyle}>{data.isbn13}</Text>
                <Text style={styles.valueTentangStyle}>{data.genre}</Text>
                <Text style={styles.valueTentangStyle}>{data.language}</Text>
                <Text style={styles.valueTentangStyle}>{data.date_pub}</Text>
                <Text style={styles.valueTentangStyle}>{data.pages}</Text>
            </View>
            <View></View>
        </View>
    </>)
}

export default TentangBuku
