import React from 'react';
import {View, Text, Pressable, StatusBar} from 'react-native';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonsBar from '../../components/ButtonsBar/ButtonsBar';

const darkRed = "#d33b38"

const Profile = ({navigation, route}) => {

  const {title} = route.params;
  const {values} = route.params;
  console.log("VALUES: ", values)

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
      <StatusBar backgroundColor={darkRed} />

      <View style={styles.fromToContainer}>
        <Text style={styles.fromText}>{values.nereden}</Text>
        <View style={styles.fromToIconContainer}>
          <MaterialIcons
            name="compare-arrows"
            style={styles.fromToIcon}></MaterialIcons>
        </View>

        <Text style={styles.toText}>{values.nereye}</Text>
      </View>

      <View style={styles.changeDateNavbar}>
        {/* ÖNCEKİ BUTTON START */}
        <Pressable style={styles.navButtonContainer}>
          <View style={styles.navButtonTextContainer}>
            <Text style={styles.navButtonText}>&lt; Önceki</Text>
          </View>
        </Pressable>
        {/* ÖNCEKİ BUTTON END */}

        {/* TARİH BUTTON START */}
        <Pressable
          style={styles.datePickerContainer}>
          <MaterialCommunityIcons name="calendar-month-outline" style={styles.datePickerIcon}></MaterialCommunityIcons>
          <View
            style={styles.datePickerTextContainer}>
            <Text style={styles.gidisTarihiText}>{values.gidisTarihiString}</Text>
          </View>
        </Pressable>
        {/* TARİH BUTTON END */}

        {/* SONRAKI BUTTON START */}
        <Pressable style={styles.navButtonContainer}>
          <View style={styles.navButtonTextContainer}>
            <Text style={styles.navButtonText}>Sonraki &gt;</Text>
          </View>
        </Pressable>
      </View>
      {/* SONRAKI BUTTON END */}

      <View
        style={styles.buttonsBarContainer}>
        <ButtonsBar />
      </View>
    </View>
  );
};
export default Profile;