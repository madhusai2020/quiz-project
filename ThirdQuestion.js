import { useRoute } from '@react-navigation/core'
import React, {useState} from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'

export default function ThirdQuestion(props) {


    return (
        <View style={{alignItems:"center", justifyContent:"center"}}>
            
        <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Spanish Quiz</Text>
        <Text style={{fontSize:50, marginBottom:30}}>How do you say "What is your name?" in Spanish?</Text>
        <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://i.pinimg.com/736x/26/bb/54/26bb54150f0c4e7fa39f3f8b2fdec295.jpg"}}></Image>
      <View style={{flexDirection:"row", marginBottom:100 }}>  
      <TouchableOpacity style={{height:100, width:400, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen',{data2:'FourthQuestion'})}><Text style={{fontSize:30}}>What is your name</Text></TouchableOpacity>
        <TouchableOpacity style={{height:100, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1305}} onPress={()=>props.navigation.navigate('WrongScreen',{data2:'FourthQuestion'})}><Text style={{ fontSize:40}}>Comment vous appelez-vous</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", marginTop:100, marginBottom:50 }}>  
      <TouchableOpacity style={{height:100, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('CorrectScreen',{data2:'FourthQuestion'})}><Text style={{fontSize:30}}>Cómo te llamas?</Text></TouchableOpacity>
        <TouchableOpacity style={{height:100, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1305}} onPress={()=>props.navigation.navigate('WrongScreen',{data2:'FourthQuestion'})}><Text style={{ fontSize:40}}>Llamas te?</Text></TouchableOpacity>
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
