import { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation }) {
  // just like useNavigation we can use useRoute() to get access to route.params
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //FRANK NOTE we should not be setting setOptions directly in the functional component
  // cannot update a component whilte rendering a different component, use useEffect
  // navigation.setOptions({ title: categoryTitle });

  // useLayoutEffect for side effects that you want during animations but want it to happen before it has finished rendering
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  // Automatically received it from renderItem
  function renderMealItem(itemdata) {
    const item = itemdata.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
