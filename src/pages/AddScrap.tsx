import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function AddScrap() {
  // 선택된 이미지의 path가 저장될 상태
  const [pickedImagePath, setPickedImagePath] = useState('');

  // 갤러리에서 선택할 때 실행될 함수
  const showImagePicker = async () => {
    // 갤러리 오픈 퍼미션을 받아야 함
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  // 카메라로 직접 찍을 때 실행될 함수
  const openCamera = async () => {
    // 카메라 사용 퍼미션을 받음
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <View>
      <Text>AddScrap</Text>
      <TouchableOpacity onPress={showImagePicker}>
        <Text>갤러리에서 이미지 선택하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openCamera}>
        <Text>사진찍어 이미지 선택하기</Text>
      </TouchableOpacity>

      <View style={{ padding: 30 }}>
        {pickedImagePath !== '' && (
          <Image
            source={{ uri: pickedImagePath }}
            style={{ width: 400, height: 300, resizeMode: 'cover' }}
          />
        )}
      </View>
    </View>
  );
}
