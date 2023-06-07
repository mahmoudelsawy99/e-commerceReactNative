import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../Redux/Slices/PrdSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.CartSlice);

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <View style={{ marginRight: 10 }}>
          <Text>{item.title}</Text>
          <Text>{item.price}$</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(increaseQuantity(item.id))}>
          <Text style={{ fontSize: 24 }}>+</Text>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item.id))}>
          <Text style={{ fontSize: 24 }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(removeItem(item.id))}>
          <Text style={{ marginLeft: 'auto', color: 'red' }}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      {cart.length === 0 && (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Text>Your cart is empty</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;