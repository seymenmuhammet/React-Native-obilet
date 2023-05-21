import React from 'react';
import {View, Text, StyleSheet, Pressable, StatusBar} from 'react-native';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonsBar from '../../components/ButtonsBar/ButtonsBar';


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

  return(
    <View style={styles.container}>


    <StatusBar backgroundColor="#d33b38" />
      
      <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',}}>

          <Text style={{color:'white',margin:8,fontSize:19}}>{values.nereden}</Text>
          <View style={{borderWidth:1,borderColor:'white', borderRadius:5,padding:1}}>
            <MaterialIcons
                  name="compare-arrows"
                  style={{color: 'white', fontSize: 19,alignSelf:'center',}}>
            </MaterialIcons>
            </View>
          
          <Text style={{color:'white',margin:8,fontSize:19}}>{values.nereye}</Text>
      </View>
      
      <View style={{flexDirection:'row',margin:10,justifyContent:'space-around',}}>

{/* ÖNCEKİ BUTTON START */}
        <Pressable style={{margin:5,borderWidth:1,paddingVertical:5,paddingHorizontal:20,borderRadius:8,borderColor:'white',width:"25%"}}>
          <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text style={{color:'white',padding:0,margin:0}}>&lt; Önceki</Text>
          </View>
          </Pressable>
{/* ÖNCEKİ BUTTON END */}

{/* TARİH BUTTON START */}
        <Pressable style={{flexDirection:'row',flex:1,margin:5,borderWidth:1,padding:5,borderRadius:8,borderColor:'white',alignItems:'center',justifyContent:'space-between',}}>
        <MaterialCommunityIcons
                  name="calendar-month-outline"
                  style={{color: 'white', fontSize: 19,alignSelf:'center',}}>
            </MaterialCommunityIcons>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
              <Text style={{color:'white',}}>
                {values.gidisTarihiString}
              </Text>
            </View>
          </Pressable>
{/* TARİH BUTTON END */}

{/* SONRAKI BUTTON START */}
        <Pressable style={{margin:5,borderWidth:1,paddingVertical:5,paddingHorizontal:20,borderRadius:8,borderColor:'white',width:"25%"}}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text style={{color:'white',padding:0,margin:0}}>Sonraki &gt;</Text>
          </View>
          </Pressable>
        </View>
{/* SONRAKI BUTTON END */}
        

        <View style={{backgroundColor:'white',flexDirection:'row',padding:5}}>
          <ButtonsBar />
        </View>

    </View>
  );
};
export default Profile;