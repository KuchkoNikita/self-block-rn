import { LOAD_POSTS, TOGGLE_BOOKED } from '../types';
import { DATA } from '../../data';

export const loadPosts = () => ({
  type: LOAD_POSTS,
  payload: DATA,
});

export const toggleBooked = id => ({
  type: TOGGLE_BOOKED,
  payload: id,
})