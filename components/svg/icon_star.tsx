import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconStar({ color, style }) {
  const icon = `<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.1733 2.9014L23.2094 12.2904C23.409 12.9077 23.9839 13.326 24.6327 13.326H34.4296C35.8754 13.326 36.4801 15.1734 35.314 16.0282L27.3774 21.8467C26.8573 22.228 26.6401 22.8997 26.8386 23.5133L29.9028 32.9894C30.3494 34.3702 28.7656 35.5141 27.5951 34.656L19.6344 28.8199C19.108 28.434 18.392 28.434 17.8656 28.8199L9.90486 34.656C8.73444 35.5141 7.15063 34.3703 7.59716 32.9894L10.6614 23.5133C10.8599 22.8997 10.6427 22.228 10.1226 21.8467L2.18597 16.0282C1.01995 15.1734 1.62459 13.326 3.07039 13.326H12.8673C13.5161 13.326 14.091 12.9077 14.2906 12.2904L17.3267 2.90141C17.7732 1.5206 19.7268 1.5206 20.1733 2.9014Z" stroke="${
    color ? color : 'white'
  }" stroke-width="2"/>
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

IconStar.propTypes = {
  color: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.object),
};

export default IconStar;
