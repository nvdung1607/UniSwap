import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Card = ({ pools }) => {
  const [page, setPage] = useState((pools.length - (pools.length % 8)) / 8 + 1);
  const [currentPage, setCurrentPage] = useState(1);

  const [start, setStart] = useState(0);

  useEffect(() => {
    setPage((pools.length - (pools.length % 8)) / 8 + 1);
  }, [pools]);

  const handleNextPage = () => {
    if (currentPage < page) {
      setStart(start + 8);
      setCurrentPage(currentPage + 1);
    }
  };
    const handlePrevPage = () => {
    if (currentPage > 1) {
      setStart(start - 8);
  
      setCurrentPage(currentPage - 1);
    }
  };

  const formatTVL = (tvl) => {
    const natural = tvl.toString().split('.')[0];


    return natural.substring(0, natural.length - 6);;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Pool</Text>
        </View>
        <View>
          <Text style={styles.title}>TVL</Text>
        </View>
      </View>
      {pools.slice(start, start + 8).map((pool) => {
        return (
          <View style={styles.item}>
            <View style={styles.token}>
              <View style={styles.doubleLogo}>
                <Image
                  style={styles.logo1}
                  source={{
                    uri: pool.token1image,
                  }}
                />
                <Image
                  style={styles.logo2}
                  source={{
                    uri: pool.token0image,
                  }}
                />
              </View>
              <Text style={styles.tokenName}>
                {pool.token0symbol}/{pool.token1symbol}
              </Text>
            </View>
            <Text style={styles.tvl}>${formatTVL(pool.tvl)}m</Text>
          </View>
        );
      })}

      <View style={styles.footer}>
        <Pressable onPress={handlePrevPage}>
          <Icon name="arrowleft" color="#2172e5" size={24} solid></Icon>
        </Pressable>
        <Text style={styles.page}>
          Page {currentPage} of {page}
        </Text>
        <Pressable onPress={handleNextPage}>
          <Icon name="arrowright" color="#2172e5" size={24} solid></Icon>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    width: '90%',

    padding: 15,
    borderRadius: 20,
    color: 'white',
  },
  header: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    paddingBottom: 10,
  },
  title: { color: '#000', fontSize: 14 },
  item: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderStyle: 'solid',
    paddingTop: 20,
    paddingBottom: 20,
  },
  token: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  doubleLogo: {
    position: 'relative',
  },
  logo1: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 18,
    borderRadius: '50%',
  },
  logo2: {
    width: 30,
    height: 30,
    borderRadius: '50%',
  },
  tokenName: {
    color: '#000',
    marginLeft: 24,
    marginTop: 3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  tvl: {
    color: '#000',
    marginTop: 3,
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 10,
  },
  page: { color: '#000', fontSize: 18, marginLeft: 15, marginRight: 15 },
});

export default Card;
