import React  from 'react'
import { Text, View, TouchableOpacity,TextInput} from 'react-native'



export default function Catalog(props) {
    
        return (
            <View>
                
                <Text style={{textAlign:"center", fontSize: 50, marginBottom:80, color:"black"}}>Catalog</Text>
                <TextInput style={{borderWidth:2, width:300, alignSelf:"center", marginBottom:40, paddingLeft:20, borderRadius:15, height:30}} placeholder="Search"></TextInput>
                <View style={{flexDirection:"row", marginBottom:20, borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50, justifyContent:"center"}}>
                    <View>
                <Text style={{fontSize:20}}>1) Language</Text>
                </View>
                <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:80, height:30,
  backgroundColor:"lime", color:"black", fontSize:20, marginLeft:120}} onPress={()=>props.navigation.navigate('Quizzes')} >View</TouchableOpacity>
             </View>
             <View style={{flexDirection:"row", marginBottom:20, borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50, justifyContent:"center"}}>
                    <View>
                <Text style={{fontSize:20}}>2) Math</Text>
                </View>
                <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:80, height:30,
  backgroundColor:"lime", color:"black", fontSize:20, marginLeft:155}} onPress={()=>props.navigation.navigate('MathQuiz')} >View</TouchableOpacity>
             </View>
             <View style={{flexDirection:"row", marginBottom:20, borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50, justifyContent:"center"}}>
                    <View>
                <Text style={{fontSize:20}}>3) Science</Text>
                </View>
                <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:80, height:30,
  backgroundColor:"lime", color:"black", fontSize:20, marginLeft:130}} onPress={()=>props.navigation.navigate('ScienceQuiz')} >View</TouchableOpacity>
             </View>
             <View style={{flexDirection:"row", marginBottom:20, borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50, justifyContent:"center"}}>
                    <View>
                <Text style={{fontSize:20}}>4) Language Arts</Text>
                </View>
                <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:80, height:30,
  backgroundColor:"lime", color:"black", fontSize:20, marginLeft:70}} onPress={()=>props.navigation.navigate('LanguageArts')} >View</TouchableOpacity>
             </View>
             <View style={{flexDirection:"row", marginBottom:20, borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50, justifyContent:"center"}}>
                    <View>
                <Text style={{fontSize:20}}>5) Coding</Text>
                </View>
                <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:80, height:30,
  backgroundColor:"lime", color:"black", fontSize:20, marginLeft:135}} onPress={()=>props.navigation.navigate('CodingQuiz')} >View</TouchableOpacity>
             </View>
             <View style={{flexDirection:"row", marginBottom:20, borderWidth: 1,
    borderColor: "thistle", 
    borderRadius: 50, justifyContent:"center"}}>
                    <View>
                <Text style={{fontSize:20}}>6) Basketball</Text>
                </View>
                <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:80, height:30,
  backgroundColor:"lime", color:"black", fontSize:20, marginLeft:105}} onPress={()=>props.navigation.navigate('BasketballQuiz')} >View</TouchableOpacity>
             </View>
             <View style={{flexDirection:"row", marginBottom:20, borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50, justifyContent:"center"}}>
                    <View>
                <Text style={{fontSize:20}}>7) History</Text>
                </View>
                <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:80, height:30,
  backgroundColor:"lime", color:"black", fontSize:20, marginLeft:135}} onPress={()=>props.navigation.navigate('HistoryQuiz')} >View</TouchableOpacity>
             </View>
             <View style={{flexDirection:"row", marginBottom:20, borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50, justifyContent:"center"}}>
                    <View>
                <Text style={{fontSize:20}}>8) Movies</Text>
                </View>
                <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:80, height:30,
  backgroundColor:"lime", color:"black", fontSize:20, marginLeft:135}} onPress={()=>props.navigation.navigate('MoviesQuiz')} >View</TouchableOpacity>
             </View>
             <View style={{flexDirection:"row", marginBottom:20, borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50, justifyContent:"center"}}>
                    <View>
                <Text style={{fontSize:20}}>9) Fruits</Text>
                </View>
                <TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:80, height:30,
  backgroundColor:"lime", color:"black", fontSize:20, marginLeft:150}} onPress={()=>props.navigation.navigate('FruitsQuiz')} >View</TouchableOpacity>
             </View>
            </View>
            
        )
    }

