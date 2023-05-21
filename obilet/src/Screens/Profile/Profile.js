import React, { useEffect, useState } from 'react';
import {View, Text, Pressable, StatusBar, Dimensions, TouchableOpacity} from 'react-native';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonsBar from '../../components/ButtonsBar/ButtonsBar';
import Modal from 'react-native-modal';
import {Calendar} from 'react-native-calendars';

const {width, height} = Dimensions.get('window');

const darkRed = "#d33b38"

const Profile = ({navigation, route}) => {

  
  
  const {title} = route.params;
  const {values} = route.params;
  console.log("VALUES: ", values)
  
  const [showTarihModal, setShowTarihModal] = useState(false);
  const [gidisTarihi, setGidisTarihi] = useState(values.gidisTarihiString);
  const [gidisTarihiWithDots, setGidisTarihiWithDots] = useState(values.gidisTarihi);
  
  console.log("GIDIS TARİHİ DOTS: ", gidisTarihiWithDots)

  const handleCalendarDate = day => {
    const dateString = day.dateString;
    const date = new Date(dateString);
    const options = {month: 'long', weekday: 'long'};
    const dateStringFormatted = date.toLocaleDateString('tr-TR', options);
    const dateAsString = day.day + ' ' + dateStringFormatted;
    const dateWithDots = `${('0' + day.day).slice(-2)}.${('0' + day.month).slice(-2)}.${day.year}`;
    setGidisTarihiWithDots(dateWithDots);
    setGidisTarihi(dateAsString);
    setShowTarihModal(false);
  };



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
        <Pressable style={styles.navButtonContainer} onPress={() => console.log("handle önceki")}>
          <View style={styles.navButtonTextContainer}>
            <Text style={styles.navButtonText}>&lt; Önceki</Text>
          </View>
        </Pressable>
        {/* ÖNCEKİ BUTTON END */}

        {/* TARİH BUTTON START */}
        <Pressable onPress={() => setShowTarihModal(!showTarihModal)}
          style={styles.datePickerContainer}>
          <MaterialCommunityIcons name="calendar-month-outline" style={styles.datePickerIcon}></MaterialCommunityIcons>
          <View
            style={styles.datePickerTextContainer}>
            <Text style={styles.gidisTarihiText}>{gidisTarihi}</Text>
          </View>
        </Pressable>
        {/* TARİH BUTTON END */}

        {/* SONRAKI BUTTON START */}
        <Pressable style={styles.navButtonContainer} onPress={() => console.log("handle Sonraki")}>
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

      {/* ******************* TARİH MODAL START ******************* */}
      <Modal
        isVisible={showTarihModal}
        onBackButtonPress={() => setShowTarihModal(!showTarihModal)}
        onBackdropPress={() => setShowTarihModal(!showTarihModal)}
        statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
        style={{
          width: width,
          height: height / 2,
          margin: 0,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{width: width, height: height / 2, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: '#d33b38',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="calendar"
                style={{color: 'white', fontSize: 19}}></MaterialCommunityIcons>
              <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
                {' '}
                GİDİŞ TARİHİ
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowTarihModal(!showTarihModal)}>
              <MaterialCommunityIcons
                name="close"
                style={{color: 'white', fontSize: 28}}></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
          <View>
            <Calendar
              style={{borderRadius: 10, elevation: 4, margin: 0}}
              onDayPress={handleCalendarDate}
            />
          </View>
        </View>
      </Modal>
      {/* ******************* TARİH MODAL END ******************* */}


    </View>
  );
};
export default Profile;