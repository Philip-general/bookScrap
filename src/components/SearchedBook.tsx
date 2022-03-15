import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../style';
import { bookData } from '../../types/type';
import { useAddScrapMutation } from '../hooks/addScrapBook';
import { useNavigation } from '@react-navigation/native';

export default function SearchedBook(Props: bookData) {
  console.log(Props)
  const { mutate } = useAddScrapMutation();
  const { title, authors, thumbnail } = Props;
  const navigation = useNavigation();
  const addScrap = () => {
    mutate(Props, {
      onSuccess: data => {
        console.log('ffffff', data);
        if (data.ok) {
          navigation.navigate('Main');
        }
      },
    });
  };

  return (
    <View style={styles.Main_container}>
      <View style={styles.Main_components}>
        <View>
          {thumbnail ? (
            <Image
              style={styles.Main_bookImg}
              source={{
                uri: thumbnail,
              }}
            />
          ) : null}
        </View>

        <View style={styles.Main_word}>
          <Text style={styles.Main_title}>
            {`\n`}
            {` ● 제목 : ${title}   `}
            {`\n`}
            {`\n`}
            {` ● 저자 : ${authors}`}
          </Text>
          <Button onPress={addScrap} title="+" />
        </View>
      </View>
    </View>
  );
}
