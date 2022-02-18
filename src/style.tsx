import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    borderWidth:2,
    margin:10,
    borderColor:"black",
    backgroundColor:"#F2F5C8",
    flexDirection:"row",
  },
  Main_bookImg:{
    width:120,
    height:160,
  },
  Main_word:{
    flex:2,
  },
  Main_header:{
    flex:1,
    flexDirection:"row",
  },
  Main_medium:{
    flex:20,
  },
  Main_header_left:{
    flex:1,
    fontSize:24,
  },
  Main_header_right :{
    flex:1,
    fontSize:22,
    textAlign:"right",
  },
  Main:{
    height:"100%",
    backgroundColor:"#FEF5ED",
  },
});
