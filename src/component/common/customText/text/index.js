import React from 'react';
import {Text} from 'react-native';
import style from './text.style';

const CustomText = (props: any) => {
  return (
    <Text
      {...props}
      allowFontScaling={false}
      style={[style.textStyle, props.style]}>
      {props.children}
    </Text>
  );
};
export {CustomText};
