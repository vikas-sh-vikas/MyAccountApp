import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../navigation/AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import { NavigationContainer } from "@react-navigation/native";

const DashboardScreen = () => {
  const Tab = createBottomTabNavigator();
  const { logout } = useAuth();
  function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="SignUp" component={LoginScreen} />
        <Tab.Screen name="Login" component={SignupScreen} />
      </Tab.Navigator>
    );
  }
  return (
    <>
      <TabNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 16 },
});

export default DashboardScreen;
