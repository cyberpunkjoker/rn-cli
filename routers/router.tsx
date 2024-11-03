import { FC } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routerConfig, { TabNavigatorConfig } from './routerConfig';
import CustomHeader from '@/components/CustomHeader';
import CustomTabBar from '@/components/CustomTabBar';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarComp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
        },
      }}
      tabBar={(props) => (
        <CustomTabBar {...props} />
      )}
    >
      {TabNavigatorConfig.map((item) => (
        <Tab.Screen
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.name,
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

const Routers: FC = () => {
  const renderComponent = (item: RouterListDto) => {
    if (TabNavigatorConfig.some(i => i.name === item.name)) {
      return TabBarComp
    }
    return item.component
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {routerConfig.map((item) => (
          <Stack.Screen
            name={item.name}
            component={renderComponent(item)}
            options={({ navigation }) => ({
              header: () => <CustomHeader title={item.name} navigation={navigation} />, // 在详情页也使用自定义导航栏
            })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default Routers;