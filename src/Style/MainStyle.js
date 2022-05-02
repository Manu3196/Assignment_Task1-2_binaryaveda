import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export const SplashStyle = StyleSheet.create({
    imgBack:{
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width,
        alignSelf:'center'
    },
    actInd:{
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width,
        marginTop:'55%'
    } , 
    bgStyle: {
      backgroundColor:'rgb 255 255 255' ,
      flex: 1
    }
  });

  export const HomePageStyle = StyleSheet.create({
    agcview: {
      marginLeft: wp(6.40), marginTop: hp(2.75), width: wp(56.53), height: hp(6.84), flexDirection: 'row'
    } ,
    agctextastyle : {
      color: 'white', fontWeight: "500", fontSize: wp(5.80), 
    } ,
    agctextastyle2view:{
      marginLeft: wp(6.40), height: wp(21)
    } ,
    agctextastyle2 : {
      color: '#231F20', fontWeight: '400', fontSize: wp(5.80), letterSpacing: wp(1)
    } ,
    imagefooterview : {
      width: wp(77), alignSelf: 'center', marginLeft: wp(9.60), marginRight: wp(13.33), height: hp(7.11)
    } ,
    imagefooterviewtext : {
      fontSize: hp(1.42), textAlign: 'center'
    } ,
    regview: {
      marginTop: hp(0.62), flexDirection: 'row'
    } ,
    regview2 : {
      backgroundColor: 'rgb(236 ,81 ,81)', width: wp(32.8), marginLeft: wp(14.40), height: hp(3.82), borderRadius: wp(2.60), flexDirection: 'row' 
     } ,
     regviewicon : {
      justifyContent: 'center', marginHorizontal: wp(1.5)
     } , 
     regtext: {
      color: 'white', fontWeight: "400", fontSize: wp('4.5')
     } ,
     regiconsideview : {
      justifyContent: 'center'
     },
     regiconsidetext: {
      marginLeft: wp(1.22), fontSize: wp(4.50), color: 'rgb(26 , 26 , 26)', fontWeight: '300'
     } , 
     trackmyapplnview : {
      marginTop: hp(2.93), marginLeft: wp(30), flexDirection: 'row', marginBottom: hp('6.13')
     } ,
     trackmyapplntext : {
      color: '#577BDF', fontSize: wp(4.50), color: '#577BDF', fontWeight: '300', marginLeft: wp(1)
     } , 
     socialmediaview : {
      marginTop: hp('6.044'), justifyContent: 'center', flexDirection: 'row' 
     } , 
     socialmediaimageview2 : {
      width: wp(8.8), height: wp(8.533), marginLeft: wp(2.66) 
     } ,
     socialmediaimageview1 : {
      width: wp(8.8), height: wp(8.533)
     } , 
     agcfooterview : {
      marginTop: hp(4.177), marginLeft: wp(16), flexDirection: 'row', height: hp(2.50), width: wp(68)
     },
     agcfooterchildview : {
      width: hp(2.50), height: hp(2.50), backgroundColor: '#231F20', alignItems: 'center', borderRadius: hp(1.25)
     },
     agcfootertext 
     :{
      color: 'white', fontWeight: "500", fontSize: hp(0.60),
     } , 
     agcchildview2 : {
      marginLeft: wp(3) 
     } , 
     agcchildview2text :
     {
      color: '#231F20', fontWeight: '400', fontSize: hp(2), textAlign: 'center', letterSpacing: wp(0.50)
     } , 
     footerinfoview1 : {
      marginLeft: wp(12.533) 
     } , 

     footerinfoview2 : {
      marginLeft: wp(19.50) 
     } ,
     copyrightview : {
      flexDirection: 'row' , marginBottom:hp(4.35)
     } , 
     copyrightchildview:
     {
      alignItems:'center' , marginLeft:wp(26) , width: hp(2.50), height: hp(2.50), backgroundColor: 'white', borderRadius: hp(1.25) ,  borderColor:'black' , borderWidth:0.5 
     } , 
     copyrightchildviewtext :
     {
      color: 'black', fontWeight: "300", fontSize: hp(2) , marginTop:hp(-0.2) 
     } ,
     copyrightchildview2 :{
      marginLeft:hp(1)
     } , 
     copyrightchildview2text:
     {
      fontSize: hp(1.85) , color:'black' , fontWeight:'300'
     }
  
  })

  export const ProfileStyle = StyleSheet.create({
    agccomponent : {flexDirection: 'row', marginTop: hp(2.40), marginLeft: wp(6.40), height: wp(8)}  , 
  agctextview : {
  width: wp(8), height: wp(8), backgroundColor: '#231F20', alignItems: 'center', borderRadius: wp(4)
  } , 
  agclogotextstyle : {
  color: 'white', fontWeight: "500", fontSize: wp(2.25) } ,
  agctextstyle : {color: '#231F20', marginLeft: wp(1), fontSize: wp(6), letterSpacing: wp(0.5)} ,
  profileiconstyle : {marginLeft: wp(22), backgroundColor: 'rgb(217, 0, 52)', borderRadius: wp(4), width: wp(8), height: wp(8)} , 
  profileiconview : { width: wp(7), alignSelf: 'center'} , 
  addiconview : { marginLeft: wp(10.66), justifyContent: 'center'} ,
  menuview : { marginLeft: wp(10.66), justifyContent: 'center'} ,
  add_edit_profile_view : {marginTop: hp(2.66), width: wp(100), height: hp('11.28'), flexDirection: 'row'} ,
  uploadimgstyle : { height: wp(8.88), width: wp(7.46), marginTop: hp(3.2)} , 
  uploadtext : {color: 'rgb(89 ,125 ,223)', fontSize: hp(1.5) } ,
  profilepicstyle : { height: wp(33.86), width: wp(33.86)} ,
  profilepictext : {color: 'black', textAlign: 'center', fontSize: hp(2.50), fontWeight: '300' } , 
  editimg : { height: wp(7.46), width: wp(7.46), marginTop: hp(3.2)} ,
  edittext : {color: 'rgb(89 ,125 ,223)', fontSize: hp(1.5), textAlign: 'center'} ,
  dashboardview : { marginTop: hp(12), flexDirection: 'row', marginLeft: wp(6), height: hp(2.13)} , 
  dashboartext :{ fontSize: hp(1.75) } , 
  dashboardfooterview : {marginTop: hp(0.8), width: wp(88.53), marginLeft: wp(5.33), height: hp(24.711) } , 
  lineview1 : { width: wp(88.53), borderRadius: 1, height: 1, backgroundColor: 'rgb(216, 216, 216)'} , 
  profileratings : { marginTop: hp(0.8), height: hp(4.711)} ,
  profileratingstext : { fontSize: hp(2.66) } , 
  profileratingstext2 : {fontSize: hp(2) } , 
  overallratingsview : { flexDirection: 'row', justifyContent: 'center', marginTop: hp(1.866) } ,
  palleteview : {marginTop: hp(1.5), width: wp(91), height: hp(3.73), flexDirection: 'row' } ,
  palletecolorview : { width: wp(18), height: hp(3.73),} ,
  uploadlibimg : { height: wp(8.88), width: wp(7.46),} , 
  uploadlibtext : { fontWeight: 'bold', fontSize: hp(1.5)} ,
  exhibimg: { height: wp(8.26), width: wp(8.26), marginTop: hp(0.5)} ,
  exhibtext: { fontWeight: 'bold', fontSize: hp(1.5)} ,
  revimg : {height: wp(8.53), width: wp(8.50),} ,
  revtext : { fontWeight: 'bold', fontSize: hp(1.5)} ,
  





  









  })


