import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.styles';

const Card = props => {
  return (
    <View style={styles.cardView}>
      <View style={styles.cardIlkSatir}>
        <Image style={styles.cardLogo} source={{uri:props.logo}}/>
        <Text style={styles.cardSaat}>{props.saat}</Text>
        <Text style={styles.cardFiyat}>{props.fiyat}</Text>
      </View>
      <View style={styles.cardIkinciSatir}>
        <Text style={styles.cardKoltuk}>{props.koltuk}</Text>
        <Text style={styles.cardSure}>{props.sure}</Text>
        <Text style={{width: '33%', textAlign: 'center'}}></Text>
      </View>
      <View style={styles.cardUcuncuSatir}>
        <Text style={styles.cardNereden}>{props.nereden} {'>'}</Text>
        <Text style={styles.cardNereye}> {props.nereye}</Text>
      </View>
      <View style={styles.neredenNereyeDivider} />
      <View style={styles.cardDorduncuSatir}>
        <Text style={styles.cardIndirim}>{props.indirimKodu}</Text>
        <Text style={styles.cardOtoban}>{props.otoban}</Text>
        <Text style={styles.cardIncele}>{props.incele}</Text>
      </View>
    </View>
  );
};

export default Card;
