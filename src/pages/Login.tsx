import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { EmailLoginData } from '../../types/type';
import { useLoginMutation } from '../hooks/login';
import { styles } from '../style';
import { useGetMe } from '../hooks/user';
import Auth from '../components/auth/Auth';

export default function Login() {
  const [seePassword, setSeePassword] = useState(false);
  const { mutate, data: loginResult, isSuccess } = useLoginMutation();

  const navigation = useNavigation();
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: 'onChange' });

  const onLogin = async (data: EmailLoginData) => {
    mutate(data, {
      onSuccess: async loginResult => {
        if (loginResult.ok) {
          navigation.replace('Main');
        } else {
          Alert.alert('로그인 실패', loginResult.error);
        }
      },
    });
  };
  const onSee = () => setSeePassword(prev => !prev);

  return (
    <View>
      <Text>로그인하기</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: 'email은 필수 항목입니다.',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '올바른 email을 입력해 주세요.',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="email"
            />
          )}
          name="email"
        />
        {errors.email && <Text>{errors.email.message}</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: 'password는 필수 항목입니다.',
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              secureTextEntry={!seePassword}
              onChangeText={onChange}
              value={value}
              placeholder="password"
            />
          )}
          name="password"
        />
        <Button title="비밀번호 보기" onPress={onSee} />
        {errors.password && <Text>{errors.password.message}</Text>}

        <View style={styles.container}>
          {isSuccess ? <Text>{loginResult?.error}</Text> : null}
          <Button title="login 하기" onPress={handleSubmit(onLogin)} />
          <Button
            title="회원 가입하러 가기"
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
        </View>
      </View>
    </View>
  );
}
