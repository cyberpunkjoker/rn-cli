import React, { FC } from "react";
import { Text } from "react-native-paper";

interface Props {
  text: string;
}

const ThemeText: FC<Props> = (props) => {
  const { text } = props;

  return (
    <Text>{text}</Text>
  )
}

export default ThemeText;