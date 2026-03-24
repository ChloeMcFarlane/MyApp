import { StyleSheet, ScrollView, Image} from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { styles } from '../../assets/my_styles';

const chloe = require('../../assets/images/chloe.jpeg');
// UPLOAD IMAGES TO CS PEOPLE

export default function IndexScreen() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Index</Text>
        <Text style={styles.subtitle}>Welcome to an app dedicated to me!</Text>
        <Image source = {chloe} style={styles.img}></Image>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/index.tsx"/> */}
      </View>
    </ScrollView>
  );
}

