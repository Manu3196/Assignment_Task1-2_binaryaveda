import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Register from '../screens/Register';
import TabScreen from './TabScreen';
import Profile from '../screens/TabScreen/Profile';

const Stack = createStackNavigator();

function MyStack(props) {
    return (
        <Stack.Navigator initialRouteName="SplashScreen"  
           screenOptions={{ headerShown: false   }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Tabscreen" component={TabScreen} options={{headerShown: false}}  />
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}  />
        </Stack.Navigator>
    )
}

const MainRoute = props => {

    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
};

export default MainRoute;