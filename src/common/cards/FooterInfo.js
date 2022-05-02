import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const FooterInfo = ({FooterText1 ,FooterText2 , FooterText3 }) => {
    return (
        <View style={{ marginTop: hp(1.6), width: wp(23.733), height: hp(13.86) }}>
            <Text style={{ marginTop: hp(1.25), fontSize: hp(1.85), color: 'black', fontWeight: '500', lineHeight: hp(2), }}>{FooterText1}</Text>
            <Text style={{ marginTop: hp(2), fontSize: hp(1.85), color: 'black', fontWeight: '500', lineHeight: hp(2), }}>{FooterText2}</Text>
            <Text style={{ marginTop: hp(2), fontSize: hp(1.75), color: 'black', fontWeight: '500', lineHeight: hp(1.85), }}>{FooterText3}</Text>
        </View>
    )
}

export default FooterInfo