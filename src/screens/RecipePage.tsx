import { Ionicons } from "@expo/vector-icons";
import { NavigationContext } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Layout, TopNav, themeColor, useTheme } from "react-native-rapi-ui";
import RecipeFullComponent from "../components/RecipeFullComponent";
import { supabase } from "../initSupabase";
import Loading from "./utils/Loading";

type Props = {
  // navigation: NativeStackScreenProps<MainStackParamList, "RecipePage">;
  route: any;
};

type loaderData = {
  recipeData?: any;
  errorMessage?: string;
};

const RecipePage = React.memo(function RecipePage({ route }: Props) {
  const navigation = React.useContext(NavigationContext);
  const { id } = route.params;
  const { isDarkmode, setTheme } = useTheme();
  const [data, setData] = useState<loaderData | undefined>();
  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await supabase
        .from("recipes")
        .select("*")
        .eq(`id`, `${id}`);
      // return await supabase.from("recipes").select("name");
      // return { data, error };
      if (error) {
        setData({ errorMessage: error.message });
      }
      setData({ recipeData: data });
    };
    fetchRecipes();
  }, []);

  return (
    <Layout>
      <TopNav
        middleContent={data ? data?.recipeData[0].name : "Home"}
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
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
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data?.recipeData ? (
          <RecipeFullComponent recipe={data.recipeData[0]} />
        ) : (
          <Loading />
        )}
      </View>
    </Layout>
  );
});

export default RecipePage;
