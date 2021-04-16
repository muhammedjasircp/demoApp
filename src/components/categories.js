import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-elements';
import {categories} from '../utils/constants';

const Categories = () => {
  const {theme} = useTheme();

  const listItem = ({item}) => (
    <View style={styles.item}>
      <item.image />
      <Text style={[styles.title, {color: theme.colors.grey2}]}>
        {item.name}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={listItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 24,
  },
  item: {
    flex: 0.25,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 15,
  },
});

export default Categories;
