import { View, Text, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Images } from '../../assets/assets';
import {  ProfileStyle } from '../../Style/MainStyle';


export default function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ flex: 1, }}>

      <View style={ProfileStyle.agccomponent}>
        <View style={ProfileStyle.agctextview}>
          <Text style={ProfileStyle.agclogotextstyle}>A{'\n'}G{'\n'}C</Text>
        </View>
        <Text style={ProfileStyle.agctextstyle}>AGC</Text>
        <TouchableOpacity onPress={null}>
          <View style={ProfileStyle.profileiconstyle}>
            <View style={ProfileStyle.profileiconview}>
              <Ionicons name={'person-outline'} size={wp(6.75)} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <View style={ProfileStyle.addiconview}>
            <Ionicons name={'add'} size={wp(7)} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <View style={ProfileStyle.menuview}>
            <Ionicons name={'menu-outline'} size={wp(7)} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={ProfileStyle.add_edit_profile_view}>
        <TouchableOpacity onPress={null}>
          <View style={{ marginLeft: wp(13.6) }}>
            <Image
              source={Images.upload}
              style={ProfileStyle.uploadimgstyle}
            />
            <Text style={ProfileStyle.uploadtext}>Upload</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <View style={{ marginLeft: wp(11.73) }}>
            <Image
              source={Images.profilepic}
              style={ProfileStyle.profilepicstyle}
            />
            <Text style={ProfileStyle.profilepictext}>john.doe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <View style={{ marginLeft: wp(13.6) }}>
            <Image
              source={Images.edit}
              style={ProfileStyle.editimg}
            />
            <Text style={ProfileStyle.edittext}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={ProfileStyle.dashboardview}>
        <Text style={ProfileStyle.dashboartext}>My dashboard</Text>
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
      <View style={ProfileStyle.dashboardfooterview}>
        {/**line code */}
        <View style={ProfileStyle.lineview1}></View>
        <View style={{ flexDirection: 'row' }}>
          <View style={ProfileStyle.profileratings}>
            <Text style={ProfileStyle.profileratingstext}>2.3 K</Text>
            <Text style={ProfileStyle.profileratingstext2}>Followers</Text>
          </View>
          <View style={[ProfileStyle.profileratings, { marginLeft: wp(12) }]} >
            <Text style={ProfileStyle.profileratingstext}>50</Text>
            <Text style={ProfileStyle.profileratingstext2}>Art Works</Text>
          </View>
          <View style={[ProfileStyle.profileratings, { marginLeft: wp(12) }]}>
            <Text style={ProfileStyle.profileratingstext}>21</Text>
            <Text style={ProfileStyle.profileratingstext2}>Exhibitions</Text>
          </View>
        </View>
        <View style={[{ marginTop: hp(3.22) }, ProfileStyle.lineview1]}></View>
        <View style={ProfileStyle.overallratingsview}>
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
        <View style={ProfileStyle.palleteview}>
          <View style={[ProfileStyle.palletecolorview, { backgroundColor: 'purple' }]}></View>
          <View style={[ProfileStyle.palletecolorview, { backgroundColor: 'maroon' }]}></View>
          <View style={[ProfileStyle.palletecolorview, { backgroundColor: 'red' }]}></View>
          <View style={[ProfileStyle.palletecolorview, { backgroundColor: 'orange' }]}></View>
          <View style={[ProfileStyle.palletecolorview, { backgroundColor: 'yellow' }]}></View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: hp(3.2) }}>
          <View style={{ marginLeft: wp(10) }}>
            <TouchableOpacity onPress={null}>
              <Image
                source={Images.upload}
                style={ProfileStyle.uploadlibimg}
              />
            </TouchableOpacity>
            <Text style={ProfileStyle.uploadlibtext}>Uploads</Text>
          </View>
          <View style={{ marginLeft: wp(20) }}>
            <TouchableOpacity onPress={null}>
              <Image
                source={Images.exhibitions}
                style={ProfileStyle.exhibimg}
              />
            </TouchableOpacity>
            <Text style={ProfileStyle.exhibtext}>Exhibitions</Text>
          </View>
          <View style={{ marginLeft: wp(20) }}>
            <TouchableOpacity onPress={null}>
              <Image
                source={Images.revenue}
                style={ProfileStyle.revimg}
              />
            </TouchableOpacity>
            <Text style={ProfileStyle.revtext}>Revenue</Text>
          </View>
        </View>
      </View>


    </View>
  )
}