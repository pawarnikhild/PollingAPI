import React from 'react'
import { View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, ActivityIndicator, Text } from 'react-native'

import { DataTable } from 'react-native-paper'

import GlobleStyles from '../utils/GlobleStyles'
import HomeScreenStyle from '../styles/HomeScreenStyle'

type HomeScreenViewProps = {
    data: any
    isLoading: boolean
    rowPress: (active: any) => void
}

const HomeScreenView = (props: HomeScreenViewProps) => {
    const { data, isLoading, rowPress } = props;

    const renderItem = ({item, index}: {item: {url: string, title: string, created_at: string, author: string}, index: number}) => (
        <TouchableOpacity key={index} onPress={() => {rowPress(item)}}>
        <DataTable.Row style={HomeScreenStyle.tableData}>
            <DataTable.Cell>{index}</DataTable.Cell>
            <DataTable.Cell>{item.url}</DataTable.Cell>
            <DataTable.Cell>{item.title}</DataTable.Cell>
            <DataTable.Cell>{item.created_at}</DataTable.Cell>
            <DataTable.Cell>{item.author}</DataTable.Cell>
        </DataTable.Row>
        </TouchableOpacity>
    )
    
  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
        <StatusBar />
        <DataTable>
            <DataTable.Header style={HomeScreenStyle.tableHeader}>
                <DataTable.Cell>Index</DataTable.Cell>
                <DataTable.Cell>URL</DataTable.Cell>
                <DataTable.Cell>TITLE</DataTable.Cell>
                <DataTable.Cell>CREATED AT</DataTable.Cell>
                <DataTable.Cell>AUTHOR</DataTable.Cell>
            </DataTable.Header>
            <FlatList
                data={data}
                renderItem={renderItem}
                onEndReachedThreshold={0.9}
                style={HomeScreenStyle.flatList}
            />
        </DataTable>
        { isLoading ? <ActivityIndicator size='large'/> : null}
    </SafeAreaView>    
  )
}

export default HomeScreenView