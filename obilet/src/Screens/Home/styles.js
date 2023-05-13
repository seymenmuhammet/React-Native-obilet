import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  headerBack: {
    flex: 1,
    backgroundColor: '#d33b38',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerFirst: {
    marginTop: 20,
    color: '#FAFAFA',
    fontWeight: 'bold',
    fontSize: 35,
  },
  headerSecond: {
    marginTop: 20,
    color: '#FAFAFA',
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
    paddingTop:8,
  },
  buttonsOpac: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 66,
    height: 50,
  },
  homeBack: {
    flex: 7,
    backgroundColor: '#FAFAFA',
  },
  navigationBack: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 5,
  },
  footerText: {
    textAlign: 'center',
    color: '#AFADAE',
    marginTop: 5,
    fontWeight: '600',
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
    borderColor: '#f0f0f0',
    margin: 15,
    marginBottom:10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  calendarButtons: {
    flexDirection: 'row',
    marginBottom: 10,
    marginStart: 20,
  },
  today: {
    borderWidth: 1,
    width: 80,
    borderRadius:8
  },
  tomorrow: {
    marginStart: 20,
    width: 80,
    backgroundColor:'#d33b38',
    borderRadius:8
  },
  neredenNereyeDivider: {
    height: 0.8,
    width: '90%',
    borderTopColor: '#f0f0f0',
    borderTopWidth: 1,
    marginHorizontal: 10,
  },
  neredenNereyeSecimText: {
    fontWeight: '400',
    color: 'black',
    marginVertical: 8,
  },
  neredenNereyeTitle: {
    marginStart: 15,
    marginTop: 5,
    color: '#d33b38',
    fontWeight: 'bold',
    letterSpacing:0.8
  },
  gidisTarihiTitle: {
    margin: 10,
  },
  gidisTarihiTextValue: {
    margin:10,
    fontWeight:'400',
    color:'black',
    fontSize:20,

  },
  gidisTarihiDivider: {
    height: 0.8,
    width: '90%',
    borderTopColor: '#f0f0f0',
    borderTopWidth: 1,
    margin:10
  },
  biletBulButtonContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  biletBulButton: {
    flex:1,
    maxHeight:50,
    width:"80%",
    backgroundColor:'#0bb286',
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  biletBulButtonText: {
    color:'white',
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'
  },







});

export default styles;
