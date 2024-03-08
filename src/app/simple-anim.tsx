import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function SimpleAnime() {
  const [isOn, setOn] = useState(false);
  const sv = useSharedValue(0);

  const handlePress = () => {
    if (isOn) {
      sv.value = withTiming(0, { duration: 1000 }, (isComplete) => {
        if (isComplete) {
          setOn(false);
        } else {
          sv.value = withTiming(1);
        }
      });
    } else {
      sv.value = withTiming(1, { duration: 1500 }, (isComplete) => {
        console.log("isComplete", isComplete);
        if (isComplete) {
          setOn(true);
        } else {
          setOn(false);
          sv.value = withTiming(0);
        }
      });
    }
  };
  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sv.value * 200 }],
    };
  });

  return (
    <View className=" bg-fuchsia-200 p-10 flex flex-1">
      <Animated.View
        className=" w-52 h-40 bg-purple-500 rounded-2xl "
        style={animStyle}
      >
        <Pressable className="  w-52 h-40 " onPress={handlePress}></Pressable>
      </Animated.View>

      <Text className=" mt-10 text-2xl font-bold">{isOn ? "ON" : "OFF"}</Text>
    </View>
  );
}
