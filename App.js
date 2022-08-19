import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as ReduxProvider } from 'react-redux';
import { useColorScheme } from 'react-native';
import store from './features/store';
import * as Screens from './screens';

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ReduxProvider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fafafa',
            },
            headerTintColor: '#b00b69',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Screens.HomeScreen}
            options={{ title: '日本語の問題 N5~N1' }}
          />
          <Stack.Screen
            name="N5Screen"
            component={Screens.N5Screen}
            options={{ title: '日本語の問題 N5' }}
          />
        </Stack.Navigator>
      </ReduxProvider>
    </NavigationContainer>
  );
}