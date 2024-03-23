import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { processFontFamily } from "expo-font";
import Colors from "@/constants/Colors";
const Layout = () => {
    return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: Colors.grey,
            tabBarLabelStyle: { fontFamily: "fa" },
        }}    
    >
        <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: "چت",
        }}
      />
    </Tabs>
  );
}

export default Layout