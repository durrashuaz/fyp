import React, {useState} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image
} from 'react-native';
// Modules
import { Controller, useForm } from 'react-hook-form';
// Components
import SizedBox from './SizedBox';
import { styles } from "../styles/Login";
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
// sdfsddsf
// sdfsdfsdfsf
// sskjdfskjdf

interface FormData {
  email: string;
  password: string;
}

const LoginView: React.FC = () => {
  // const emailInput = React.useRef<TextInput>(null);
  // const passwordInput = React.useRef<TextInput>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = () => {
    Alert.alert('Data', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.content}
          >
            <Text style={styles.title}>Login test</Text>

            <SizedBox height={32} />
              <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <Controller
                  control={control}
                  name="email"
                  render={() => (
                    <TextInput
                      textContentType="username"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      // autoCompleteType="email"
                      onChangeText={(value) => setEmail(value) }
                      returnKeyType="next"
                      style={styles.textInput}
                    />
                  )}
                />
              </View>

            <SizedBox height={16} />
              <View style={[styles.form, styles.mb]}>
                <Text style={styles.label}>Password</Text>
                <Controller
                  control={control}
                  name="password"
                  render={() => (
                    <TextInput
                      textContentType="password"
                      secureTextEntry
                      autoCapitalize="none"
                      autoCorrect={false}
                      // autoCompleteType="password"
                      onChangeText={(value) => setPassword(value) }
                      returnKeyType="done"
                      onSubmitEditing={onSubmit}
                      style={styles.textInput}
                    />
                  )}
                />
              </View>

            <SizedBox height={16} />
            <TouchableOpacity onPress={onSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>Login</Text>
              </View>
            </TouchableOpacity>

            <SizedBox height={16} />
            <Text style={styles.textButton}>Don't have an account? Sign Up</Text>

          </KeyboardAvoidingView>
        </SafeAreaView>
      <Image style={styles.logo} source={require('./neighbourhood.png')} />
      </View>
    </TouchableWithoutFeedback>
  );

};

export default LoginView;

////////////////////////////////////////

