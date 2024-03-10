import { useRef, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
export default function Foo() {
  const counter = useRef(0);

  const inputRef = useRef();

  const [i, setI] = useState(0);
  const handleIncrement = () => {
    counter.current = counter.current + 1;
    console.log(counter.current);

    //@ts-expect-error

    inputRef.current.value = "khushi";
  };

  const handleIncrementState = () => {
    setI(i + 1);
  };

  return (
    <View className="p-20">
      <Pressable
        className="bg-blue-500 hover:bg-blue-700 font-serif text-white 
        text-center p-10 text-2xl py-2 px-4 w-48 h-7 rounded-md"
        onPress={handleIncrement}
      >
        <Text className=" text-center color-white">Increment Ref</Text>
      </Pressable>

      <Pressable
        className="bg-blue-500 hover:bg-blue-700 font-serif text-white text-center p-10 text-2xl py-2 px-4  h-7 rounded-md mt-10 w-48"
        onPress={handleIncrementState}
      >
        <Text className=" text-center color-white">Increment State</Text>
      </Pressable>
      <Text className="bold text-lg">Ref Counter :{counter.current}</Text>
      <Text className="bold text-lg">State Counter :{i}</Text>
      <TextInput
        className=" border-red-600 border p-3 mt-5 rounded-md "
        ref={inputRef}
      />
    </View>
  );
}
