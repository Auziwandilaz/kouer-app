import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconFresh({ color, style }) {
  const icon = `<svg width="43" height="23" viewBox="0 0 43 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.50098 4.21663C20.0784 -5.17306 24.2406 10.4606 41.2952 1.9333" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  <path d="M1.70703 12.7003C20.2845 3.31059 24.4466 18.9443 41.5013 10.4169" stroke="${
    color ? color : 'white'
  }" stroke-width="2" stroke-linecap="round"/>
  <path d="M1.70703 21.1839C20.2845 11.7942 24.4466 27.4279 41.5013 18.9006" stroke="${
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

IconFresh.propTypes = {
  color: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.object),
};

export default IconFresh;
