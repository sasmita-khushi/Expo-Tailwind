import { Button, View, StyleSheet, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  withSequence,
  withDelay,
} from "react-native-reanimated";

export default function Modifier() {
  const sv = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sv.value }],
    };
  });

  const offset = 40;
  const duration = 250;
  const handleShake = () => {
    sv.value = withSequence(
      withTiming(-offset, { duration: duration / 2 }),
      withRepeat(withTiming(offset, { duration: duration }), 5, true),
      withDelay(400, withTiming(0, { duration: duration / 2 }))
    );
  };
  return (
    <View className="flex flex-1 bg-purple-300 items-center justify-center">
      <View className="w-1/2 h-1/2 bg-white rounded-3xl justify-center items-center">
        <Animated.View
          className="bg-purple-600 w-24 h-24 mb-8 rounded-2xl"
          style={[animatedStyle]}
        ></Animated.View>
        <Pressable
          className="bg-blue-500 hover:bg-blue-700 font-serif text-white text-center text-2xl py-2 px-4 w-28 rounded-md"
          onPress={handleShake}
        >
          Shake
        </Pressable>
      </View>
    </View>
  );
}
