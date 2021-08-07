import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import style from './qrcode.style';
import {ThemeContext} from '../../../helper/theme';
import {CustomText} from '../../common';

const QRCodeScreen = () => {
  const {theme, toggle} = useContext(ThemeContext);
  return (
    <View
      style={[style.mainContainer, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity onPress={() => console.log('called')}>
        <CustomText>Welcome to Qr code scanner !</CustomText>
      </TouchableOpacity>
    </View>
  );
};
export default QRCodeScreen;
