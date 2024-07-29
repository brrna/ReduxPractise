import { NavigationContainer } from '@react-navigation/native';
import Router from './pages/router/Router';
import { Provider } from 'react-redux';
import { Store } from './context/Store';

export default function App() {
  return (
    <Provider store={Store} >
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}