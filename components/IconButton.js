import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
function IconButton({ icon, color, onPress }) {
  return (
    //FRANK NOTE
    // ( pressed ) vs ({ pressed })
    // ( pressed ) returns an object { pressed: false }
    // ({ pressed }) returns a boolean !
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressedOpacity}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressedOpacity: {
    opacity: 0.7,
  },
  notPressed: {
    opacity: 1.0,
  },
});
