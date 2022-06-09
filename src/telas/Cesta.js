import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native'
import Texto from '../components/Texto'
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Cesta() {
    return <>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>Detalhes da </Texto>
    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                
                <Image style={estilos.imagemFazenda} source={logo} />
                <Text style={estilos.local}>Jenny Jack Farm</Text>

            </View>
        <Texto style={estilos.descricao}>Uma cesta de produtos selecionados</Texto>
        <Text style={estilos.valor}>R$40,00</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        color: "white",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold"
    },

    nome: {
        fontSize: 26,
        lineHeight: 46,
        color: "#464646",
        fontFamily: "MontserratBold"
    },

    local: {
        fontSize: 20,
        lineHeight: 26,
        fontFamily: "MontserratRegular"
    },

    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },

    imagemFazenda: {
        width: 32,
        height: 32,
        marginRight: 16
    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    valor: {
        color: "#2A9F85",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 42,
        marginTop: 8
    }
})