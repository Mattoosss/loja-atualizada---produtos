import {View, Text} from 'react-native'
import estilo from './style'

export default function Header(){
    return(
        <>
            <Text style={estilo.titulo}>VMK STORE</Text>
            <Text style={estilo.subtitulo}>Seja Bem-Vindo a nossa loja!</Text>
             <View style={{width:'95%', flexDirection: 'row', marginTop: 20, alignItems:'center', justifyContent:"space-between" }}>
            <Text style={estilo.tituloCard}>Produtos</Text>

            </View>

        </>
    )
}