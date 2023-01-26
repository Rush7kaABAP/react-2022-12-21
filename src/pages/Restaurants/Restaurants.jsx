import { Tabs } from '../../components/Tabs/Tabs';
import { Cart } from '../../components/Cart/Cart';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRestaurantLoading } from '../../store/modules/restaurant/selectors';
import { loadUsers } from '../../store/modules/user/actions';
import { restaurantActions } from '../../store/modules/restaurant';

export const RestaurantsPage = () => {
  const dispatch = useDispatch();
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const isLoading = useSelector(selectIsRestaurantLoading);

  useEffect(() => {
    dispatch(restaurantActions.load());
    dispatch(loadUsers());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Tabs onTabClick={setActiveRestaurantId} activeId={activeRestaurantId} />
      {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
      <Cart />
    </div>
  );
};
