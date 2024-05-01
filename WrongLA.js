import { useRoute } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


export default function WrongScreenMath(props) {
    const route = useRoute()
    const PScreenNameLA= route.params.data2
    const PScoreLA= route.params.data1
    return (
        <View style={{backgroundColor:"red", flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:100, color:"black", marginBottom:100}}> Wrong answer! Keep going!!</Text>
            <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:200, height:50,
  backgroundColor:"pink"}} ><Text style={{color:"black", textAlign:"center",  fontSize:40, fontWeight:90}} onPress= {()=>{props.navigation.navigate(PScreenNameLA, {data1:PScoreLA})}} >Next -{'>'}</Text></TouchableOpacity>
  <Text>{PScreenNameLA}</Text>
  <Text>{PScoreLA}</Text>
        </View>
    )
}
