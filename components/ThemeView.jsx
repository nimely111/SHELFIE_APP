import { View, useColorScheme } from "react-native";
import { Colors } from "../Constants/Colors";
const ThemeView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemeView;
