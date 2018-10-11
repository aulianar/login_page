import React, { Component } from 'react';
import { View, Text, Button,TextInput,Image, StyleSheet, TouchableOpacity } from 'react-native';

export class Settings extends Component {
  render() {
    return (
	<View style={styles.container}> 
		<Image
                    style={{width:150, height: 100}}
                    source={require('/newProject/images/logo.png')}
                />
		
                <TextInput
                    style={styles.inputBox}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput 
                    style={styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({text})} 
                />

                <Button style ={styles.button}
		        onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"
                title="Login"
                color="#273b66"
                />
                <Text style={styles.signupText}>Don't have an account yet?</Text>
            </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
    backgroundColor:'#6E7F9E',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
      },   
  button:{
    width:300,
    backgroundColor:'#274785',
    margin: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingVertical: 13
  },
  inputBox: {
    width:300,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  signupTextCont : {
    flexGrow: 1,
  alignItems:'flex-end',
  justifyContent :'center',
  paddingVertical:16,
  flexDirection:'row'
},
signupText: {
    color:'rgba(255,255,255,0.6)',
    fontSize:16
},
signupButton: {
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
}
});
export default Settings;