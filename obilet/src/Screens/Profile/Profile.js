import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';

const Profile = ({navigation, route}) => {
  const {title} = route.params;
  const {values} = route.params;

  function rota(){
    if(values.userRota==0){
      values.userRota='gidis';
    }else if(values.userRota==1){
      values.userRota='donus';
    }else{
      values.userRota='gidis-donus';
    }
  }
  function gecis(){
    navigation.navigate(navigationStrings.EXPLORE, {});
  }
  rota();

  return (
    <View style={styles.container}>
      <Text>Bilet Bilgileri</Text>
      <View style={{padding: 30}}>
        <Button title="BILET BILGILERI" color="red" />
      </View>

      <Text>Yolcu Ad Soyad: {values.userName}</Text>
      <Text>Yolcu Tc Kimlik: {values.userTc}</Text>
      <Text>Nereden: {values.userNereden}</Text>
      <Text>Nereye: {values.userNereye}</Text>
      <Text>Rota: {values.userRota}</Text>
      <Button onPress={gecis} title="Bilet Sayfasina Gec" />
    </View>
  );
};
export default Profile;
