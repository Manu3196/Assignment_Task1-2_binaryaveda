import { View, Text, Image } from 'react-native'
import React from 'react'
import { SplashStyle, HomePageStyle } from '../../Style/MainStyle'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import bn from '../../assets/bn.svg';
import { Images } from '../../assets/assets';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoremIpsumCard from '../../common/cards/LoremIpsumCard';
import FooterInfo from '../../common/cards/FooterInfo';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={HomePageStyle.agcview}>
          <View style={{ width: wp(21), height: wp(21), backgroundColor: '#231F20', alignItems: 'center', borderRadius: wp(10.50) }}>
            <Text style={HomePageStyle.agctextastyle}>A{'\n'}G{'\n'}C</Text>
          </View>
          <View style={HomePageStyle.agctextastyle2view}>
            <Text style={HomePageStyle.agctextastyle2}>ART{'\n'}GALLERY{'\n'}CENTER</Text>
          </View>
        </View>
        <Image
          source={Images.bg1}
          style={{ width: wp(100), height: wp(100) }}
        />
        <View style={HomePageStyle.imagefooterview}>
          <Text style={HomePageStyle.imagefooterviewtext}>Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit</Text>
        </View>
        <View style={HomePageStyle.regview}>
          <TouchableOpacity onPress={null} style={HomePageStyle.regview2}>
            <View style={{ justifyContent: 'center', marginHorizontal: wp(1.5) }}>
              <Ionicons name={'ios-arrow-forward'} size={wp(6.5)} color={'white'} />
            </View>
            <View style={HomePageStyle.regviewicon}>
              <Text style={HomePageStyle.regtext}>register</Text>
            </View>
          </TouchableOpacity>
          <View style={HomePageStyle.regiconsideview}>
            <Text style={HomePageStyle.regiconsidetext}>me as a collector</Text>
          </View>
        </View>
        <TouchableOpacity onPress={null}>
          <View style={HomePageStyle.trackmyapplnview}>
            <Ionicons name={'ios-arrow-forward'} size={wp(6.5)} color='#577BDF' />
            <Text style={HomePageStyle.trackmyapplntext}>track my application</Text>
          </View>
        </TouchableOpacity>
        <View>
          <LoremIpsumCard
            Imagesource={Images.mailin}
            Imagewidth={wp(24)}
            Imageheight={wp(24)}
            CardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
            CardTextTextheight={hp((16.8))}
          />
          <LoremIpsumCard
            Imagesource={Images.phone}
            Imagewidth={wp(13.33)}
            Imageheight={wp(21.86)}
            CardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
            CardTextTextheight={hp((16.8))}

          />
          <LoremIpsumCard
            Imagesource={Images.dots}
            Imagewidth={wp(20.48)}
            Imageheight={wp(21.15)}
            CardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            CardTextTextheight={hp((20.44))}


          />
          <LoremIpsumCard
            Imagesource={Images.network}
            Imagewidth={wp(20.80)}
            Imageheight={wp(21)}
            CardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            CardTextTextheight={hp(20.44)}


          />
          <LoremIpsumCard
            Imagesource={Images.star}
            Imagewidth={wp(20.80)}
            Imageheight={wp(21)}
            CardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            CardTextTextheight={hp(16.80)}

          />
          <LoremIpsumCard
            Imagesource={Images.book}
            Imagewidth={wp(20.80)}
            Imageheight={wp(20)}
            CardTextTextheight={hp(21.6)}
            CardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />

          <LoremIpsumCard
            Imagesource={Images.flag}
            Imagewidth={wp(9.60)}
            Imageheight={wp(18.40)}
            CardTextTextheight={hp(20.44)}
            CardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />


          <LoremIpsumCard
            Imagesource={Images.mouse}
            Imagewidth={wp(11.38)}
            Imageheight={wp(20.842)}
            CardTextTextheight={hp(20.44)}
            CardText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />

          <View style={HomePageStyle.socialmediaview}>
            <Image
              source={Images.fb}
              style={HomePageStyle.socialmediaimageview1}
            />
            <Image
              source={Images.insta}
              style={HomePageStyle.socialmediaimageview2}

            />
          </View>
          <View style={HomePageStyle.agcfooterview}>
            <View style={HomePageStyle.agcfooterchildview}>
              <Text style={HomePageStyle.agcfootertext}>A{'\n'}G{'\n'}C</Text>
            </View>
            <View style={HomePageStyle.agcchildview2}>
              <Text style={HomePageStyle.agcchildview2text}>ART GALLERY CENTER</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={HomePageStyle.footerinfoview1}>
              <FooterInfo
                FooterText1='About Us.'
                FooterText2='Team.'
                FooterText3='Reach Us.'
              />
            </View>
            <View style={HomePageStyle.footerinfoview2}>
              <FooterInfo
                FooterText1='Affliations.'
                FooterText2='Disclaimers.'
                FooterText3='Privacy Policy.'
              />
            </View>
          </View>
          <View style={HomePageStyle.copyrightview}>
            <View style={HomePageStyle.copyrightchildview}>
              <Text style={HomePageStyle.copyrightchildviewtext}>C</Text>
            </View>
            <View style={HomePageStyle.copyrightchildview2}>
              <Text style={HomePageStyle.copyrightchildview2text}> Content Copyright reserved.</Text>
            </View>
          </View>


        </View>
      </ScrollView>
    </View>
  )
}