import { useRoute } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


export default function CorrectFruits(props) {
    const route = useRoute()
    const PScreenNameFruits= route.params.data2
    const PScoreFruits= route.params.data1
    return (
        <View style={{backgroundColor:"lime", flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:100, color:"black", marginBottom:100}}> Correct answer! Good job!!</Text>
            <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:200, height:50,
  backgroundColor:"#013220"}} ><Text style={{color:"white", textAlign:"center", fontWeight: 'bold', fontSize:40}} onPress= {()=>{props.navigation.navigate(  PScreenNameFruits, {data1:PScoreFruits})}} >Next -{'>'}</Text></TouchableOpacity>
  <Text>{PScreenNameFruits}</Text>
  <Text>{PScoreFruits}</Text>
        </View>
    )
}