import { createAppContainer, createDrawerNavigator,createStackNavigator } from 'react-navigation';
import Page1Screen from './Page1/Page1'
import Page2Screen from './Page2/Page2'
import Page3Screen from './Page3/Page3'
import DetailScreen from './Page1/Detail'
import SideMenu from './SideMenu'


const Page1Stack = createStackNavigator({
    Page1: { screen: Page1Screen},
    Detail: { screen: DetailScreen},
  })

const Page2Stack = createStackNavigator({
    Page2: { screen: Page2Screen},
  })

const Page3Stack = createStackNavigator({
    Page1Screen: { screen: Page3Screen},
})


const AppDrawerNavigator = createDrawerNavigator({
    Page1Stack: {screen: Page1Stack},
    Page2Stack: {screen: Page2Stack},
    Page3Stack: {screen: Page3Stack}
},
{
    contentComponent: SideMenu,
    drawerWidth: 270,
    drawerBackgroundColor: '#f6f6f6'
  })

const AppContainer = createAppContainer(AppDrawerNavigator);

export default AppContainer;
