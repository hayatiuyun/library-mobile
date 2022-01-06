import React, { useState, useContext } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

import { AppRegistry, StatusBar, View, Text, Image, Dimensions, SafeAreaView, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';
import Spacer from './src/components/Spacer'

/** This is screen view. load and make the navigation */
import IndexScreen from './src/screen/IndexScreen'
import BerandaScreen from './src/screen/BerandaScreen'
import ShowMoreScreen from './src/screen/ShowMore'
import SplashScreen from './src/screen/SplashScreen';
import BooksDetail from './src/screen/BooksDetail';
import PinjamBookScreen from './src/screen/PinjamBookScreen';
import ContinuePinjamScreen from './src/screen/ContinuePinjamScreen';
import SuccessPinjamScreen from './src/screen/SuccessPinjamScreen';
import PinjamanListScreen from './src/screen/PinjamanListScreen';
import AccountScreen from './src/screen/AccountScreen';

/** Set Navigator */
import { setNavigator } from './src/navigationRef';

/** Provider must be loaded. Load and wrapping your component */
import { Provider as AuthProvider, Context as AuthContext } from './src/context/signinContext';
import { Provider as PinjamProvider } from './src/context/pinjamContext';
import Global from './src/styles/global'

import AsyncStorage from '@react-native-async-storage/async-storage'
import DetailPeminjamanScreen from './src/screen/DetailPeminjamanScreen';
import useAccount from './src/hooks/useAccount';



/** Load your font here */
const fetchFonts = () => {
    return Font.loadAsync({
        Cookie: require('./assets/fonts/Cookie-Regular.ttf'),
        OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
        OpenSansBoldItalic: require('./assets/fonts/OpenSans-BoldItalic.ttf'),
        OpenSansExtraBold: require('./assets/fonts/OpenSans-ExtraBold.ttf'),
        OpenSansItalic: require('./assets/fonts/OpenSans-Italic.ttf'),
        OpenSansLightItalic: require('./assets/fonts/OpenSans-LightItalic.ttf'),
        OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
        OpenSansSemiBoldItalic: require('./assets/fonts/OpenSans-SemiBoldItalic.ttf'),
    });
};

AppRegistry.registerComponent('main', () => App);

const componentDrawerNav = (props) => {
    const navigation = props.navigation
    const keyPrevious = navigation.getParam('go_back_key')
    console.log(keyPrevious);
    const paramPrevious = navigation.getParam('params')
    const { signout, state } = useContext(AuthContext)
    const [getData, name, setName, mobile, setMobile, email, setEmail, address, setAddress, password, setPassword, confirmPasswordEdit, setConfirmPasswordEdit] = useAccount(navigation, keyPrevious, paramPrevious)

    if (name == "") {
        setName("Pengguna")
    }

    return (
        <SafeAreaView>
            <Spacer margin={20}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require('./src/img/user.png')} style={{ width: width / 6.5, height: width / 6.5, marginRight: 20 }} />
                    <View>
                        <Text style={{ fontFamily: "OpenSansSemiBold" }}>{name}</Text>
                        <Text style={{ fontSize: 14, color: "#CCCCCC" }}>{email}</Text>
                    </View>
                </View>
            </Spacer>
            <DrawerItems {...props} itemStyle={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#DDDDDD",
                paddingVertical: 10,
                paddingHorizontal: 10
            }} />
            <TouchableHighlight
                underlayColor="#CCCCCC"
                style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#DDDDDD",}}
                onPress={signout} >
                <Spacer margin={25}>
                    <View style={{ flexDirection: "row" }} >
                        <Feather name="log-out" size={24} color="#CCCCCC" />
                        <Text style={{ color: "#CCCCCC", fontSize: 15, marginLeft: 35, fontFamily: "OpenSansSemiBold", fontWeight: "bold" }}>Logout</Text>
                    </View>
                </Spacer>
            </TouchableHighlight>
        </SafeAreaView>
    )
}

const width = Dimensions.get('window').width

const mainFlow = createDrawerNavigator({
    Beranda: {
        screen: BerandaScreen,
        navigationOptions: {
            title: 'Beranda',
            drawerLabel: 'Beranda',
            drawerIcon: ({ tintColor, focused }) => (
                <Feather name="home" size={24} color={tintColor} />

            ),
        }
    },
    DaftarPinjam: {
        screen: PinjamanListScreen,
        navigationOptions: {
            title: 'Daftar Pinjaman',
            drawerLabel: 'Daftar Pinjaman',
            drawerIcon: ({ tintColor }) => (
                <Feather name="book-open" size={24} color={tintColor} />

            )
        }
    },
    AccountScreen: {
        screen: AccountScreen,
        navigationOptions: {
            title: 'Pengaturan Akun',
            drawerLabel: "Pengaturan Akun",
            drawerIcon: ({ tintColor }) => (
                <Feather name="settings" size={24} color={tintColor} />
            ),

        }
    }
}, {
    initialRouteName: 'Beranda',
    contentComponent: componentDrawerNav,
    contentOptions: {
        activeTintColor: '#17c3b2',
        activeBackgroundColor: '#b9ede8',
        inactiveTintColor: '#CCCCCC',
        inactiveBackgroundColor: 'transparent',
        labelStyle: {
            fontSize: 15,
            marginHorizontal: 20
        },
    },
})

const switchNavigator = createSwitchNavigator({
    SplashScreen: SplashScreen,
    Index: {
        screen: IndexScreen
    },
    Home: mainFlow,
    ShowMore: ShowMoreScreen,
    BooksDetail: BooksDetail,
    PinjamBook: PinjamBookScreen,
    ContinuePinjam: ContinuePinjamScreen,
    SuccessPinjam: SuccessPinjamScreen,
    DetailPinjam: DetailPeminjamanScreen

})

const App = createAppContainer(switchNavigator)

export default () => {
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {

        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
            />
        )
    }

    return (
        <PinjamProvider>
            <AuthProvider>
                <StatusBar backgroundColor="#1ca597" />
                <App ref={(navigator) => setNavigator(navigator)} />
            </AuthProvider>
        </PinjamProvider>
    );
}
