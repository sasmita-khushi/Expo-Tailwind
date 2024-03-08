import { useRef } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function SwitchComponent() {
  const isOn = useRef(false);
  const sv = useSharedValue(0);
  const handleClick = () => {
    if (isOn.current) {
      sv.value = withTiming(0, { duration: 300 }, (isComplete: boolean) => {
        if (isComplete) {
          isOn.current = false;
        } else {
          sv.value = withTiming(1);
        }
      });
    } else {
      sv.value = withTiming(1, { duration: 300 }, (isComplete: boolean) => {
        if (isComplete) {
          isOn.current = true;
        } else {
          sv.value = withTiming(0);
        }
      });
    }
  };

  const circleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: sv.value * 17,
        },
      ],
      background: interpolateColor(sv.value, [0, 1], ["#ffffff", "#2b5db3"]),
    };
  });
  const barStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        sv.value,
        [0, 1],
        ["#a8a29e", "#899bdd"]
      ),
    };
  });
  return (
    <Pressable className="w-fit" onPress={handleClick}>
      <Bar style={barStyle}>
        <Circle style={circleAnimatedStyle}></Circle>
      </Bar>
    </Pressable>
  );
}
function Bar({ children, style }) {
  return (
    <Animated.View
      className=" w-9 h-4 rounded-2xl justify-center bg-stone-400"
      style={style}
    >
      {children}
    </Animated.View>
  );
}

function Circle({ style }) {
  return (
    <Animated.View
      className=" w-5 h-5 rounded-full bg-white shadow-md "
      style={style}
    ></Animated.View>
  );
}
