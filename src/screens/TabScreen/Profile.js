import { View, Text, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Images } from '../../assets/assets';


export default function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ flex: 1, }}>
      <View style={{ flexDirection: 'row', marginTop: hp(2.40), marginLeft: wp(6.40), height: wp(8) }}>
        <View style={{ width: wp(8), height: wp(8), backgroundColor: '#231F20', alignItems: 'center', borderRadius: wp(4) }}>
          <Text style={{ color: 'white', fontWeight: "500", fontSize: wp(2.25), }}>A{'\n'}G{'\n'}C</Text>
        </View>
        <Text style={{ color: '#231F20', marginLeft: wp(1), fontSize: wp(6), letterSpacing: wp(0.5) }}>AGC</Text>
        <TouchableOpacity onPress={null}>
          <View style={{ marginLeft: wp(22), backgroundColor: 'rgb(217, 0, 52)', borderRadius: wp(4), width: wp(8), height: wp(8) }}>
            <View style={{ width: wp(7), alignSelf: 'center' }}>
              <Ionicons name={'person-outline'} size={wp(6.75)} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <View style={{ marginLeft: wp(10.66), justifyContent: 'center' }}>
            <Ionicons name={'add'} size={wp(7)} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <View style={{ marginLeft: wp(10.66), justifyContent: 'center' }}>
            <Ionicons name={'menu-outline'} size={wp(7)} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: hp(2.66), width: wp(100), height: hp('11.28'), flexDirection: 'row' }}>
        <TouchableOpacity onPress={null}>
          <View style={{ marginLeft: wp(13.6) }}>
            <Image
              source={Images.upload}
              style={{ height: wp(8.88), width: wp(7.46), marginTop: hp(3.2) }}
            />
            <Text style={{ color: 'rgb(89 ,125 ,223)', fontSize: hp(1.5) }}>Upload</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <View style={{ marginLeft: wp(11.73) }}>
            <Image
              source={Images.profilepic}
              style={{ height: wp(33.86), width: wp(33.86) }}
            />
            <Text style={{ color: 'black', textAlign: 'center', fontSize: hp(2.50), fontWeight: '300' }}>john.doe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <View style={{ marginLeft: wp(13.6) }}>
            <Image
              source={Images.edit}
              style={{ height: wp(7.46), width: wp(7.46), marginTop: hp(3.2) }}
            />
            <Text style={{ color: 'rgb(89 ,125 ,223)', fontSize: hp(1.5), textAlign: 'center' }}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: hp(12), flexDirection: 'row', marginLeft: wp(6), height: hp(2.13) }}>
        <Text style={{ fontSize: hp(1.75) }}>My dashboard</Text>
        <Switch
          style={{ marginLeft: wp(47) }}
          trackColor={{ false: "#767577", true: "rgb(68 , 163 , 61)" }}
          thumbColor={isEnabled ? "rgb(255 ,255 ,255)" : "rgb(255 ,255 ,255)"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {/** dashboard view */}
      <View style={{ marginTop: hp(0.8), width: wp(88.53), marginLeft: wp(5.33), height: hp(24.711) }}>
        {/**line code */}
        <View style={{ width: wp(88.53), borderRadius: 1, height: 1, backgroundColor: 'rgb(216, 216, 216)' }}></View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginTop: hp(0.8), height: hp(4.711) }}>
            <Text style={{ fontSize: hp(2.66) }}>2.3 K</Text>
            <Text style={{ fontSize: hp(2) }}>Followers</Text>
          </View>
          <View style={{ marginTop: hp(0.8), height: hp(4.711), marginLeft: wp(12) }}>
            <Text style={{ fontSize: hp(2.66) }}>50</Text>
            <Text style={{ fontSize: hp(2) }}>Art Works</Text>
          </View>
          <View style={{ marginTop: hp(0.8), height: hp(4.711), marginLeft: wp(12) }}>
            <Text style={{ fontSize: hp(2.66) }}>21</Text>
            <Text style={{ fontSize: hp(2) }}>Exhibitions</Text>
          </View>
        </View>
        <View style={{ marginTop: hp(3.22), width: wp(88.53), borderRadius: 1, height: 1, backgroundColor: 'rgb(216, 216, 216)' }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp(1.866) }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={null}>
              <Ionicons name={'heart-outline'} size={wp(7)} />
            </TouchableOpacity>
            <Text style={{ fontSize: wp(5) }}> 120</Text>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: wp(2.5) }}>
            <TouchableOpacity onPress={null}>
              <Ionicons name={'navigate-outline'} size={wp(7)} />
            </TouchableOpacity>
            <Text style={{ fontSize: wp(5) }}> 43k</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={null}>
              <Ionicons name={'share-social-outline'} size={wp(7)} />
            </TouchableOpacity>
            <Text style={{ fontSize: wp(5) }}> 43 pt</Text>
          </View>
        </View>
        <View style={{ marginTop: hp(1.5), width: wp(91), height: hp(3.73), flexDirection: 'row' }}>
          <View style={{ width: wp(18), height: hp(3.73), backgroundColor: 'purple' }}></View>
          <View style={{ width: wp(18), height: hp(3.73), backgroundColor: 'maroon' }}></View>
          <View style={{ width: wp(18), height: hp(3.73), backgroundColor: 'red' }}></View>
          <View style={{ width: wp(18), height: hp(3.73), backgroundColor: 'orange' }}></View>
          <View style={{ width: wp(18), height: hp(3.73), backgroundColor: 'yellow' }}></View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: hp(3.2) }}>
          <View style={{ marginLeft: wp(10) }}>
            <TouchableOpacity onPress={null}>
              <Image
                source={Images.upload}
                style={{ height: wp(8.88), width: wp(7.46), }}
              />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: hp(1.5) }}>Uploads</Text>
          </View>
          <View style={{ marginLeft: wp(20) }}>
            <TouchableOpacity onPress={null}>
              <Image
                source={Images.exhibitions}
                style={{ height: wp(8.26), width: wp(8.26), marginTop: hp(0.5) }}
              />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: hp(1.5) }}>Exhibitions</Text>
          </View>
          <View style={{ marginLeft: wp(20) }}>
            <TouchableOpacity onPress={null}>
              <Image
                source={Images.revenue}
                style={{ height: wp(8.53), width: wp(8.50), }}
              />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: hp(1.5) }}>Revenue</Text>
          </View>
        </View>
      </View>


    </View>
  )
}