import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconPrev({ color, style }) {
  const icon = `<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2L2.7642 8.68122C2.33388 9.14227 2.33388 9.85773 2.7642 10.3188L9 17" stroke="${
    color ? color : 'white'
  }" stroke-width="3" stroke-linecap="round"/></svg>`;

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

IconPrev.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default IconPrev;
