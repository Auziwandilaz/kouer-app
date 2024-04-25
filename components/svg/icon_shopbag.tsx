import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconShopBag({ color, style }) {
  const icon = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12.5" cy="12.5" r="12" stroke="${color ? color : 'white'}"/>
  <path d="M9.53662 9.53037C9.53662 8.78447 9.83372 8.06911 10.3626 7.54167C10.8914 7.01424 11.6087 6.71793 12.3566 6.71793C13.1045 6.71793 13.8217 7.01424 14.3506 7.54167C14.8794 8.06911 15.1765 8.78447 15.1765 9.53037" stroke="${
    color ? color : 'white'
  }" stroke-width="1.25" stroke-linecap="round"/>
  <path d="M6.7168 10.2337H17.9966L17.408 16.689C17.3761 17.0384 17.2145 17.3633 16.9548 17.5999C16.6951 17.8365 16.3561 17.9678 16.0043 17.9679H8.7091C8.35733 17.9678 8.01833 17.8365 7.75863 17.5999C7.49893 17.3633 7.3373 17.0384 7.30546 16.689L6.7168 10.2337Z" stroke="${
    color ? color : 'white'
  }" stroke-width="1.25" stroke-linejoin="round"/>
  </svg>`;

  return (
    <View style={style ? style : {}}>
      <SvgXml
        xml={icon}
        width={'100%'}
        height={'100%'}
      />
    </View>
  );
}

IconShopBag.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default IconShopBag;
