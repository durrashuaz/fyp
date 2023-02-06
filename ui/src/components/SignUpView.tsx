import React, {useState} from 'react';
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
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

interface FormData {
  email: string;
  password: string;
}

const SignUpView: React.FC = () => {
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
        <SafeAreaView style={styles.safeAreaViewAlt}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.content}
          >
            <Text style={styles.title}>Sign Up</Text>

            <SizedBox height={32} />
              <View style={styles.form}>
                <Text style={styles.label}>Full Name</Text>
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
              <View style={styles.form}>
                <Text style={styles.label}>Username</Text>
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
              <View style={styles.form}>
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
                <View style={styles.form}>
                <Text style={styles.label}>Phone Number</Text>
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

            <SizedBox height={32} />
              <View style={[styles.form, styles.mb]}>
                <Text style={styles.label}>Home Address</Text>
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
            <TouchableOpacity onPress={onSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>Sign Up</Text>
              </View>
            </TouchableOpacity>

            <SizedBox height={16} />
            <Text style={styles.textButton}>Already have an account? Login</Text>

          </KeyboardAvoidingView>
        </SafeAreaView>
      <Image style={styles.logoAlt} source={require('./neighbourhood.png')} />
      </View>
    </TouchableWithoutFeedback>
  );

};

export default SignUpView;

////////////////////////////////////////

