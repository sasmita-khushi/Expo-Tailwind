import { Text, View } from "react-native";
import Counter from "../components/counter";
import * as X from "../components/abc";

export default function Student() {
  const recipes = [
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: [
        "pizza crust",
        "pizza sauce",
        "mozzarella",
        "ham",
        "pineapple",
      ],
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: [
        "chickpeas",
        "olive oil",
        "garlic cloves",
        "lemon",
        "tahini",
      ],
    },
  ];

  return (
    <div>
      <h1>Recipes.....</h1>
      <Recipe recipes={recipes} />
    </div>
  );
}

function Recipe({ recipes }) {
  return (
    <ol>
      {recipes.map((recipe, i) => {
        return (
          <li key={recipe.id}>
            {" "}
            {i + 1} - {recipe.name}
            <Ingredients ingredients={recipe.ingredients} />
          </li>
        );
      })}
    </ol>
  );
}

function Ingredients({ ingredients }) {
  return (
    <ul style={{ marginLeft: 100 }}>
      {ingredients.map((e, i) => (
        <li key={e}>
          {i + 1} {e}
        </li>
      ))}
    </ul>
  );
}

const roundedBox = {
  width: 200,
  height: 200,
  borderRadius: "50%",
  marginBottom: 20,
  backgroundColor: "yellow",
  justifyContent: "center",
  alignItems: "center",
};

export function Circle(props) {
  return <View style={[roundedBox, props.style]}>{props.children}</View>;
}
