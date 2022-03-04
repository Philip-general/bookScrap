import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export const MainRight=(props)=>{
    const navigation = useNavigation();
    const onBookSearch =()=>{
      navigation.navigate("BookSearch")
    }
    return (
      <Icon name="search" style ={props.styles} onPress={onBookSearch} size={25}/>
    )
  }