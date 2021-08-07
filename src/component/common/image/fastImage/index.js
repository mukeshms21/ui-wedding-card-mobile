import React, {useState} from 'react';
import {View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './fastImage.style';
import {
  DEFAULT_ALTERNATE_IMAGE,
  THUMBNAIL_IMAGE,
} from '../../../../assets/images';
import {
  FASTIMAGE_CACHE,
  FASTIMAGE_PRIORITY,
  FASTIMAGE_RESIZEMODE,
} from './fastImageConstant';

const FastImageComponent = (props: any) => {
  const {
    containerStyle = null,
    uri = 'https://unsplash.it/400/400?image=1',
    resizeMode = FASTIMAGE_RESIZEMODE.COVER,
    priority = FASTIMAGE_PRIORITY.NORMAL,
    authorization = '123456ABC!@#',
    placeHolder = THUMBNAIL_IMAGE,
    alt = DEFAULT_ALTERNATE_IMAGE,
    cache = FASTIMAGE_CACHE.CACHEONLY,
  } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageNotFound, setIsImageNotFound] = useState(false);
  return (
    <View>
      <FastImage
        style={[styles.image, containerStyle]}
        source={{
          uri,
          headers: {authorization},
          priority,
          cache,
        }}
        onError={() => {
          setIsImageNotFound(true);
        }}
        onLoadStart={() => {
          setIsImageNotFound(false);
          setIsImageLoaded(false);
        }}
        onLoadEnd={() => {
          setIsImageLoaded(true);
        }}
        resizeMode={resizeMode}
      />
      {!isImageLoaded && (
        <Image
          style={[styles.image, containerStyle, {position: 'absolute'}]}
          source={placeHolder}
        />
      )}
      {isImageNotFound && (
        <Image
          style={[styles.image, containerStyle, {position: 'absolute'}]}
          source={alt}
        />
      )}
    </View>
  );
};

export {FastImageComponent};
