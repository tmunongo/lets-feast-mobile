import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-rapi-ui";
import { Recipe } from "../types/recipe";

type Props = {
  recipe: Recipe;
};

const RecipeFullComponent = ({ recipe }: Props) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {/* <Text style={styles.breadCrumb}>{}</Text> */}
        <Text style={styles.heading}>{recipe.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: recipe.image_url }} />
      </View>
      <View style={styles.tags}>
        <Text style={styles.catTag}>{recipe.category}</Text>
        <Text style={styles.timeTag}>{recipe.prep_time} mins</Text>
      </View>
      <View style={styles.ingredients}>
        <Text style={{ fontSize: 20 }}>INGREDIENTS</Text>
        {recipe.ingredients.map((item, index) => (
          <Text key={index}>
            {index + 1}. {item}
          </Text>
        ))}
      </View>
      <View style={styles.recipeBody}>
        <Text style={{ fontSize: 20, color: "#23b" }}>DIRECTIONS</Text>
        <Text>{recipe.description}</Text>
      </View>
      <View style={styles.buttons}>
        <Button status="primary" text="Edit" size="md" />
        <Button status="danger" text="Delete" size="md" />
      </View>
    </ScrollView>
  );
};

export default RecipeFullComponent;

const styles = StyleSheet.create({
  breadCrumb: {
    color: "#535B65",
    fontSize: 18,
    paddingHorizontal: Dimensions.get("screen").width / 25,
  },
  buttons: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: "100%",
  },
  container: {
    // backgroundColor: "#FFFAEB",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto",
    padding: 4,
    paddingHorizontal: 6,
    minHeight: "100%",
    width: "100%",
  },
  heading: {
    color: "#535B65",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: Dimensions.get("screen").width / 25,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    height: Dimensions.get("screen").height / 4,
    marginVertical: 4,
    width: "100%",
  },
  ingredients: {
    marginVertical: 6,
    paddingHorizontal: Dimensions.get("screen").width / 25,
  },
  recipeBody: {
    paddingHorizontal: Dimensions.get("screen").width / 25,
  },
  // tags
  catTag: {
    backgroundColor: "#9CE8BF",
    borderRadius: 5,
    height: "100%",
    marginLeft: 1,
    padding: 3,
  },
  tags: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  timeTag: {
    backgroundColor: "#FFF9C2",
    borderRadius: 5,
    height: "100%",
    marginLeft: 1,
    padding: 3,
  },
});
