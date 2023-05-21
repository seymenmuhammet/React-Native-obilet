import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d33b38',
  },
  fromToContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fromText: {
    color: 'white',
    margin: 8,
    fontSize: 19,
  },
  fromToIconContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 1,
  },
  fromToIcon: {
    color: 'white',
    fontSize: 19,
    alignSelf: 'center',
  },
  toText: {
    color: 'white',
    margin: 8,
    fontSize: 19,
  },
  changeDateNavbar: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
  },
  navButtonContainer: {
    margin: 5,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: 'white',
    width: '25%',
  },
  navButtonTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  navButtonText: {
    color: 'white',
    padding: 0,
    margin: 0,
  },
  datePickerContainer: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePickerIcon: {
    color: 'white',
    fontSize: 19,
    alignSelf: 'center',
  },
  gidisTarihiText: {
    color: 'white',
  },
  datePickerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonsBarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
},

});

export default styles;
