import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import style from './home.style';
import {ThemeContext} from '../../../helper/theme';
import {CustomText} from '../../common';

const HomeScreen = () => {
  const {theme, toggle} = useContext(ThemeContext);
  return (
    <View
      style={[style.mainContainer, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity onPress={() => console.log('called')}>
        <CustomText>Welcome to react native!</CustomText>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
