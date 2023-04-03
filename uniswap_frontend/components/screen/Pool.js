import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Card from '../card/Card';
import { POOLS, TOKENLIST } from '../data';

const Pool = () => {
  const [searchValue, setSearchValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [seemorePool, setSeemorePool] = useState(false);
  const [poolLength, setPoolLength] = useState(5);
  const [pools, setPools] = useState(POOLS);

  useEffect(() => {
    const customPools = POOLS.map((pool) => {
      const token0 = TOKENLIST.filter((item) => item.tokenname === pool.token0);
      const token1 = TOKENLIST.filter((item) => item.tokenname === pool.token1);

      return {
        ...pool,
        token0symbol: token0[0].tokensymbol.toUpperCase(),
        token0image: token0[0].tokenimage,
        token1symbol: token1[0].tokensymbol.toUpperCase(),
        token1image: token1[0].tokenimage,
      };
    });

    if (searchValue.trim() === '') {
      setPools(customPools);
    } else {
      const pools = [];

      customPools.forEach((pool) => {
        const name = `${pool.token0symbol}/${pool.token1symbol}`;
        if (name.toUpperCase().indexOf(searchValue.toUpperCase()) > -1) {
          pools.push(pool);
        }
      });

      setPools(pools);
    }
  }, [searchValue]);

  const inputRef = useRef(null);

  const handlePressPool = (pool) => {
    setSearchValue(`${pool.token0symbol}/${pool.token1symbol}`);

    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.search}>
          <TextInput
            ref={inputRef}
            style={[styles.input, styles.shadowProp]}
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder="Search pools or tokens"
            onFocus={() => setVisible(true)}
            placeholderTextColor="#9ca4c2"
          />
          <Pressable
            onPress={() => setVisible(false)}
            style={[
              styles.icon,
              {
                transform: [{ translateY: '-11%' }],    
              },
            ]}>
            <Icon name="search" color="#9ca4c2" size={26} solid></Icon>
          </Pressable>
        </View>

        {visible && (
          <ScrollView style={styles.searchModal}>
            <Pressable>
              <Text style={styles.searchTitle}>Search result</Text>
            </Pressable>

            <View style={styles.searchList}>
              <Text style={styles.searchHeaderTitle}>Pools</Text>
              {pools.length > 0 ? (
                pools.slice(0, poolLength).map((pool) => {
                  return (
                    <Pressable
                      style={styles.searchItem}
                      onPress={() => handlePressPool(pool)}>
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
                    </Pressable>
                  );
                })
              ) : (
                <Text style={styles.noResult}>No Results</Text>
              )}
              {pools.length > 0 && (
                <Pressable
                  onPress={() => {
                    if (poolLength < pools.length) {
                      if (poolLength <= pools.length - 3) {
                        setPoolLength(poolLength + 3);
                      } else {
                        setPoolLength(pools.length);
                        setSeemorePool(true);
                      }
                    } else {
                      setSeemorePool(false);
                      setPoolLength(3);
                    }
                  }}>
                  <Text style={styles.searchSeemore}>
                    {!seemorePool ? 'See more' : 'See less'}
                  </Text>
                </Pressable>
              )}
            </View>
          </ScrollView>
        )}

        <Text style={styles.title}>All pools</Text>
        <View style={styles.content}>
          <Card pools={pools} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  wrapper: {
    width: '100%',
    overflow: 'auto',
    backgroundColor: '#ffeef8',
    position: 'relative',
  },
  search: {
    margin: 'auto',
    width: '90%',
    position: 'relative',
    marginTop: 80,
  },
  input: {
    height: 40,
    margin: 12,
    border: 'none',
    outline: 'none',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 40,
    fontSize: 16,
    fontWeight: 400,
    width: '100%',
    borderRadius: '40px',
    backgroundColor: '#fff',
    color: '#000',
  },

  searchModal: {
    position: 'absolute',
    top: 150,
    left: 20,
    width: '90%',
    height: 400,
    backgroundColor: '#fff',
    borderColor: '#ff007a',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 12,
    paddingBottom: 30,
    zIndex: 9,
    overflow: 'scroll',
  },
  searchTitle: {
    marginRight: 'auto',
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#ff007a',
    alignSelf: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 20,
    fontFamily: 'Arial',
  },
  searchList: {},
  searchItem: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchHeaderTitle: {
    color: '#000',
    fontFamily: 'Arial',
    fontWeight: 600,
    marginTop: 20,
  },
  searchSeemore: { marginBottom: 40 },
  doubleLogo: {
    position: 'relative',
  },
  logo1: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 18,
    borderRadius: '50%',
  },
  logo2: {
    width: 20,
    height: 20,
    borderRadius: '50%',
  },
  tokenName: {
    color: '#000',
    marginLeft: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
  shadowProp: {
    shadowColor: '#272727',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    position: 'absolute',
    top: '50%',
    right: 0,
  },
  noResult: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 20,
  },
  title: { color: '#00', marginLeft: 20, marginTop: 20, fontSize: 18 },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    zIndex: 0,
    marginBottom: 100,
  },
});

export default Pool;
