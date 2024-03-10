import { useRef } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function SwitchComponent({
  onChange = (v: boolean) => {},
  defaultvalue = false,
}) {
  const isOn = useRef(defaultvalue);
  const HoverCircle_sv = useSharedValue(0);
  const rippleCircle_sv = useSharedValue(0);
  const sv = useSharedValue(defaultvalue ? 1 : 0);

  const handleClick = () => {
    if (isOn.current) {
      sv.value = withTiming(0, { duration: 300 }, (isComplete: boolean) => {
        if (isComplete) {
          isOn.current = false;

          onChange(false);

          animatedRippleCircle();
        } else {
          sv.value = withTiming(1);
        }
      });
    } else {
      sv.value = withTiming(1, { duration: 300 }, (isComplete: boolean) => {
        if (isComplete) {
          onChange(true);

          isOn.current = true;
          animatedRippleCircle();
        } else {
          sv.value = withTiming(0);
        }
      });
    }
  };

  //STYLE:
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

  const HoverCircleStyle = useAnimatedStyle(() => {
    return {
      left: interpolate(sv.value, [0, 1], [-7, 10.5]),
      backgroundColor: interpolateColor(
        sv.value,
        [0, 1],
        ["#e2e8f0", "#d0ddee"]
      ),
      transform: [
        {
          scale: HoverCircle_sv.value,
        },
      ],
    };
  });

  const animatedRippleCircle = () => {
    rippleCircle_sv.value = withTiming(1, { duration: 300 }, (isCompleted) => {
      if (isCompleted) {
        rippleCircle_sv.value = 0;
      }
    });
  };

  const rippleCircleAnimeStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        sv.value,
        [0, 1],
        ["#e2e8f0", "#2b5db3"]
      ),
      opacity: interpolate(rippleCircle_sv.value, [0, 1], [1, 0]),
      transform: [{ scale: rippleCircle_sv.value * 5 }],
    };
  });

  const handleMouseEnter = () => {
    HoverCircle_sv.value = withTiming(1);
  };

  const handleMouseLeave = () => {
    HoverCircle_sv.value = withTiming(0);
  };

  return (
    <Pressable
      className="relative w-fit my-5 "
      onPress={handleClick}
      //@ts-expect-error
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HoverCircle style={HoverCircleStyle} />
      <Bar style={barStyle}>
        <Circle style={circleAnimatedStyle}>
          <RippleCircle style={rippleCircleAnimeStyle} />
        </Circle>
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

function Circle({ style, children }) {
  return (
    <Animated.View
      className="  flex justify-center items-center w-5 h-5 rounded-full bg-white shadow-md "
      style={style}
    >
      {children}
    </Animated.View>
  );
}

function HoverCircle({ style }) {
  return (
    <Animated.View
      className="absolute -top-2  
     w-8 h-8 rounded-full bg-slate-200"
      style={style}
    ></Animated.View>
  );
}

function RippleCircle({ style }) {
  return (
    <Animated.View className=" w-2 h-2  rounded" style={style}></Animated.View>
  );
}
