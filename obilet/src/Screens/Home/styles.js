import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBack: {
    flex: 1,
    backgroundColor: '#FF2E2E',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerFirst: {
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },
  headerSecond: {
    marginTop: 20,
    color: 'white',
    fontSize: 35,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    marginStart: 30,
    marginEnd: 30,
    marginTop: -25,
  },
  buttonsOpac: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 66,
    height: 50,
  },
  cars: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  carsButton: {
    margin: 3,
  },
  homeBack: {
    flex: 7,
    backgroundColor: 'white',
  },
  navigationBack: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 5,
  },
  navigationButton: {
    margin: 10,
  },
  nav: {
    flex: 1,
    backgroundColor: 'red',
  },
  navigationText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 20,
  },
  calendarButton: {
    flexDirection: 'row',
    marginBottom: 10,
    marginStart: 20,
    backgroundColor: 'red',
  },
  today: {
    borderWidth: 1,
    width: 80,
  },
  tomorrow: {
    marginStart: 20,
    borderWidth: 1,
    width: 80,
  },
  deneme: {
    marginStart: 50,
    marginEnd: 50,
  },
});

export default styles;
