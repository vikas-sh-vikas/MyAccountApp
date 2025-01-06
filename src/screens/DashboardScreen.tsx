import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../navigation/AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./tabs/ProfileScreen";
import StatusScreen from "./tabs/StatusScreen";
import DashHomeScreen from "./tabs/DashHomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const DashboardScreen = () => {
  const Tab = createBottomTabNavigator();
  const { logout } = useAuth();
  
  function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={DashHomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color = "#900", size = 30 }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Status"
          component={StatusScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color = "#900", size = 30 }) => (
              <Icon name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color = "#900", size = 30 }) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
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
