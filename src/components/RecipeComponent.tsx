import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import type { Recipe } from "../types/recipe";
// import {useWindowDimensions} from 'react-native';
import { Dimensions } from "react-native";

type Props = {
  recipe: Recipe;
};

const RecipeComponent = ({ recipe }: Props) => {
  const imageUrl = recipe.image_url;
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.image}
          source={{
            uri: recipe.image_url,
          }}
        />
      </View>
      <View style={styles.right}>
        <Text>{recipe.name}</Text>
      </View>
    </View>
  );
};

export default RecipeComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFD1DC",
    display: "flex",
    flexDirection: "row",
    height: Dimensions.get("screen").width / 3,
    justifyContent: "space-around",
    margin: 1,
    width: Dimensions.get("screen").width,
  },
  image: {
    alignSelf: "center",
    display: "flex",
    flexGrow: 1,
    padding: 2,
    width: "100%",
  },
  left: {
    width: Dimensions.get("screen").width / 2.5,
  },
  right: {
    height: "100%",
    width: Dimensions.get("screen").width / 2.5,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 2,
  },
});
