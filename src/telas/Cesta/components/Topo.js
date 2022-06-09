import React from "react";
import { StyleSheet, Image, Dimensions } from 'react-native'
import Texto from '../../../components/Texto'
import img from '../../../../assets/img_top.png'

const width = Dimensions.get('screen').width

export default function Topo() {
    return <> 
        <Image source={img} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhes da </Texto>
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
})