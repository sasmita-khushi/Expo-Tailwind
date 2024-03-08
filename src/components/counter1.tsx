import { View, Text } from "react-native";
import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <View className=" justify-center items-center">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <View className="">Count : {count}</View>
    </View>
  );
}
