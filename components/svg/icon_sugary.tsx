import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

function IconSugary({ color, style }) {
  const icon = `<svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.30147" y="1.30199" width="25.3462" height="31.5616" rx="1.92197" transform="matrix(0.84839 0.529372 -0.529374 0.848389 20.0294 6.92941)" stroke="white" stroke-width="1.89"/>
  <path d="M23.5512 2.77987L44.2258 15.6803C45.1263 16.2422 45.4009 17.4277 44.8389 18.3283L43.3212 20.7606C42.7593 21.6611 41.5738 21.9356 40.6732 21.3737L26.0794 12.2676L23.6471 10.7499L19.9986 8.47332C19.0981 7.9114 18.8236 6.72585 19.3855 5.82531L20.9032 3.39301C21.4651 2.49247 22.6506 2.21796 23.5512 2.77987Z" stroke="white" stroke-width="1.89"/>
  <path d="M25.8243 25.2986C26.2442 24.6257 26.7456 24.3316 27.1977 24.2378C27.6663 24.1405 28.1644 24.2416 28.5854 24.5042C29.0063 24.7669 29.316 25.1699 29.4346 25.6335C29.5491 26.0808 29.5053 26.6605 29.0854 27.3335L20.7707 40.6589L17.5095 38.624L25.8243 25.2986Z" stroke="${color ? color : 'white'}" stroke-width="1.89"/>
  <path d="M31.9039 29.0938C32.3238 28.4208 32.8252 28.1267 33.2773 28.0329C33.7459 27.9357 34.244 28.0367 34.665 28.2994C35.0859 28.5621 35.3956 28.9651 35.5142 29.4287C35.6287 29.876 35.5849 30.4557 35.165 31.1286L26.8503 44.4541L23.5891 42.4192L31.9039 29.0938Z" stroke="${color ? color : 'white'}" stroke-width="1.89"/>
  <path d="M19.7413 21.5056C20.1612 20.8327 20.6626 20.5386 21.1147 20.4448C21.5833 20.3476 22.0814 20.4486 22.5024 20.7113C22.9233 20.9739 23.233 21.3769 23.3516 21.8406C23.4661 22.2879 23.4223 22.8676 23.0024 23.5405L14.6877 36.8659L11.4265 34.831L19.7413 21.5056Z" stroke="${color ? color : 'white'}" stroke-width="1.89"/>
  <path d="M13.6592 17.7105C14.0791 17.0375 14.5806 16.7434 15.0327 16.6496C15.5013 16.5524 15.9994 16.6534 16.4203 16.9161C16.8413 17.1788 17.151 17.5818 17.2696 18.0454C17.384 18.4927 17.3403 19.0724 16.9204 19.7453L8.60565 33.0708L5.3445 31.0359L13.6592 17.7105Z" stroke="${color ? color : 'white'}" stroke-width="1.89"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 43.0444 15.3301)" fill="${color ? color : 'white'}"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 38.9873 16.4626)" fill="${color ? color : 'white'}"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 38.2275 12.3245)" fill="${color ? color : 'white'}"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 34.1719 13.4583)" fill="${color ? color : 'white'}"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 33.4111 9.31982)" fill="${color ? color : 'white'}"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 29.3574 10.4534)" fill="${color ? color : 'white'}"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 28.5933 6.31519)" fill="${color ? color : 'white'}"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 24.542 7.448)" fill="${color ? color : 'white'}"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 23.7778 3.3103)" fill="${color ? color : 'white'}"/>
  <rect width="2.83822" height="3.10701" transform="matrix(0.84839 0.529372 -0.529374 0.848389 19.7236 4.44287)" fill="${color ? color : 'white'}"/>
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

IconSugary.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default IconSugary;
