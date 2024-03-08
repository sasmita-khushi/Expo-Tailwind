import { Button, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue, //like usestate
  withSpring, //animation
  withTiming, //animation
  useAnimatedStyle,
  useAnimatedProps,
  Easing,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function FirstAnimation() {
  const sv = useSharedValue(0);
  const rsv = useSharedValue(1);

  const handlePress = () => {
    sv.value += sv.value + 50;
  };

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(sv.value * 5) },
        // { rotate: withSpring(`${sv.value}deg`) },
        // { scale: withSpring(sv.value / 100) },
        // { scaleX: withSpring(sv.value / 100) },
      ],
    };
  });

  const animatedProps = useAnimatedProps(() => {
    return {
      r: withSpring(rsv.value),
      fill: withTiming(rsv.value > 30 ? "green" : "blue", {
        duration: 2000,
        easing: Easing.inOut(Easing.quad),
      }),
    };
  });
  const handleCircleAnimation = () => {
    rsv.value += 10;
  };
  return (
    <View className="flex flex-1 bg-gray-700">
      <Animated.View style={[styles.box, animationStyle]}></Animated.View>
      <Button title="Hello" onPress={handlePress} />
      <Button title="circle animation" onPress={handleCircleAnimation} />
      <Svg
        viewBox="0 0 100 100"
        style={{ height: 500, width: 500, backgroundColor: "yellow" }}
      >
        <AnimatedCircle
          cx={50}
          cy={50}
          animatedProps={animatedProps}
          fill="blue"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  fullRounded: {
    borderRadius: 50,
  },
});
