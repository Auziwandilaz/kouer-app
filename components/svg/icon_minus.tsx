import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconMinus({ color, style }) {
  const icon = `<svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 1L15 1" stroke="${
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

IconMinus.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default IconMinus;
