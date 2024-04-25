import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

function IconCarrot({ color, style }) {
  const icon = `<svg width="44" height="53" viewBox="0 0 44 53" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28.2348 8.1436V8.1436C28.4561 6.3066 27.1182 4.64902 25.2758 4.47775L25.1136 4.46267C23.2118 4.28587 21.5291 5.68998 21.3625 7.59275L21.0537 11.12C20.8409 13.5497 22.9159 15.5605 25.3377 15.2716V15.2716" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997"/>
  <path d="M24.2603 14.2399L24.7309 8.86049" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997" stroke-linecap="round"/>
  <path d="M35.0261 10.4561V10.4561C36.7165 9.67426 38.7319 10.3052 39.6894 11.9027V11.9027C40.7378 13.652 40.1716 15.9345 38.4167 16.9736L35.572 18.658C33.4733 19.9006 30.7629 18.8994 29.9759 16.5909V16.5909" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997"/>
  <path d="M31.3726 17.1153L36.0192 14.3643" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997" stroke-linecap="round"/>
  <rect x="-1.29087" y="0.345887" width="7.10987" height="10.7099" rx="3.55493" transform="matrix(-0.866023 -0.500004 -0.499996 0.866028 35.1811 7.74038)" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997"/>
  <path d="M28.1206 15.4403L30.8206 10.7638" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997" stroke-linecap="round"/>
  <path d="M30.4147 19.2604C28.6691 17.0714 26.4334 15.781 23.6653 15.3642C23.1331 15.284 22.5703 15.4406 22.1077 15.8002C12.9818 22.8956 8.33686 35.4639 10.602 44.8597C10.6891 45.2212 11.0485 45.4286 11.4051 45.3233C20.6735 42.5866 29.2337 32.2785 30.8159 20.8276C30.8961 20.2471 30.7503 19.6813 30.4147 19.2604Z" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997"/>
  <path d="M19.063 20.0815L25.2982 23.6815" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997" stroke-linecap="round"/>
  <path d="M14.5237 25.5917L21.6987 29.9187" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997" stroke-linecap="round"/>
  <path d="M11.8662 32.5529L18.1015 36.1529" stroke="${
    color ? color : 'white'
  }" stroke-width="1.88997" stroke-linecap="round"/>
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

IconCarrot.propTypes = {
  color: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.object),
};

export default IconCarrot;
