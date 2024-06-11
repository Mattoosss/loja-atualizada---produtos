import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    cardTarefa: {
      marginTop: 20,
      backgroundColor: '#222222',
      width: '100%',
      height: 140,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#111111',
      flexDirection: 'row',
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 6,
    },
    textoCard: {
      fontSize: 14,
      color: '#FFFFFF',
      marginTop: 8,
    },
    imagemCard: {
      width: 80,
      height: 80,
      marginRight: 20,
      borderRadius: 40,
      borderWidth: 2,
      borderColor: '#333333',
    },
    tituloCard: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
  });
  
  export default estilo;

