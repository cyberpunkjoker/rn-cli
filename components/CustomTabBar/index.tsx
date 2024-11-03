import { FC } from "react";
import { BottomNavigation } from "react-native-paper";
import { CommonActions } from '@react-navigation/native';

interface CustomTabBarProps {
  navigation: any;
  state: any;
  descriptors: any;
  insets: any;
}

const CustomTabBar: FC<CustomTabBarProps> = (props) => {
  const { navigation, state, descriptors, insets } = props;

  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            // FIXME: ts 待修复
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({ focused, color, size: 24 });
        }

        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.title;

        return label;
      }}
    />
  )
}

export default CustomTabBar;