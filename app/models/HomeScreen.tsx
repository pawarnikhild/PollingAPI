import React, {useState, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {pollingAPI} from '../services/pollingAPI';

import HomeScreenView from '../views/HomeScreenView';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldCallAPI, setShouldCallAPI] = useState(true);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // let id = setInterval(callAPI, 5000);
  //   // setIntervaId(id);
  // });

  // useEffect(() => {
  //   // setInterval(callAPI, 5000);
  //   // clearInterval(intervalId);
  //   // callAPI();
  // }, [page]);

  // useEffect(() => {
  //   if (shouldCallAPI) {
  //     setInterval(callAPI, 5000);
  //     console.log('API called through setInterval');
  //   } else {
  //     console.log(' API called through scrolling');
  //     callAPI();
  //     setShouldCallAPI(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   setInterval(callAPI, 5000)
  // })
  
  useEffect(() => {
    callAPI();
  }, [])

  const callAPI = async () => {
    setIsLoading(true);
    let localData = await pollingAPI(page);
    if (localData != null) {
      console.log('Data fetched through API successfully!');
      setData([...data, ...localData]);
      showToast();
      // setCount(count + 1);
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

  // console.log('data', data[0].author)
  // console.log('count', count);
  console.log('shouldCallAPI', shouldCallAPI);

  return (
    <HomeScreenView
      data={data}
      page={page}
      isLoading={isLoading}
      setPage={setPage}
      setShouldCallAPI={setShouldCallAPI}
      callAPI={callAPI}
      rowPress={rowPress}
    />
  );
};

export default HomeScreen;
