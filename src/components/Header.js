import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";
import { Feather } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';
import styles from '../styles/general'
const HeaderCompt = ({ navigation, left, title, right }) => {
    const keyPrevious = navigation.getParam('go_back_key')
    const paramPrevious = navigation.getParam('params')

    return (<>
        <Appbar.Header style={styles.appbarHeader} statusBarHeight={5}>
            <TouchableOpacity style={styles.appbarButton} onPress={() => {
                left === 'menu' ?
                    navigation.toggleDrawer()
                    :
                    keyPrevious ?
                        navigation.navigate(keyPrevious, paramPrevious)
                        : navigation.navigate('Beranda')

            }}>
                <Feather name={left} size={22} color="white" />
            </TouchableOpacity>
            <Appbar.Content title={title} style={styles.appbarContent} titleStyle={styles.appbarTitleStyle} />
            {right == true ? <TouchableOpacity style={styles.appbarButton}>
                <Feather name="search" size={22} color="white" />
            </TouchableOpacity>
                : null
            }

        </Appbar.Header>
    </>)
}

export default withNavigation(HeaderCompt)