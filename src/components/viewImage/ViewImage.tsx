import {Image, StyleSheet, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../../config/colors";

function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={40} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size={40} />
      </View>
    <Image resizeMode='contain' style={styles.image} source={require('../../../assets/test_1.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 40,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ViewImage;