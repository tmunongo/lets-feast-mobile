import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import RecipePage from "../screens/RecipePage";
import MainTabs from "./MainTabs";

const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="RecipePage">
        {(props) => <RecipePage {...props} />}
      </MainStack.Screen>
    </MainStack.Navigator>
  );
};
export default Main;
