import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function ThreeQuestion(props) {
  
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Basketball Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>Bonus NBA Question: Who has the most blocks in NBA history?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://t4.ftcdn.net/jpg/04/23/14/25/360_F_423142507_FsZUpYT6eamfNgyPxRlezjyx8eV1tlXz.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('CorrectScreen')}><Text style={{fontSize:40}}>Hakeem Olajuwon</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{ fontSize:40}}>Dikembe Mutumbo</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{fontSize:40}}>Lebron James</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{ fontSize:40}}>Kareem Abdul Jabbar</Text></TouchableOpacity>
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

