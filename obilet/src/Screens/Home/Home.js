import React, {useState} from 'react';
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import {Calendar} from 'react-native-calendars';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import allCities from '../../../src/cities.json';
import topCities from '../../../src/topCities.json';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  /* +++++++++++++++++++++++ USESTATE VALUES START +++++++++++++++++++++++ */
  const [showNeredenModal, setShowNeredenModal] = useState(false);
  const [showNereyeModal, setShowNereyeModal] = useState(false);
  const [showTarihModal, setShowTarihModal] = useState(false);
  const [nereden, setNereden] = useState('Ankara');
  const [nereye, setNereye] = useState('İstanbul');
  const [gidisTarihi, setGidisTarihi] = useState('Gidiş Tarihi Seçiniz');
  const [gidisTarihiWithDots, setGidisTarihiWithDots] = useState('');
  const [selectedToday, setSelectedToday] = useState(false);
  const [selectedTomorrow, setSelectedTomorrow] = useState(true);
  const [categes, setCateges] = useState([
    {
      vehicle_id: '0',
      vehicle_name: 'bus',
      name: 'Otobüs',
      backgroundcolor: 'white',
      color: 'black',
    },
    {
      vehicle_id: '1',
      vehicle_name: 'plane',
      name: 'Ucak',
      backgroundcolor: 'white',
      color: 'black',
    },
    {
      vehicle_id: '2',
      vehicle_name: 'hotel',
      name: 'Otel',
      backgroundcolor: 'white',
      color: 'black',
    },
    {
      vehicle_id: '3',
      vehicle_name: 'car',
      name: 'Araba',
      backgroundcolor: 'white',
      color: 'black',
    },
  ]);
  /* +++++++++++++++++++++++ USESTATE VALUES END +++++++++++++++++++++++ */

  /* +++++++++++++++++++++++ HEADERDAKİ BUTONLARIN ARKA PLAN DEĞİŞİMİ START +++++++++++++++++++++++ */
  const changeBackground = item => {
    let __categes = JSON.parse(JSON.stringify(categes));

    for (let x = 0; x < categes.length; x++) {
      if (categes[x].vehicle_id == item.vehicle_id) {
        __categes[x].backgroundcolor = '#d33b38';
        __categes[x].color = 'white';
        setCateges(__categes);
      } else {
        __categes[x].backgroundcolor = 'white';
        __categes[x].color = 'black';
        setCateges(__categes);
      }
    }
  };
  /* +++++++++++++++++++++++ HEADERDAKİ BUTONLARIN ARKA PLAN DEĞİŞİMİ END +++++++++++++++++++++++ */

  /* -------------------------- INFO VALUES FUNCTION START -------------------------- */
  function valuesFunc() {
    const values = {
        "userName": 'Elon Musk',
        "userTC": '20030042341',
        "nereden": nereden,
        "nereye": nereye,
        "gidisTarihi": gidisTarihiWithDots,
        "gidisTarihiString": gidisTarihi
    };
    navigation.navigate(navigationStrings.PROFILE, {values});
    console.log(values);
  }
  /* -------------------------- INFO VALUES FUNCTION END -------------------------- */

  /* ******************* RENDER NEREDEN START ******************* */
  const renderCitiesNereden = ({item}) => {
    return (
      <TouchableOpacity
        style={{padding: 10, borderBottomWidth: 1}}
        onPress={() => {
          setNereden(item.value);
          setShowNeredenModal(!showNeredenModal);
          console.log(item.value);
        }}>
        <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>
          {item.value}
        </Text>
      </TouchableOpacity>
    );
  };
  /* ******************* RENDER NEREDEN END ******************* */

  /* -------------------------- RENDER NEREYE START -------------------------- */
  const renderCitiesNereye = ({item}) => {
    return (
      <TouchableOpacity
        style={{padding: 10, borderBottomWidth: 1}}
        onPress={() => {
          setNereye(item.value);
          setShowNereyeModal(!showNereyeModal);
          console.log(item.value);
        }}>
        <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>
          {item.value}
        </Text>
      </TouchableOpacity>
    );
  };
  /* -------------------------- RENDER NEREYE END -------------------------- */

  /* ++++++++++++++++++++++++ DIGER DURAKLAR START ++++++++++++++++++++++++ */
  const digerDuraklar = nereden => {
    console.log('\n NEREDEN diger?: ', nereden);
    return (
      <View>
        <View style={{backgroundColor: 'lightgray', padding: 5}}>
          <Text style={{color: 'black', fontSize: 12}}>Diğer Duraklar</Text>
        </View>
        {nereden ? (
          <FlatList
            data={allCities['cities']}
            renderItem={renderCitiesNereden}
          />
        ) : (
          <FlatList
            data={allCities['cities']}
            renderItem={renderCitiesNereye}
          />
        )}
      </View>
    );
  };
  /* ++++++++++++++++++++++++ DIGER DURAKLAR END ++++++++++++++++++++++++ */

  /* -------------------------- EN COK KULLANILAN DURAKLAR START -------------------------- */
  const enCokKullanilanDuraklar = nereden => {
    console.log('\n NEREDEN encok?: ', nereden);
    return (
      <View>
        <View style={{backgroundColor: 'lightgray', padding: 5}}>
          <Text style={{color: 'black', fontSize: 12}}>
            En Çok Kullanılan Duraklar
          </Text>
        </View>
        {nereden ? (
          <FlatList
            data={topCities['cities']}
            renderItem={renderCitiesNereden}
          />
        ) : (
          <FlatList
            data={topCities['cities']}
            renderItem={renderCitiesNereye}
          />
        )}
      </View>
    );
  };

  /* -------------------------- EN COK KULLANILAN DURAKLAR END -------------------------- */

  const handleCalendarDate = day => {
    const dateString = day.dateString;
    const date = new Date(dateString);
    const options = {month: 'long', weekday: 'long'};
    const dateStringFormatted = date.toLocaleDateString('tr-TR', options);
    const dateAsString = day.day + ' ' + dateStringFormatted;
    const dateWithDots = `${('0' + day.day).slice(-2)}.${(
      '0' + day.month
    ).slice(-2)}.${day.year}`;
    setGidisTarihiWithDots(dateWithDots);
    setGidisTarihi(dateAsString);
    setShowTarihModal(false);
  };

  const handleDate = tomorrow => {
    const myDate = new Date();
    const day = myDate.getDate() + tomorrow;
    const month = myDate.getMonth();
    const month1 = myDate.getMonth() + 1;
    const year = myDate.getFullYear();
    const date = new Date(year, month, day);
    const options = {month: 'long', weekday: 'long'};
    const dateFormatted = day + ' ' + date.toLocaleDateString('tr-TR', options);
    const unformattedDate = `${('0' + day).slice(-2)}.${('0' + month1).slice(
      -2,
    )}.${year}`;
    setGidisTarihiWithDots(unformattedDate);
    setGidisTarihi(dateFormatted);
  };

  // _____  _   _  _______  ______  _____   ______             _____  ______
  // |_   _|| \ | ||__   __||  ____||  __ \ |  ____|    /\     / ____||  ____|
  //   | |  |  \| |   | |   | |__   | |__) || |__      /  \   | |     | |__
  //   | |  | . ` |   | |   |  __|  |  _  / |  __|    / /\ \  | |     |  __|
  //  _| |_ | |\  |   | |   | |____ | | \ \ | |      / ____ \ | |____ | |____
  // |_____||_| \_|   |_|   |______||_|  \_\|_|     /_/    \_\ \_____||______|

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="#d33b38" />

      {/* ******************* BANNER START ******************* */}
      <View style={styles.headerBack}>
        <Text style={styles.headerFirst}>biletara.</Text>
        <Text style={styles.headerSecond}>com</Text>
      </View>
      {/* ******************* BANNER END ******************* */}

      {/* ******************* BUTTONS START ******************* */}
      <View style={styles.buttons}>
        {categes.map((item, key) => (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              width: 80,
              height: 50,
              marginEnd: 'auto',
              backgroundColor: item.backgroundcolor,
            }}
            onPress={() => changeBackground(item)}>
            <Text>
              <FontAwesome
                name={item.vehicle_name}
                style={{color: 'black', fontSize: 27}}></FontAwesome>
            </Text>
            <Text style={{fontSize: 15, color: item.color}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* ******************* BUTTONS END ******************* */}

      {/*****************
       ****HOME START*****
       *****************/}
      <View style={styles.homeBack}>
        {/* NEREDEN NEREYE CARD START */}
        <View style={styles.card}>
          <Text style={styles.neredenNereyeTitle}>NEREDEN</Text>
          <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => setShowNeredenModal(true)}>
            <Text style={styles.neredenNereyeSecimText}>{nereden}</Text>
          </TouchableOpacity>

          <View style={styles.neredenNereyeDivider} />

          <Text style={styles.neredenNereyeTitle}>NEREYE</Text>
          <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => setShowNereyeModal(true)}>
            <Text style={styles.neredenNereyeSecimText}>{nereye}</Text>
          </TouchableOpacity>
        </View>
        {/* NEREDEN NEREYE CARD END */}

        {/* GİDİŞ TARİHİ CARD START */}
        <View style={styles.card}>
          <Text style={styles.gidisTarihiTitle}> Gidis Tarihi: </Text>

          <TouchableOpacity style={{}} onPress={() => setShowTarihModal(true)}>
            <Text style={styles.gidisTarihiTextValue}>{gidisTarihi}</Text>
          </TouchableOpacity>

          <View style={styles.gidisTarihiDivider} />

          <View style={styles.calendarButtons}>
            <Pressable
              style={{
                borderWidth: 1,
                width: 80,
                borderRadius: 8,
                backgroundColor: selectedToday ? 'red' : 'transparent',
              }}
              title="Bugün"
              onPress={() => {
                handleDate(parseInt('0'));
                if (selectedToday == false) {
                  setSelectedToday(true);
                  setSelectedTomorrow(false);
                }
              }}>
              <Text
                style={{
                  fontSize: 15,
                  margin: 6,
                  textAlign: 'center',
                  color: 'black',
                }}>
                Bugün
              </Text>
            </Pressable>

            <Pressable
              style={{
                marginStart: 20,
                borderWidth: 1,
                width: 80,
                borderRadius: 8,
                textAlign: 'center',
                backgroundColor: selectedTomorrow ? 'red' : 'transparent',
              }}
              title="Yarın"
              onPress={() => {
                handleDate(parseInt('1'));
                if (selectedTomorrow == false) {
                  setSelectedTomorrow(true);
                  setSelectedToday(false);
                }
              }}>
              <Text
                style={{
                  fontSize: 15,
                  margin: 6,
                  textAlign: 'center',
                  color: 'black',
                }}>
                Yarın
              </Text>
            </Pressable>
          </View>
        </View>
        {/* GİDİŞ TARİHİ CARD END */}

        {/* ******************* BİLETBUL BUTTON START ******************* */}
        <Pressable onPress={valuesFunc} style={styles.biletBulButton}>
          <Text style={styles.biletBulButtonText}>Otobüs Bileti Bul</Text>
        </Pressable>
        {/* ******************* BİLETBUL BUTTON END ******************* */}

        {/* ******************* FOOTER START ******************* */}
        <Text style={styles.footerText}>
          Kesintisiz İade Hakkı ve 0 Komisyon
        </Text>
        {/* ******************* FOOTER END ******************* */}
      </View>

      {/*****************
       ******HOME END*****
       *****************/}

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

      {/* ******************* NEREDEN MODAL START ******************* */}
      <Modal
        isVisible={showNeredenModal}
        onBackButtonPress={() => setShowNeredenModal(!showNeredenModal)}
        onBackdropPress={() => setShowNeredenModal(!showNeredenModal)}
        statusBarTranslucent={false}
        animationType="fade"
        transparent={false}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'green',
          margin: 0,
          justifyContent: 'flex-start',
        }}>
        <View style={{backgroundColor: '#bb1111', flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 11,
                fontWeight: '600',
                marginLeft: 15,
                marginTop: 10,
              }}>
              NEREDEN
            </Text>
            <TouchableOpacity
              onPress={() => setShowNeredenModal(!showNeredenModal)}>
              <MaterialCommunityIcons
                name="close"
                style={{
                  color: 'white',
                  fontSize: 26,
                  marginTop: 10,
                  marginRight: 6,
                }}></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 15,
              padding: 0,
              borderRadius: 4,
            }}>
            <TextInput
              placeholder="İl veya ilçe adı yazın"
              style={{flex: 1, borderRadius: 5, padding: 5, paddingLeft: 15}}
            />
            <MaterialCommunityIcons
              name="magnify"
              style={{
                color: 'gray',
                fontSize: 21,
                marginTop: 3,
                marginRight: 6,
              }}></MaterialCommunityIcons>
          </View>
          <FlatList
            ListHeaderComponent={() => enCokKullanilanDuraklar(parseInt('1'))}
            ListFooterComponent={() => digerDuraklar(parseInt('1'))}
            style={{backgroundColor: 'white', flex: 1}}
          />
        </View>
      </Modal>
      {/* ******************* NEREDEN MODAL END ******************* */}

      {/* ******************* NEREYE MODAL START ******************* */}
      <Modal
        isVisible={showNereyeModal}
        onBackButtonPress={() => setShowNereyeModal(!showNereyeModal)}
        onBackdropPress={() => setShowNereyeModal(!showNereyeModal)}
        statusBarTranslucent={false}
        animationType="fade"
        transparent={false}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'green',
          margin: 0,
          justifyContent: 'flex-start',
        }}>
        <View style={{backgroundColor: '#bb1111', flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 11,
                fontWeight: '600',
                marginLeft: 15,
                marginTop: 10,
              }}>
              NEREYE
            </Text>
            <TouchableOpacity
              onPress={() => setShowNereyeModal(!showNereyeModal)}>
              <MaterialCommunityIcons
                name="close"
                style={{
                  color: 'white',
                  fontSize: 26,
                  marginTop: 10,
                  marginRight: 6,
                }}></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 15,
              padding: 0,
              borderRadius: 4,
            }}>
            <TextInput
              placeholder="İl veya ilçe adı yazın"
              style={{flex: 1, borderRadius: 5, padding: 5, paddingLeft: 15}}
            />
            <MaterialCommunityIcons
              name="magnify"
              style={{
                color: 'gray',
                fontSize: 21,
                marginTop: 3,
                marginRight: 6,
              }}></MaterialCommunityIcons>
          </View>
          <FlatList
            ListHeaderComponent={() => enCokKullanilanDuraklar(parseInt('0'))}
            ListFooterComponent={() => digerDuraklar(parseInt('0'))}
            style={{backgroundColor: 'white', flex: 1}}
          />
        </View>
      </Modal>
      {/* ******************* NEREYE MODAL END ******************* */}
    </View> //container
  );
};
export default Home;
