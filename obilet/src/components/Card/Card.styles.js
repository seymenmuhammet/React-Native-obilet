import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  cardLogo: {
    height: 50,
    width: 120,
    backgroundColor: 'white',
  },
  cardIlkSatir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 10,
    paddingEnd: 10,
    marginBottom: 5,
  },
  cardSaat: {
    height: 50,
    width: 120,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  cardFiyat: {
    height: 50,
    width: 120,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  cardIkinciSatir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 10,
    paddingEnd: 10,
  },
  cardKoltuk: {
    height: 25,
    width: 120,
    backgroundColor: 'white',
  },
  cardSure: {
    height: 25,
    width: 120,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  cardUcuncuSatir: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 10,
    paddingEnd: 10,
  },
  cardNereden: {
    height: 25,
  },
  cardNereye: {
    height: 25,
    textAlign: 'center',
  },
  cardDorduncuSatir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 10,
    paddingEnd: 10,
  },
  cardIndirim: {
    height: 20,
    width: 120,
    backgroundColor: 'white',
  },
  cardOtoban: {
    height: 20,
    width: 120,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  cardIncele: {
    height: 20,
    width: 120,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  neredenNereyeDivider: {
    height: 0.8,
    width: '95%',
    borderTopColor: 'red',
    borderTopWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    marginEnd: 100,
  },
});

export default styles;
