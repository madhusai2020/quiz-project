import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function OneQuestion(props) {
  const ScreenNameBasketball = 'TwoQuestion'

  const [ScoreBasketball, setScoreBasketball] = useState(0)
  function CorrectBasketball (){
    setScoreBasketball(ScoreBasketball + 5)
  }
  function WrongBasketball(){
    setScoreBasketball (ScoreBasketball + 0)
  }
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Basketball Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>What is term for passing a basketball to a teammate called?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/1159659055/photo/high-school-basketball-game.jpg?s=612x612&w=0&k=20&c=eqc4czKTXf_ACQaSawBs_Tuc8Fcr4sHSOr6mKVUuoMc="}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>{WrongBasketball();props.navigation.navigate('WrongScreen', {data1:ScoreBasketball, data2:ScreenNameBasketball})}}><Text style={{fontSize:40}}>Pass</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>{WrongBasketball();props.navigation.navigate('WrongScreen', {data1:ScoreBasketball, data2:ScreenNameBasketball})}}><Text style={{ fontSize:40}}>Basketball Pass</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>{CorrectBasketball();props.navigation.navigate('CorrectScreen', {data1:ScoreBasketball, data2:ScreenNameBasketball})}}><Text style={{fontSize:40}}>Assist</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>{WrongBasketball();props.navigation.navigate('WrongScreen', {data1:ScoreBasketball, data2:ScreenNameBasketball})}}><Text style={{ fontSize:40}}>Pass Ball</Text></TouchableOpacity>
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

