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
  
  }

  )


