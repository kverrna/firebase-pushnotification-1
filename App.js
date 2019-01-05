import { createStackNavigator,createAppContainer } from 'react-navigation';
import HomePage from './Home';
import PaginaBPage from './PaginaB';

const AppNavigator = createStackNavigator(
  {
    Home: {screen:HomePage},
    Pagina2: {screen:PaginaBPage}
  },
  {
    initialRouteName: 'Home'
  }
);
export default createAppContainer(AppNavigator);

