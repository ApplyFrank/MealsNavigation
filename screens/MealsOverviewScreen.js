import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  // just like useNavigation we can use useRoute() to get access to route.params
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
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

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
