import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import styles from '../styles/card'
const ResultList = ({ title, results, navigation, subtitle, type }) => {

    if (results == null || !results.length) {
        return null
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.headerRow}>
                <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <TouchableOpacity style={styles.showMoreTouch} onPress={() => navigation.navigate('ShowMore', { type: type, go_back_key: navigation.state.key, params: navigation.state.params })}> 
                    <Text style={styles.showMore}>Lihat Semua</Text>
                    <Entypo name="chevron-right" size={24} color="#ff9f1c" />
                </TouchableOpacity>
            </View>
            {results !=null && results.length > 0 ?
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={results => results.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('BooksDetail', { id: item.id, go_back_key: navigation.state.key, params: navigation.state.params})}>
                                <ResultDetail result={item} />
                            </TouchableOpacity>
                        )
                    }}
                /> :
                <View style={styles.zeroResult}>
                    <Text>Product not available in this category</Text>
                </View>
            }
        </View>
    );
}

export default withNavigation(ResultList)