import { View, StyleSheet } from 'react-native';

import Box from './componets/Box';

const App = () => (
  <View style={[styles.conteiner, styles.flexDirection]}>
    <Box color="red" size={50}>
      
    </Box>
    <Box color="green" size={50}>
     
    </Box>
    <Box color="blue" size={50}></Box>
  </View>

);

const styles= StyleSheet.create ({

  conteiner:{
    flex:1,
    backgroundColor: 'aliceblue',
  },

  flexColunm:{
    flexDirection: 'colunm',

  },

  flexRow:{
    flexDirection:'row'
  },

  flexColunmReverse:{
  flexDirection: 'colunm-reverse',
  },

  flexRowReverse:{
    flexDirection: 'row-reverse',
  },

  justifyStart:{
    justifyContent :'flex-start',
  },

  justifyCenter:{
    justifyContent :'center',
    },

  justifyEnd:{
    justifyContent :'flex-end',
    },

  justifySpaceBetween:{
    justifyContent: 'Between',
  },

  justifySpaceAround:{
    justifyContent:'space-aroud',
  },

  justifyEvenly:{
    justifyContent:'space-evenly',
  },

  alingStar:{
    alignItems: 'flex-star',
  },

  alignCenter: {
    alignItems:'center',
  },

  alingEnd:{
    alignItems:'flex-end',
  },

  alignStretch:{
    alignItems:'strech',
  },


});

export default App;
