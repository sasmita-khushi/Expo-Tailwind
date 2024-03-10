import { useRef } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Switch() {
  const isOn = useRef(false);
  const hoverCircle_sv = useSharedValue(0);
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

  const CircleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sv.value * 23 }],

      background: interpolateColor(sv.value, [0, 1], ["#ffffff", "#1478dd"]),
    };
  });
  const BarAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        sv.value,
        [0, 1],
        ["#94a3b8", "#82a2dd"]
      ),
    };
  });

  const HoverCircleStyle = useAnimatedStyle(() => {
    return {
      left: interpolate(sv.value, [0, 1], [-7.5, 17.5]),
      backgroundColor: interpolateColor(
        sv.value,
        [0, 1],
        ["#e2e8f0", "#c0d8f7"]
      ),

      transform: [
        {
          scale: hoverCircle_sv.value,
        },
      ],
    };
  });

  const handleMouseEnter = () => {
    hoverCircle_sv.value = withTiming(1);
  };

  const handleMouseLeave = () => {
    hoverCircle_sv.value = withTiming(0);
  };

  return (
    <Pressable
      className="  relative w-fit"
      onPress={handleClick}
      //@ts-expect-error
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HoverCircle style={HoverCircleStyle} />
      <Bar style={BarAnimatedStyle}>
        <Circle style={CircleAnimatedStyle}></Circle>
      </Bar>
    </Pressable>
  );
}

function Bar({ children, style }) {
  return (
    <Animated.View
      className=" w-11 h-5 bg-slate-400 rounded-2xl "
      style={style}
    >
      {children}
    </Animated.View>
  );
}
function Circle({ style }) {
  return (
    <Animated.View
      className=" w-6 h-6 rounded-full bg-white shadow-md -top-0.5"
      style={style}
    ></Animated.View>
  );
}

function HoverCircle({ style }) {
  return (
    <Animated.View
      className=" absolute w-9 h-9 rounded-full -top-2 bg-slate-200"
      style={style}
    ></Animated.View>
  );
}
