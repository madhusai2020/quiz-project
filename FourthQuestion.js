import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export default function FourthQuestion(props) {
    return (
        <View style={{alignItems:"center", justifyContent:"center"}}>
            
        <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Spanish Quiz</Text>
        <Text style={{fontSize:50, marginBottom:30}}>How do you say "I like food" in Spanish?</Text>
        <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://i.pinimg.com/736x/26/bb/54/26bb54150f0c4e7fa39f3f8b2fdec295.jpg"}}></Image>
      <View style={{flexDirection:"row", marginBottom:100 }}>  
      <TouchableOpacity style={{height:90, width:300, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{fontSize:30}}>Comida like</Text></TouchableOpacity>
        <TouchableOpacity style={{height:90, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{ fontSize:40}}>J'aime la nourriture</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", marginTop:100, marginBottom:50 }}>  
      <TouchableOpacity style={{height:90, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('CorrectScreen')}><Text style={{fontSize:30}}>Me gusta la comida.</Text></TouchableOpacity>
        <TouchableOpacity style={{height:90, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{ fontSize:40}}>No me gusta la comida</Text></TouchableOpacity>
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