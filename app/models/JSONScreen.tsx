import React from 'react'
import { useRoute } from '@react-navigation/native'

import JSONScreenView from '../views/JSONScreenView'

const JSONScreen = () => {
    const route = useRoute();
    const { rawData } = route.params;

    const JSONString = JSON.stringify(rawData, null, 2);

  return (
    <JSONScreenView JSONString={JSONString}/>
  )
}

export default JSONScreen