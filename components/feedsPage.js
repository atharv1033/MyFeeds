import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList
} from 'react-native';

var count = 2;

function Item({ item }) {
  return(
    <View style={{ margin: 20, backgroundColor: '#fcff9e', borderWidth: 1, borderRadius: 5 }} >
      <Text style={{ fontSize: 20, margin: 10, borderBottomWidth: 1 }} > {item.title} </Text>
      <Text style={{ fontSize: 15, margin: 10 }}> {item.body} </Text>
    </View>
  );
}

export default function Feeds() {

  const [feeds, setFeeds] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20')
      .then((response) => response.json())
      .then((json) => {
        setFeeds(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  const _endReached = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_page=' + (count).toString() + '&_limit=20')
      .then((response) => response.json())
      .then((json) => {
        ++count;
        if (json.length != 0) {
          let data = feeds.concat(json);
          setFeeds(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <FlatList
        data={feeds}
        renderItem={renderItem}
        keyExtractor={item => (item.id).toString()}
        onEndReached={_endReached}
      />
    </SafeAreaView>
  )
}