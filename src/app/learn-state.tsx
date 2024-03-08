import { useState } from "react";
import { View, Text } from "react-native";

export default function LearnState() {
  return (
    <View className="flex-1 bg-black color-white">
      <Counter />
    </View>
  );
}
function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}
      >
        +5
      </button>
    </>
  );
}
