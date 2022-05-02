import { ActivityIndicator } from 'react-native';
import React from 'react'

export const Colors = {
    white: '#fff',
    black: '#000',
    light_grey: '#ececec',
    light_grey1: '#a8a8a8',
    med_grey : '#D3D3D3',
    grey: 'grey',
    sky_blue: '#6DC1E3',
    red: 'red',
    light_green: '#00FA9A',
};
export const Images = {
    splashScreen : require('../assets/Images/splash.jpg'),
    bg1 : require('../assets/Images/bg1.png'),
    mailin : require('../assets/Images/bg2.png'),
    phone : require('../assets/Images/bg3.png'),
    dots : require('../assets/Images/bg4.png'),
    network : require('../assets/Images/bg5.png'),
    book : require('../assets/Images/bg6.png'),
    flag : require('../assets/Images/bg7.png'),
    mouse : require('../assets/Images/bg8.png'),
    star: require('../assets/Images/star.png'),
    fb: require('../assets/Images/fb.png'),
    insta : require('../assets/Images/insta.png'),
    upload: require('../assets/Images/upload.png'),
    profilepic : require('../assets/Images/profilepic.png'),
    edit : require('../assets/Images/edit.png'),
    revenue : require('../assets/Images/revenue.png'),
    exhibitions : require('../assets/Images/exhibitions.png')
}
export const ActIndicator = () => {
    return (
      <ActivityIndicator style={{ marginTop: 5 }} size={'large'} color='grey' />
    )
  }