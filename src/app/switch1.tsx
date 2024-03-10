import { Pressable, View, Text } from "react-native";
import Switch from "../components/switch";
import { useState } from "react";

export default function SwitchButton() {
  let [boxOn, setBoxOn] = useState(true);

  const handleSwitchChange = () => {
    setBoxOn(!boxOn);
  };

  return (
    <View className="p-10 ">
      <Switch defaultvalue={boxOn} />
      <Pressable onPress={handleSwitchChange}>
        <Text>Click</Text>
      </Pressable>
      <Box boxOn={boxOn} />
    </View>
  );
}

function Box({ boxOn }) {
  return (
    <View
      className="  p-10 w-44 h-44 rounded-md"
      style={{ backgroundColor: boxOn ? "yellow" : "black" }}
    ></View>
  );
}
