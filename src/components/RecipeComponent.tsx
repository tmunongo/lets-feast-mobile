import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import type { Recipe } from "../types/recipe";
// import {useWindowDimensions} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { NavigationContext } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { Button } from "react-native-rapi-ui";

type Props = {
  recipe: Recipe;
  // navigation: NativeStackScreenProps<MainStackParamList, "MainTabs">;
};

const RecipeComponent = ({ recipe }: Props) => {
  const navigation = React.useContext(NavigationContext);

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
        <Text style={styles.header}>{recipe.name}</Text>
        <View style={styles.tags}>
          <Text style={styles.catTag}>{recipe.category}</Text>
          <Text style={styles.timeTag}>{recipe.prep_time} mins</Text>
        </View>
        <View style={styles.bottom}>
          <Button
            text="View"
            status="primary"
            size="sm"
            onPress={() =>
              navigation?.navigate("RecipePage", { id: recipe.id })
            }
          />
          <Ionicons
            name={recipe.favorited ? "heart" : "heart-outline"}
            size={20}
          />
        </View>
      </View>
    </View>
  );
};

export default RecipeComponent;

const styles = StyleSheet.create({
  bottom: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  container: {
    alignItems: "center",
    // backgroundColor: "#FFEBF1",
    borderBottomWidth: 2,
    borderBottomColor: "#FFEBF1",
    paddingBottom: 5,
    display: "flex",
    flexDirection: "row",
    height: Dimensions.get("screen").width / 3,
    justifyContent: "space-around",
    margin: 1,
    width: Dimensions.get("screen").width,
  },
  header: {
    fontSize: 16,
    fontWeight: "700",
  },
  image: {
    alignSelf: "center",
    borderRadius: 5,
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
    width: Dimensions.get("screen").width / 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 2,
  },
  // tags
  catTag: {
    backgroundColor: "#9CE8BF",
    borderRadius: 5,
    marginLeft: 1,
    padding: 3,
  },
  tags: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  timeTag: {
    backgroundColor: "#FFF9C2",
    borderRadius: 5,
    marginLeft: 1,
    padding: 3,
  },
});
