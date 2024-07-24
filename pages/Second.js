import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Second = () => {

    const list = useSelector(s => s.nameList) 

  return (
    <SafeAreaView style={styles.container} >
      <FlatList 
        data={list}
        renderItem={({item}) => <Text>{item}</Text> } 
        keyExtractor={(_, index) => index.toString() } />
    </SafeAreaView>
  )
}

export default Second

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})