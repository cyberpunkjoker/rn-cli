import { FC } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routerConfig from './routerConfig';
import CustomHeader from '@/components/CustomHeader';

const Stack = createNativeStackNavigator();

const Routers: FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {routerConfig.map((item) => (
          <Stack.Screen
            name={item.name}
            component={item.component}
            options={({ navigation }) => ({
              header: () => <CustomHeader navigation={navigation} />, // 在详情页也使用自定义导航栏
            })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routers;