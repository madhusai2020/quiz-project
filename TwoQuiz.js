import { useRoute } from '@react-navigation/core'
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function TwoQuiz(props) {
  const route = useRoute();
  const [PScoreScience, setPScoreScience]=useState(route.params.data1);
  
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Science Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>How many colors are in the rainbow?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://easydrawingguides.com/wp-content/uploads/2017/10/how-to-draw-a-rainbow-featured-image-1200.png"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:150, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreenScience', {data2:'ThreeQuiz'})}><Text style={{fontSize:40}}>6</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:2000}} onPress={()=>props.navigation.navigate('CorrectScreen', {data2:'ThreeQuiz'} )}><Text style={{ fontSize:40}}>7</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:150, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreenScience', {data2:'ThreeQuiz'})}><Text style={{fontSize:40}}>8</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:150, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:2050}} onPress={()=>props.navigation.navigate('WrongScreenScience', {data2:'ThreeQuiz'})}><Text style={{ fontSize:40}}>9</Text></TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={{ paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:200, height:60,
  backgroundColor:"pink" }} 
   onPress={()=>props.navigation.navigate('NewScreen')}
  >
    
  
    <Text style={{color:"black", fontSize:40,fontWeight:"90", marginLeft:10, alignItems:"center"}}>Next -{'>'}</Text></TouchableOpacity>
            </View>
        </View>
    )
}