import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import ROTINAS from '../../data/index';

export default function Home() {
  return (
    <View style={estilo.container}>
      <Header></Header>
     <View style = {{width:'100%'}}>
      <FlatList 
      data = {ROTINAS}
      horizontal ={true}
      keyExtractor = {(item)=>item.id}
      renderItem = {({item}) => (

        <Card 
        titulo = {item.titulo}
        descricao = {item.Descricao}
        porcentagem = {item.porcentagem}
        imagem ={item.imagem}
        
        />

      )}
      
      
      /> 
      </View>     






  
      
     
      
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 40,
  }
});
