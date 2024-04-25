import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconPlus({ color, style }) {
  const icon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16.5C8 17.0523 8.44772 17.5 9 17.5C9.55229 17.5 10 17.0523 10 16.5V10H16.5C17.0523 10 17.5 9.55229 17.5 9C17.5 8.44772 17.0523 8 16.5 8H10V1.5C10 0.947715 9.55229 0.5 9 0.5C8.44772 0.5 8 0.947715 8 1.5V8H1.5C0.947715 8 0.5 8.44772 0.5 9C0.5 9.55229 0.947715 10 1.5 10H8V16.5Z" fill="${
    color ? color : 'white'
  }"/>
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

IconPlus.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default IconPlus;
