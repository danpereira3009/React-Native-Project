import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native'
import Texto from '../../components/Texto'
import Topo from './components/Topo'
import logo from '../../../assets/logo.png'

export default function Cesta() {
    return <>
    <Topo />
    <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo} />
                <Texto style={estilos.local}>Jenny Jack Farm</Texto>
            </View>
        <Texto style={estilos.descricao}>Uma cesta de produtos selecionados</Texto>
        <Texto style={estilos.valor}>R$60,00</Texto>
    </View>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 46,
        color: "#464646",
        fontWeight: "bold"
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