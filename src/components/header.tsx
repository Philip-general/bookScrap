import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export const MainRight=()=>{
    const navigation = useNavigation();
    const onBookSearch =()=>{
      navigation.navigate("BookSearch")
    }
    return (
      <Icon name="search" style={{marginRight:10}} onPress={onBookSearch} size={25}/>
    )
  }