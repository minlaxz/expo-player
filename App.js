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
            name="home"
            component={Screens.HomeScreen}
            options={{ title: '日本語 N5~N1' }}
          />
          <Stack.Screen
            name="mondai"
            component={Screens.MondaiScreen}
            options={{ title: '問題' }}
          />
          <Stack.Screen
            name="n5mondai"
            component={Screens.N5Screen}
            options={{ title: '問題 N5' }}
          />
          <Stack.Screen
            name="n4mondai"
            component={Screens.N4Screen}
            options={{ title: '問題 N4' }}
          />
          <Stack.Screen
            name="n3mondai"
            component={Screens.N3Screen}
            options={{ title: '問題 N3' }}
          />
          <Stack.Screen
            name="n2mondai"
            component={Screens.N2Screen}
            options={{ title: '問題 N2' }}
          />
          <Stack.Screen
            name="n1mondai"
            component={Screens.N1Screen}
            options={{ title: '問題 N1' }}
          />
        </Stack.Navigator>
      </ReduxProvider>
    </NavigationContainer>
  );
}