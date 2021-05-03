import React from 'react';
import { Platform } from 'react-native';
import {
    setCustomTextInput,
    setCustomText,
    setCustomImage,
    setCustomTouchableOpacity,
    setCustomStatusBar
} from 'react-native-global-props';

const customStatusBar = {
    backgroundColor: '#17c3b2',
}

// Getting rid of that ugly line on Android and adding some custom style to all TextInput components.
const customTextInputProps = {
    underlineColorAndroid: 'rgba(0,0,0,0)',
    style: {
        borderColor: '#CCCCCC',
        borderWidth: 1,
        fontFamily: Platform.OS === 'ios' ? 'OpenSansRegular' : 'OpenSansRegular',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
    }
};

// Setting default styles for all Text components.
const customTextProps = {
    style: {
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'OpenSansRegular' : 'OpenSansRegular',
        color: '#666666'
    }
};

// Makes every image resize mode cover by default.
const customImageProps = {
    resizeMode: 'cover'
};

// Adds a bigger hit box for all TouchableOpacity's.
const customTouchableOpacityProps = {
    hitSlop: { top: 15, right: 15, left: 15, bottom: 15 }
};


setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);
setCustomImage(customImageProps);
setCustomTouchableOpacity(customTouchableOpacityProps);
setCustomStatusBar(customStatusBar)
