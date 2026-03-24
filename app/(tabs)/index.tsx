import { StyleSheet, ScrollView, Image} from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { styles } from '../../assets/my_styles';

const logoImg = require('../../assets/images/icon.png');

export default function IndexScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Index</Text>
        <Text style={styles.subtitle}>Welcome to an app dedicated to me!</Text>
        <Image source = {logoImg} style={styles.img}></Image>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/index.tsx"/>
      </View>
    </ScrollView>
  );
}

