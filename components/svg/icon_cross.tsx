import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconCross({ color, style }) {
  const icon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1374 9.34112C8.4303 9.63401 8.90517 9.63401 9.19806 9.34112C9.49096 9.04823 9.49096 8.57335 9.19806 8.28046L5.91764 5.00003L9.19806 1.71961C9.49096 1.42671 9.49096 0.95184 9.19806 0.658947C8.90517 0.366054 8.4303 0.366053 8.1374 0.658947L4.85698 3.93937L1.57655 0.658945C1.28366 0.366052 0.808783 0.366052 0.51589 0.658945C0.222997 0.951839 0.222997 1.42671 0.51589 1.71961L3.79632 5.00003L0.515892 8.28046C0.222999 8.57335 0.222999 9.04822 0.515892 9.34112C0.808786 9.63401 1.28366 9.63401 1.57655 9.34112L4.85698 6.06069L8.1374 9.34112Z" fill="${color ? color : 'white'}"/>
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

IconCross.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default IconCross;
