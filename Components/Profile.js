import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GetProducts, addToCart } from '../Redux/Slices/PrdSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { products, cart } = useSelector(state => state.ProductSlice);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    dispatch(GetProducts()).then((res) => {
      console.log(res.payload);
      setArr([...res.payload])
    })
  }, [])

  const renderItem = ({ item, index }) => {
    const isInCart = cart.findIndex(cartItem => cartItem.id === item.id) !== -1;

    return (
      <TouchableOpacity onPress={() => save(item)}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
          <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: 200, borderRadius: 10 }} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
            <Icon name='eye-outline' color='grey' size={24} />
            <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
              <Icon name='cart-outline' color={isInCart ? 'green' : 'grey'} size={24} />
            </TouchableOpacity>
            <Text style={{ fontSize: 16 }}>{item.price}$</Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  };

  function save(item) {
    props.navigation.navigate('Details', { item });
  }

  console.log(arr);

  return (
    <View>
       <FlatList
        data={arr}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem} />
    </View>
  );
};

export default Profile;