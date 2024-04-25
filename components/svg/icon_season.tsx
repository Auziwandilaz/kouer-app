import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

function IconSeason({ color, style }) {
  const icon = `<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="21" cy="21.0632" r="9" stroke="${
    color ? color : 'white'
  }" stroke-width="2"/>
  <path d="M21 7.37378V1" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  <path d="M34.75 21.0632H41.1238" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  <path d="M1 21.0632H7.37377" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  <path d="M30.7402 11.3855L32.508 9.61773" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  <path d="M9.375 32.7498L11.1428 30.982" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  <path d="M30.7402 30.9822L32.508 32.7499" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  <path d="M9.37695 9.61792L11.1447 11.3857" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  <path d="M21 41.1882V34.8145" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
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

IconSeason.propTypes = {
  color: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.object),
};

export default IconSeason;
