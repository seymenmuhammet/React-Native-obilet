import React, {useState} from 'react';
import {Text,View,Dimensions, Pressable, ScrollView,TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import styles from './ButtonsBar.styles'
import FilterButton from '../buttons/FilterButton/FilterButton';

const {width, height} = Dimensions.get('window');

const ButtonsBar = () => {
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [buttonTitle, setButtonTitle] = useState("SIRALA")
  const [bgclr, setBgclr] = useState("#d33b38")
  const [fntClr, setFntClr] = useState("white")

  const [showFiltreModal, setShowFiltreModal] = useState(false)

  const closeBtn = <MaterialCommunityIcons name="close" style={{margin:0,padding:0,color: 'white', fontSize: 20,}} />
  const siralaAktif = (buttonTitle==="Saate Göre" || buttonTitle==="Fiyata Göre")

  const orderIcon = <MaterialCommunityIcons name="order-alphabetical-ascending" style={{color: 'white', fontSize: 20,alignSelf:'center', marginRight:5,}} />
  const fiterIcon = <MaterialCommunityIcons name="filter" style={{color: 'white', fontSize: 20,alignSelf:'center', marginRight:5,}} />

  const siralaFunc = () => {
    setButtonsVisible(!buttonsVisible)
    if (buttonsVisible) {
      setButtonTitle("SIRALA")
      setBgclr("#d33b38")
      setFntClr("white")
    } else if (!buttonsVisible) {
      setButtonTitle(closeBtn)
      setBgclr("#d33b38")
      setFntClr("white")
    }
  }
  const siralaFunc2 = () => {
    setButtonTitle("SIRALA")
    setBgclr("#d33b38")
    setFntClr("white")
  }

  const saateGore = () => {
    setButtonTitle("Saate Göre")
    setBgclr("white")
    setFntClr("#d33b38")
    setButtonsVisible(false)
  }
  const fiyataGore = () => {
    setButtonTitle("Fiyata Göre")
    setBgclr("white")
    setFntClr("#d33b38")
    setButtonsVisible(false)
  }
  

  return (
    <View style={{flexDirection:'row'}}>
      <ScrollView horizontal >
      <Pressable onPress={siralaAktif ? siralaFunc2 : siralaFunc} style={{flexDirection:'row',minWidth:width/4,borderColor:'#d33b38',borderWidth:1,borderRadius:5,margin:5, paddingVertical:6,paddingHorizontal:15,backgroundColor:bgclr, justifyContent:'center',alignItems:'center'}}>
        {!buttonsVisible && !siralaAktif ? orderIcon : null}
        <Text style={{color:fntClr,fontSize:15}}>{buttonTitle}</Text>
        { (buttonTitle==="Saate Göre" || buttonTitle==="Fiyata Göre") &&
        <MaterialCommunityIcons name="close" style={{marginTop:2,marginLeft:5,color: '#d33b38', fontSize: 13,}} />
        }
      </Pressable>

{/* BUTTONS VISIBLE START */}
{ buttonsVisible &&  (
    <View style={{flexDirection:'row'}}>
        <Pressable onPress={saateGore} style={{borderWidth:1,borderColor:'gray',borderRadius:5,margin:5, paddingVertical:6,paddingHorizontal:15,backgroundColor:'white', justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#242526',fontSize:15}}>Saate Göre</Text>
        </Pressable>
        <Pressable onPress={fiyataGore} style={{borderWidth:1,borderColor:'gray',borderRadius:5,margin:5, paddingVertical:6,paddingHorizontal:15,backgroundColor:'white', justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#242526',fontSize:15}}>Fiyata Göre</Text>
        </Pressable>
    </View>
      )}  
{/* BUTTONS VISIBLE END */}

  <View style={{flexDirection:'row'}}>
    <Pressable onPress={() => setShowFiltreModal(!showFiltreModal)} style={{flexDirection:'row',minWidth:width/4,borderColor:'#d33b38',borderWidth:1,borderRadius:5,margin:5, paddingVertical:6,paddingHorizontal:15,backgroundColor:'#d33b38', justifyContent:'center',alignItems:'center'}}>
        {fiterIcon}
        <Text style={{color:"white",fontSize:15}}>FİLTRE</Text>
    </Pressable>

    <FilterButton press={() => Alert.alert("BASILDI")} title={"2+1"} />
    <FilterButton press={() => Alert.alert("BASILDI")} title={"Sabaha Karşı"} />
    <FilterButton press={() => Alert.alert("BASILDI")} title={"Sabah"} />
    <FilterButton press={() => Alert.alert("BASILDI")} title={"Öğle"} />
    <FilterButton press={() => Alert.alert("BASILDI")} title={"Akşam Gece"} />
    <FilterButton press={() => Alert.alert("BASILDI")} title={"Bağlayan Gece"} />

  </View>
  </ScrollView>


{/* FİLTRE MODAL START */}
<Modal
        isVisible={showFiltreModal}
        onBackButtonPress={() => setShowFiltreModal(!showFiltreModal)}
        onBackdropPress={() => setShowFiltreModal(!showFiltreModal)}
        statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
        style={styles.modal}>
        <View
          style={styles.modalContainer}>
          <View
            style={styles.modalContainer2}>
              <Pressable style={styles.clearButton} onPress={()=> Alert.alert("SIFIRLA Basıldı")}>
              <MaterialCommunityIcons
                name="rotate-3d-variant"
                style={styles.clearButtonIcon}></MaterialCommunityIcons>
                <Text style={styles.clearButtonText}> SIFIRLA</Text>
              </Pressable>
            <View style={styles.modalTitleContainer}>
              <MaterialCommunityIcons
                name="filter"
                style={styles.modalFilterIcon}></MaterialCommunityIcons>
              <Text style={styles.modalTitleText}>
                {' '}
                FİLTRE
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowFiltreModal(!showFiltreModal)}>
              <MaterialCommunityIcons
                name="close"
                style={styles.modalCloseIcon}></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
          <View style={styles.modalMain}>
            <Text style={styles.modalMainText}>FİLTRE ÖZELLİKLERİ BURAYA GELECEK</Text>
          </View>
        </View>
      </Modal>
{/* FİLTRE MODAL END */}


    </View>
  );
};
export default ButtonsBar;