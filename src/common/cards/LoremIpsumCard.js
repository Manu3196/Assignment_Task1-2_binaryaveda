import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {Images} from '../../assets/assets'

const LoremIpsumCard = ({Imagesource , CardText , Imagewidth , Imageheight , CardTextTextheight}) => {
    return (
        <View style={{height:hp(42) }}>
            <Image
                style={{ width: Imagewidth, height:Imageheight, marginLeft: wp('10.66') }}
                source={Imagesource}
            />
            <View style={{ marginTop: hp(2.66), marginLeft: wp(9.86) , height:hp(7.64) }}>
                <Text style={{ fontSize: hp(3.50), color: 'black', fontWeight: '300' , lineHeight:hp(4)}}>lorem ipsum{'\n'}is used</Text>
            </View>
            <View style={{ marginTop: hp(2.22), marginLeft: wp(9.86), width: wp(77), height:CardTextTextheight }}>
                <Text style={{ fontSize: hp(1.85), color: 'black', fontWeight: '300', lineHeight: hp(2) }}>
                   {CardText}
                </Text>
            </View>
        </View>
    )
}

export default LoremIpsumCard