import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Alert, 
  StyleSheet, 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  ScrollView, 
  Platform, 
  Image, 
  Button
} from 'react-native';
import { useAuth } from '../navigation/AuthContext';
import { Link, useNavigation } from '@react-navigation/native';

const LoginScreen = ({navigation}:any) => {

  // const navigation = useNavigation<any>();

  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields.");
    } else {
      Alert.alert("Success", `Welcome, ${email}!`);
      // Handle authentication logic here
      login(); // Trigger login
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/Layer 1.png")} style={styles.logo} />
        </View>
      <View style={styles.container}>
        {/* Login Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            Don't have an account?{" "}
            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate('Signup')}
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top:80,
    alignItems: "center", // Center horizontally
    zIndex: 1,
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: "contain",
  },
  card: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
    alignItems: "center", // Center content inside the card
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3d5a80",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3d5a80",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  signupText: {
    color: "#3d5a80",
    fontWeight: "bold",
  },
});

export default LoginScreen;
