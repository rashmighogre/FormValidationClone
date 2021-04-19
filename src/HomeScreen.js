import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


const HomeScreen = ({props}) => {
    console.log(JSON.stringify(props))
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome, you are logged in</Text>
        </View>
    )
}

const NotificationsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingVertical: 20, paddingHorizontal: 20 }}>
            <Text>About Us</Text>
            <Text>Contact Us</Text>
        </View>
    )
}

const HomeDrawer = ({navigation}) => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    )
}

export default HomeDrawer;