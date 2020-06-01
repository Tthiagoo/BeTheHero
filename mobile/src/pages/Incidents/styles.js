import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: Constants.statusBarHeight + 25
  },
  header: {
    flexDirection: 'row', //Direção em q fica os elementos da tela, no caso da web por padrão eles sempre ficam um do lado do outro
    //ja no mobile, é preciso dizer "row" para isso acontecer
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 30,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 20,
    color: '#737380'
  },

  incidentList: {
    marginTop: 20
  },

  incident: {
    padding: 25,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 16,
    color: '#41414d',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 6,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },

})