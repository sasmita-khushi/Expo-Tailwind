import { Text, View } from "react-native";
import { Link } from "expo-router";
import Counter from "../components/counter";
import { Circle } from "./student";
export default function Home() {
  return (
    <View
      className="flex-1 bg-yellow-300 justify-center items-center"
      style={{ overflow: "scroll", paddingTop: 500 }}
    >
      <Text className="font-mono  font-bold text-5xl">Hello I am Khushi</Text>
      <Link href="/todo" className="mt-5 text-2xl text-cyan-700 border-b">
        Go to Todo Page.....
      </Link>
      {renderCircles(5)}
      <Counter />
    </View>
  );
}

function renderCircles(num: number) {
  const circles = [];
  for (let i = 1; i <= num; i++) {
    circles.push(<Circle key={i}>{i}</Circle>);
  }
  return circles;
}
