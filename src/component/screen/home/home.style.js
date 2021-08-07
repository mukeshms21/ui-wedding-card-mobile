import React from 'react';
import {StyleSheet} from 'react-native';
import {hp} from '../../../helper/screenRatio';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(2),
    padding: hp(1),
  },
});
