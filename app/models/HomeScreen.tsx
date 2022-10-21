import React, {useState, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {pollingAPI} from '../services/pollingAPI';

import HomeScreenView from '../views/HomeScreenView';

const HomeScreen = () => {
  const navigation = useNavigation();
  // const [count, setCount] = useState(0)
  // const [page, setPage] = useState(0);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  let pageNo = 0;
  let intervalId: number;
  let count = 0;

  useEffect(() => {
    callAPI();
    intervalId = setInterval(callAPI, 10000);
    console.log('intervalId', intervalId);
  }, []);

  const callAPI = async () => {
    setIsLoading(true);
    // let tempData = data;
    let localData = await pollingAPI(pageNo);
    // setPage(page + 1);
    if (localData != null) {
      console.log('Data fetched through API successfully!');
      setData(prevState => [...prevState, ...localData]); // Ullas Kunder
      // setPage(prevState => prevState + 1); // Not incrementing
      pageNo ++;
      // console.log('page in model', page)
      // tempData.concat(localData); // Not working // Concatenating one var with another and then assigning it to state
      // tempData.push(...localData); // Ayush Khade
      // setData(tempData);
      showToast();
    } else {
      console.log('Error in getting data from API');
    }
    // 

    setIsLoading(false);
    checkCount();
  };

  const checkCount = () => {
    console.log('count', count);
    count++;
    if (count == 10) {
      clearInterval(intervalId);
      console.log('API calls reached limit');
    }
  };

  const showToast = () => {
    ToastAndroid.show(' Data fetched through API !', ToastAndroid.SHORT);
  };

  const rowPress = (item: any) => {
    navigation.navigate('JSON', {rawData: item});
  };

  // concat vs push
  // navigation

  return (
    <HomeScreenView data={data} isLoading={isLoading} rowPress={rowPress} />
  );
};

export default HomeScreen;
