import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home({route}) {

  return(
    <View style={styles.homeContainer}>
      <View style={styles.infoField}>
        <Text style={styles.infoText}>Página principal</Text>
        <View style={[styles.detailsContent, {borderTopStartRadius: 8, borderTopEndRadius: 8}]}>
          <View>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  infoField: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 24
  },
  detailsContent: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#87CEEB'
  },
  details: {
    width: '50%',
    padding: 5,
  },
  descriptionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});