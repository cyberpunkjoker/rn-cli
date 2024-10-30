import React, { FC } from 'react';
import { Appbar } from 'react-native-paper';
interface CustomHeaderProps {
  navigation: any;
}

const CustomHeader: FC<CustomHeaderProps> = (props) => {
  const { navigation } = props

  const { goBack } = navigation

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content mode='center-aligned' title="Title" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default CustomHeader;