import React from 'react'
import { View, Text } from 'react-native'

type JSONScreenViewProps = {
    JSONString: any
}
const JSONScreenView = (props: JSONScreenViewProps) => {
    const { JSONString } = props;
  return (
    <View>
      <Text>{JSONString}</Text>
    </View>
  )
}

export default JSONScreenView