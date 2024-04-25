import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconNext({ color, style }) {
  const icon = `<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.19981 1L7.10218 7.70725C7.50104 8.1605 7.50104 8.83951 7.10218 9.29275L1.19981 16" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  </svg>
  `;

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

IconNext.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default IconNext;
