import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  TopNav,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import RecipeComponent from "../components/RecipeComponent";
import { supabase } from "../initSupabase";
import { AuthContext } from "../providers/AuthProvider";
import { MainStackParamList } from "../types/navigation";
import { Recipe } from "../types/recipe";
import Loading from "./utils/Loading";

// import { Recipe } from "../types/recipe";

type loaderData = {
  recipeData?: any;
  errorMessage?: string;
};

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = useContext(AuthContext);
  const sesh = auth.session;
  const [data, setData] = useState<loaderData | undefined>();

  useEffect(() => {
    async function fetchRecipes() {
      if (!sesh) return;
      const { data, error } = await supabase
        .from("recipes")
        .select("*")
        .eq(`chef_id`, `${sesh.user.id}`);
      // return await supabase.from("recipes").select("name");
      // return { data, error };
      if (error) {
        setData({ errorMessage: error.message });
      }
      setData({ recipeData: data });
    }
    fetchRecipes();
  }, []);
  return (
    <Layout>
      <TopNav
        middleContent="Let's Feast!"
        // right content
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        // left content
        leftContent={
          <Ionicons
            name={"menu"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
      />

      <ScrollView
        style={{
          backgroundColor: "#D5D1DC",
          flex: 1,

          flexGrow: 1,
          width: "100%",
        }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section style={styles.section}>
          <SectionContent>
            {data?.recipeData ? (
              data?.recipeData.map((item: Recipe, index: number) => {
                return (
                  <View style={styles.recipe} key={index}>
                    <RecipeComponent recipe={item} />
                  </View>
                );
              })
            ) : (
              <Loading />
            )}
          </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  recipe: {
    borderRadius: 21,
    boxShadow: "28px 28px 57px #bebebe -28px -28px 57px #ffffff",
  },
  section: {
    height: Dimensions.get("screen").height,
    // marginTop: 120,
    padding: 2,
  },
});
