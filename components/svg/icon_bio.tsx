import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconBio({ color, style }) {
  const icon = `<svg width="33" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.8525 36.7482C20.7539 25.7714 20.6186 18.4943 18.3196 16.2062" stroke="${
    color ? color : 'white'
  }" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M8.9246 17.4104C7.26842 16.3063 4.86809 15.0649 1.73324 14.7526C4.10126 12.3103 8.16134 11.2734 11.693 11.598C13.5104 11.7651 15.0989 12.2869 16.1849 13.0819C17.2472 13.8594 17.8131 14.8765 17.7248 16.1427C17.6791 16.7977 17.3537 17.2988 16.7888 17.6869C16.2027 18.0897 15.3668 18.359 14.3914 18.4708C12.4202 18.6967 10.1836 18.2497 8.9246 17.4104Z" stroke="${
    color ? color : 'white'
  }" stroke-width="1.5"/>
  <path d="M17.7061 16.5014C15.5 15 12.5 14 9.5 14" stroke="${
    color ? color : 'white'
  }" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M19.5 15.8882C19.5 11.9025 22.4127 7.45685 25.6319 5.61728" stroke="${
    color ? color : 'white'
  }" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M18.7912 15.7263C16.6802 13.0876 17.0048 9.6286 19.3648 6.65219C21.6886 3.72141 25.9564 1.34545 31.5302 1.03596C31.4401 1.21158 31.3515 1.38359 31.2646 1.55239C29.9075 4.18712 28.9528 6.04048 28.9528 8.68322C28.9528 12.051 26.7772 14.2479 24.2881 15.3778C23.0442 15.9424 21.7621 16.2178 20.7155 16.233C20.1922 16.2405 19.7506 16.1827 19.4119 16.0791C19.0674 15.9738 18.8801 15.8374 18.7912 15.7263L18.274 16.1401L18.7912 15.7263Z" stroke="${
    color ? color : 'white'
  }" stroke-width="1.5"/>
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

IconBio.propTypes = {
  color: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.object),
};

export default IconBio;
