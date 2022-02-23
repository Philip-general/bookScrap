import { black } from "colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  search_icon :{
    height:30,
    width:30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  bookImg: {
    width: 50,
    height: 50,
  },
  Main_container:{
    flex:1,
  },
  Main_components:{
    margin:10,
    backgroundColor:'#fff',
    flexDirection:'row',
  },
  Main_bookImg:{
    marginLeft:10,
    marginRight:10,
    width:100,
    height:160,
    resizeMode:'contain'
  },
  Main_word:{
    marginTop:5,
    flex:1,
  },
  Main_title:{
    margin:5,
    flex:1, 
  },
  Main_Icon:{
    textAlign:"right",
  },
  Main_box:{
    borderWidth:1,
    borderColor:"black",
  },
  Main_header:{
    flex:1,
    flexDirection:"row",
  },
  Main_medium:{
    flex:19,
  },
  Main_header_left:{
    flex:1,
    fontSize:24,
    textAlign:'center'
  },
  Main:{
    height:"100%",
  },
});
