import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Details() {
  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={estilo.container}>
      <View style={estilo.card}>
        <Text style={estilo.texto}>{route.params.porcentagem}</Text>
      </View>
      <View style={estilo.card}>
        <Text style={estilo.titulo}>{route.params.titulo}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={{ uri: route.params.imagem }} style={estilo.imagem} />
        </TouchableOpacity>
        <Text style={estilo.texto}>{route.params.descricao}</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={estilo.modalContainer}>
          <View style={estilo.modalContent}>
            <Image source={{ uri: route.params.imagem }} style={estilo.modalImagem} />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={estilo.closeButton}>
              <Text style={estilo.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212', // Fundo escuro
    padding: 20,
  },
  card: {
    backgroundColor: '#1E1E1E', // Fundo mais escuro
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF', // Texto branco
  },
  texto: {
    fontSize: 16,
    color: '#CCCCCC', // Texto cinza claro
    marginBottom: 10,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo escuro com transparência
  },
  modalContent: {
    backgroundColor: '#1E1E1E', // Fundo mais escuro
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  modalImagem: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FF6347', // Botão de fechar em vermelho
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#FFFFFF', // Texto branco
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
  