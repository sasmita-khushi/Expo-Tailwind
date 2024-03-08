import { Text, View } from "react-native";
import { useState } from "react";

export default function Counter() {
  console.log("render");

  let [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <View>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <View className="flex-row">
        <Text className=" mt-5 font-mono text-3xl">Count:</Text>
        <Text
          className={`mt-5 font-mono text-3xl`}
          style={{ color: count > 0 ? "green" : "red" }}
        >
          {count}
        </Text>
      </View>
    </View>
  );
}
