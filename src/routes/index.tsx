import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import BadAnswers from '../screens/BadAnswers';
import GoodAnswers from '../screens/GoodAnswers';
import HomeScreen from '../screens/Home';
import ReportScreen from '../screens/Reports';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reports"
          component={ReportScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BadAnswers"
          component={BadAnswers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GoodAnswers"
          component={GoodAnswers}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
