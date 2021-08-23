import { ScreenNames } from "enums";
import { TapModel } from "models";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native-appearance";
import { Icon } from "react-native-elements";
import Theme from "theme";

interface TapProps {
  iconType: string;
  tap: TapModel;
  onTap: (screen: ScreenNames) => void
}

const Tap: FC<TapProps> = (props) => {
  let colorScheme = useColorScheme();
  const theme = Theme(colorScheme);
  const { iconType, tap, onTap } = props;
  const { isActive, screen, icon } = tap;

  return (
    <TouchableOpacity onPress={() => onTap(screen)}>
      <Icon
        type={iconType}
        name={icon}
        color={isActive ? theme.colors.text : theme.colors.placeholder}
      />
    </TouchableOpacity>
  );
};

export default Tap;
