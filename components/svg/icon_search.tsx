import React from 'react';
import PropTypes from 'prop-types';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';

function IconSearch({ color, style }) {
  const icon = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.4995 9.75C18.4995 14.3754 14.7499 18.125 10.1245 18.125C5.49913 18.125 1.74951 14.3754 1.74951 9.75C1.74951 5.12462 5.49913 1.375 10.1245 1.375C14.7499 1.375 18.4995 5.12462 18.4995 9.75Z" stroke="${
    color ? color : 'white'
  }" stroke-width="2"/>
  <path d="M21.3162 22.3547C21.7193 22.7323 22.3521 22.7117 22.7297 22.3087C23.1073 21.9057 23.0867 21.2729 22.6837 20.8953L21.3162 22.3547ZM15.5082 16.9128L21.3162 22.3547L22.6837 20.8953L16.8756 15.4533L15.5082 16.9128Z" fill="${
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

IconSearch.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default IconSearch;
