import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Details = (props) => {
  const { item } = props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.price}>{item.price}$</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.stockContainer}>
            <Text style={styles.stockText}>In Stock:</Text>
            <Text style={styles.stock}>{item.stock}</Text>
          </View>
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>Discount:</Text>
            <Text style={styles.discount}>{item.discountPercentage}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  details: {
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 5,
  },
  brand: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stockText: {
    fontSize: 16,
    color: '#aaa',
    marginRight: 5,
  },
  stock: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  discountText: {
    fontSize: 16,
    color: '#aaa',
    marginRight: 5,
  },
  discount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c00',
  },
});
  
export default Details;