import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal, FlatList, Dimensions,Alert } from 'react-native';

const States = [{
    id: 'kajfc29',
    state: 'Maharastra',
    cities: ['Pune', 'Mumbai', 'satara']
},
{
    id: 'kajfc30',
    state: 'Punjab',
    cities: ['Ludhiana', "Bathinda"]
}]

const SignUp = ({navigation}) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isVisible2, setIsVisible2] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [selectCountry, setSelectCountry] = React.useState("Select State");
    const [selectCity, setSelectCity] = React.useState("Select city");

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [confirmPassword,setConfirmPassword] = React.useState('');
    const [name,setName] = React.useState('');
    const [mobile,setMobile] = React.useState('');

    const handleEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(reg.test(val) == false){
            console.log('false');
            setEmail('');
        } else {
            setEmail(val);
        }
    }
    const handlePassword = (val) => {
        if(val.length > 4) {
            setPassword(val);
        } else {
            setPassword('');
        }
    }
const handleSubmit = () => {
    if(email == '' || selectCountry == 'Select State' || selectCity == 'Select City' || password == '' || confirmPassword == '' || name == ''|| mobile == '') {
           return Alert.alert('Please review form and fill every thing');
    } else if(password != confirmPassword) {
        return Alert.alert('Passwords Do not match');
    } else if(mobile.length != 10) {
        return Alert.alert('mobile number should be 10 digits long');
    }else {
        navigation.navigate('Home',{
            email : email
        })
    }
}
    return (
        <View style={styles.main_container}>
            <Text style={styles.headerLarge}>Welcome!</Text>
            <ScrollView style={{ paddingVertical: 10, paddingHorizontal: 10, marginTop: 20, marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                <View style={styles.vertical_container}>
                    <Text style={styles.text_hint}>Name</Text>
                    <TextInput placeholder="your name" onChangeText={(val) => {
                        setName(val);
                    }} />
                </View>
                <View style={styles.vertical_container}>
                    <Text style={styles.text_hint}>Email-Address</Text>
                    <TextInput placeholder="xxx@yz.com" onChangeText={(val) => handleEmail(val)} />
                </View>
                <View style={styles.vertical_container}>
                    <Text style={styles.text_hint}>Mobile Number</Text>
                    <TextInput placeholder="10 digit mobile number" keyboardType="number-pad" onChangeText={(val) => {
                        setMobile(val);
                    }} />
                </View>
                <View style={styles.vertical_container}>
                    <Text style={styles.text_hint}>State</Text>
                    <TouchableOpacity onPress={() => { setIsVisible(!isVisible) }} style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#E8E8E8', paddingBottom: 11.5, marginTop: 15 }}>
                        <Text>{selectCountry}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.vertical_container}>
                    <Text style={styles.text_hint}>City</Text>
                    <TouchableOpacity onPress={() => { setIsVisible2(!isVisible2) }} style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#E8E8E8', paddingBottom: 11.5, marginTop: 15 }}>
                        <Text>{selectCity}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.vertical_container}>
                    <Text style={styles.text_hint}>Password</Text>
                    <TextInput placeholder="password" secureTextEntry={true} onChangeText={(val) => handlePassword(val)} />
                </View>
                <View style={styles.vertical_container}>
                    <Text style={styles.text_hint}>Confirm Password</Text>
                    <TextInput placeholder="confirm password" onChangeText={(val) => {
                        if(val.length > 4) {
                            setConfirmPassword(val);
                        } else {
                            setConfirmPassword('')
                        }
                    }} />
                </View>
                <TouchableOpacity onPress={handleSubmit}
                style={{height : 50,justifyContent:'center',alignItems:'center',backgroundColor:'blue',marginBottom:20,borderRadius:16}}>
                    <Text style={{color:'#fff'}}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={isVisible}
                onRequestClose={() => console.log('modal closed')}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: Dimensions.get('window').height, zIndex: 2, position: 'relative' }}>
                    <TouchableOpacity style={{ height: Dimensions.get('window').height * 0.6 }} onPress={() => { setIsVisible(!isVisible) }} />
                    <View style={{ bottom: 0, position: 'absolute', maxHeight: Dimensions.get('window').height * 0.4 }}>
                        <View style={{ height: 15, borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: '#fff' }}></View>
                        <FlatList showsVerticalScrollIndicator={false}
                            data={States}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => (
                                <View style={{ backgroundColor: '#fff' }}>
                                    <TouchableOpacity onPress={() => {
                                        setSelectCountry(item.state);
                                        setIsVisible(!isVisible);
                                        setSelectedIndex(index);
                                    }}
                                        style={{
                                            height: 40, backgroundColor: '#FFF', width: Dimensions.get('window').width, alignItems: 'center',
                                            justifyContent: 'center', borderBottomWidth: 1, borderColor: '#E4E4E4', flexDirection: 'row', position: 'relative'
                                        }}>
                                        <Text style={{ color: '#211B3E' }}>{item.state}</Text>
                                    </TouchableOpacity>
                                </View>
                            )} />
                        <View style={{ height: 5, backgroundColor: '#706F74' }}></View>
                        <View style={{ backgroundColor: '#5E41F6', minHeight: Dimensions.get('window').height * 0.1 }}>
                            <TouchableOpacity onPress={() => { setIsVisible(!isVisible) }} style={{ height: 40, backgroundColor: '#5E41F6', width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={isVisible2}
                onRequestClose={() => console.log('modal closed')}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: Dimensions.get('window').height, zIndex: 2, position: 'relative' }}>
                    <TouchableOpacity style={{ height: Dimensions.get('window').height * 0.6 }} onPress={() => { setIsVisible(!isVisible) }} />
                    <View style={{ bottom: 0, position: 'absolute', maxHeight: Dimensions.get('window').height * 0.4 }}>
                        <View style={{ height: 15, borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: '#fff' }}></View>
                        <FlatList showsVerticalScrollIndicator={false}
                            data={States[selectedIndex].cities}
                            keyExtractor={index => index}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor: '#fff' }}>
                                    <TouchableOpacity onPress={() => {
                                        setSelectCity(item);
                                        setIsVisible2(!isVisible2);
                                    }}
                                        style={{
                                            height: 40, backgroundColor: '#FFF', width: Dimensions.get('window').width, alignItems: 'center',
                                            justifyContent: 'center', borderBottomWidth: 1, borderColor: '#E4E4E4', flexDirection: 'row', position: 'relative'
                                        }}>
                                        <Text style={{ color: '#211B3E' }}>{item}</Text>
                                    </TouchableOpacity>
                                </View>
                            )} />
                        <View style={{ height: 5, backgroundColor: '#706F74' }}></View>
                        <View style={{ backgroundColor: '#5E41F6', minHeight: Dimensions.get('window').height * 0.1 }}>
                            <TouchableOpacity onPress={() => { setIsVisible2(!isVisible2) }} style={{ height: 40, backgroundColor: '#5E41F6', width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerLarge: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24,
        marginBottom: 4,
        color: '#333',
        margin: 20
    },
    vertical_container: {
        flexDirection: 'column',
        marginTop: 10
    },
    text_hint: {
        fontSize: 16,
        fontWeight: '900',
        color: '#363636',
    },
    text_input: {
        fontSize: 14,
        color: '#706F74',
        borderWidth: 1,
        borderColor: '#ddd'
    }
});

export default SignUp;