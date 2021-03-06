import React, { useEffect, useState, Fragment } from 'react';
import { Text, View, ActivityIndicator, FlatList, Image, StyleSheet, Button } from 'react-native';
import { ApiUrl } from './ApiUrl';
import WelcomePageContainer from './containers/WelcomePageContainer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomePageContainer from './containers/HomePageContainer';
import Profile from './components/Profile';
import { navigationRef, navigate } from './RootNavigation';
import Chat from './components/Chat';
import ChatTest from './components/ChatTest';
import AddressFinder from './components/AddressFinder';
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([""]);

const Stack = createStackNavigator();

const Friendo = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [interests, setInterests] = useState([{}]);

  accessAPI = (endpointName, setter) => {
    fetch(ApiUrl(endpointName))
      .then((response) => response.json())
      .then((json) => {
        setter(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  postAPI = (endpointName, data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    return fetch(ApiUrl(endpointName), requestOptions)
      .then((response) => {
        response.text();
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    accessAPI('users', setUsersList)
    accessAPI('interests', setInterests)
  }, []);

  styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50
    }
  });

  signUpSubmit = (data) => {
    postAPI("users/create", data).then(() => {
      navigate("Friendo")
    })
      .catch(console.error);
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Friendo" >
        <Stack.Screen name="Friendo" component={WelcomePageContainer} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="AddressFinder" component={AddressFinder} />
        <Stack.Screen name="SignUp">
          {props => <SignUp {...props} submitFunction={signUpSubmit} propTest="prop passing working" />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChatTest" component={ChatTest} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="FriendoApp"
          options={({ navigation }) => ({
            headerLeft: null,
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Friendo');
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Friendo' }],
                  });
                }}
                title="Sign out?"
                color="#ff4d4d" />
            )
          })}
        >
          {props => (<HomePageContainer {...props} usersList={usersList} />)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Friendo;