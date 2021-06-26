import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image: {
     width: '100%',
     height: 200,
     aspectRatio: 16/9,
     resizeMode: 'cover',
},
  pads: {
    padding: 12
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  match: {
    color: 'green',
    fontWeight: 'bold',
    marginRight: 5
  },
  year: {
    color: '#757575',
    marginRight: 5
  },
  ageContainer: {
    backgroundColor: '#e6e229',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 3,
    borderRadius: 2,
    marginRight: 5
  },
  age: {
    fontWeight: 'bold',
    color: 'black'
  },
  playButton: {
      backgroundColor: '#afcbf0',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 3,
      marginVertical: 2
  },
  playButtonText: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold'
  },
  downloadButton: {
    backgroundColor: '#8b9199',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 2,
  },
  downloadButtonText:{
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
  }
})

export default styles;  