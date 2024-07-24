import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';
import UserProvider from './context/Provider';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </UserProvider>
  );
}