import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

function IconDrinks({ color, style }) {
  const icon = `<svg width="39" height="42" viewBox="0 0 39 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M29.7357 24.5728L17.0592 40.295C16.4509 41.0495 15.346 41.168 14.5915 40.5596L2.40079 30.7302C1.64626 30.1218 1.52777 29.017 2.13614 28.2624L14.7498 12.6181C15.8211 11.2894 17.2192 10.2617 18.8071 9.63565L28.1996 5.93261C28.7869 5.70107 29.304 5.32096 29.7002 4.82951L32.3029 1.60154C32.9113 0.846999 34.0161 0.728514 34.7706 1.3369L36.5258 2.75212C37.2614 3.34521 37.3954 4.41419 36.8289 5.17046L34.2379 8.62983C33.8987 9.08274 33.6695 9.60841 33.5687 10.1652L31.7609 20.1439C31.467 21.7664 30.7707 23.2892 29.7357 24.5728Z" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88999"/>
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

IconDrinks.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default IconDrinks;
