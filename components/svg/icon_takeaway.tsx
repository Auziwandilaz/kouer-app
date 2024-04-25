import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

function IconTakeaway({ color, style }) {
  const icon = `<svg width="45" height="31" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.53322 24.1432H42.3333C42.6725 24.1432 42.9181 24.1631 43.0911 24.1889C43.0717 24.2166 43.0502 24.2466 43.0261 24.2787C42.8252 24.547 42.5324 24.8651 42.1658 25.2317C41.9072 25.4903 41.6001 25.7831 41.2781 26.09C40.7532 26.5903 40.189 27.1282 39.7317 27.6164C39.3468 28.0275 38.9795 28.4611 38.704 28.894C38.5956 29.0644 38.4894 29.2529 38.4019 29.4552H5.52964C5.28849 28.6634 4.78679 27.9349 4.28906 27.3265C3.71057 26.6194 3.00725 25.9257 2.40516 25.3319C2.26398 25.1926 2.12837 25.0589 2.00123 24.9317C1.70191 24.6324 1.45233 24.3731 1.26113 24.1487C1.34289 24.1452 1.43336 24.1432 1.53322 24.1432Z" stroke="${
    color ? color : 'white'
  }" stroke-width="1.888"/>
  <path d="M23.7893 2.8C23.7893 3.82505 22.9583 4.65601 21.9333 4.65601C20.9083 4.65601 20.0773 3.82505 20.0773 2.8C20.0773 1.77496 20.9083 0.944001 21.9333 0.944001C22.9583 0.944001 23.7893 1.77496 23.7893 2.8Z" stroke="${
    color ? color : 'white'
  }" stroke-width="1.888"/>
  <path d="M21.9334 4.944C27.0145 4.944 31.0467 7.23893 33.8339 10.8788C36.4732 14.3254 38.0044 18.9967 38.1737 24.0657H5.6949C6.08391 13.5892 12.9178 4.944 21.9334 4.944Z" stroke="${
    color ? color : 'white'
  }" stroke-width="1.888"/>
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

IconTakeaway.propTypes = {
  color: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.object),
};

export default IconTakeaway;
