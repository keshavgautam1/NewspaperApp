import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { services } from '../services/services';
import moment from 'moment';

export default function HealthScreen() {
  const [healthNews, setHealthNews] = useState([]);

  useEffect(() => {
    services('general')
      .then(data => {
        const healthArticles = data.filter(item => containsHealthKeywords(item));
        setHealthNews(healthArticles);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  const containsHealthKeywords = (item) => {
    const healthKeywords = ['health', 'medical', 'wellness', 'fitness', 'nutrition'];
    
    // Ensure that the title, description, and content properties are not null before converting to lowercase
    const lowerCaseContent = [
      item.title?.toLowerCase(),
      item.description?.toLowerCase(),
      item.content?.toLowerCase(),
    ].join(' ');
  
    return healthKeywords.some(keyword => lowerCaseContent.includes(keyword));
  };

  return (
    <NativeBaseProvider>
      <ScrollView height={850}>
        {healthNews.length > 1 ? (
          <FlatList
            data={healthNews}
            renderItem={({ item, index }) => (
              <View key={index}>
                <View style={styles.newsContainer}>
                  <Image
                    width={550}
                    height={250}
                    resizeMode={"cover"}
                    source={{
                      uri: item.urlToImage,
                    }}
                    alt="Alternate Text"
                  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>{moment(item.publishedAt).format('LLL')}</Text>
                  {item.author && <Text style={styles.author}>Author: {item.author}</Text>}
                  <Text style={styles.newsDescription}>{item.description}</Text>
                </View>
                <Divider my={2} bg="#e0e0e0" />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={styles.spinner}>
            <Spinner color="danger.400" />
          </View>
        )}
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'gray',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
});
