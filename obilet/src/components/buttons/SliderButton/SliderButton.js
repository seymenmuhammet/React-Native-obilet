import {Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from './SliderButton.styles.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SliderButton = ({theme = 'primary', textString, icon, press}) => {
  return (
    <Pressable onPress={press} style={styles[theme].container}>
      {icon ? (
        <MaterialCommunityIcons
          name={icon}
          style={styles[theme].iconS}></MaterialCommunityIcons>
      ) : null}

      <Text style={styles[theme].text}>{textString}</Text>
    </Pressable>
  );
};

export default SliderButton;
