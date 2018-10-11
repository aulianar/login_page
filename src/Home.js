import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.biru}>SELAMAT DATANG AULIANA!</Text>
        <Text>Nama: Auliana Rizky Puspita Dewi </Text>
        <Text>Kelas: XI_RPL 2 </Text>
        <Text>No.Absen: 11 </Text>
        <Image style={{width: 400, height:500}}
        source={require('./fotoaku.jpg')}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    biru: {
      color: '#6E7F9E',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 40,
    }
});

export default Home