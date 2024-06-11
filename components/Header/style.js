import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  subtitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  tituloCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default estilo;
