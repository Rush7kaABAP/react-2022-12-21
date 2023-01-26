import { Dish } from '../Dish/Dish';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantMenuById } from '../../store/modules/restaurant/selectors';
import { useEffect } from 'react';
import { selectIsDishLoading } from '../../store/modules/dish/selectors';
import { dishActions } from '../../store/modules/dish';

export const Menu = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const dishIds = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(dishActions.load(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {dishIds.map((id) => (
          <li>
            <Dish dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
