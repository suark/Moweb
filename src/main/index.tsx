import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement, useMemo, useReducer } from 'react';
import { useColorScheme } from 'react-native';
import { Home, Login, LogoutButton, Settings } from '../screens';
import './GestureHandler';

export const baseColors = {
  primary: '#ff2d55',
  notification: '#00E0B5',
  // override other colors here, if you like.
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...baseColors,
  },
};

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...baseColors,
  },
};

export type AuthContextState = {
  signIn: (data: SignInParams) => Promise<void>;
  signOut: () => void;
};

export type SignInParams = {
  username: string;
  password: string;
};

export type MainStackParams = {
  Home: undefined;
  Settings: undefined;
  Login: undefined;
};

export const AuthContext = React.createContext({} as AuthContextState);

const Stack = createStackNavigator<MainStackParams>();

type StateType = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

const initialState: StateType = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

type ActionType = { type: 'SIGN_IN'; payload: string } | { type: 'SIGN_OUT' };

function mainReducer(prevState: StateType, action: ActionType) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.payload,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
}

export function Main(): ReactElement {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = useMemo(
    () => ({
      signIn: async ({ username, password }: SignInParams) => {
        // eslint-disable-next-line no-console
        console.log(`Logging In: username: ${username} password: ${password}`);
        dispatch({ type: 'SIGN_IN', payload: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
    }),
    [],
  );

  return (
    <NavigationContainer theme={theme}>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator
          screenOptions={{
            headerRight: () => {
              if (state.userToken != null) {
                return <LogoutButton />;
              }
            },
          }}
        >
          {state.userToken != null ? (
            <>
              <Stack.Screen
                name='Home'
                component={Home}
              />
              <Stack.Screen
                name='Settings'
                component={Settings}
              />
            </>
          ) : (
            <Stack.Screen
              name='Login'
              component={Login}
            />
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
