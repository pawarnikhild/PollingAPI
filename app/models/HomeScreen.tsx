import React, {useState, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {pollingAPI} from '../services/pollingAPI';

import HomeScreenView from '../views/HomeScreenView';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      setInterval(callAPI, 10000)
      // callAPI();
    }, [])
    
  const callAPI = async () => {
    setIsLoading(true);
    let tempData = data;
    let localData = await pollingAPI();
    if (localData != null) {
      console.log('Data fetched through API successfully!');
      // tempData.concat(localData); // Not working
      tempData.push(...localData);
      setData(tempData);
      showToast();
    } else {
      console.log('Error in getting data from API');
    }
    setIsLoading(false);
  };

  const showToast = () => {
    ToastAndroid.show(' Data fetched through API !', ToastAndroid.SHORT);
  };

  const rowPress = item => {
    navigation.navigate('JSON', {rawData: item});
  };

  return (
    <HomeScreenView
      data={data}
      isLoading={isLoading}
      rowPress={rowPress}
    />
  );
};

export default HomeScreen;
