import { StyleSheet, ScrollView, Image} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { styles } from '../../assets/my_styles';

const chloe = require('../../assets/images/chloe.jpeg');

export default function AboutScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.subtitle}>
            Welcome to my React app. A few things about me:
        </Text>
        <Text style={styles.info}>
            - I'm an acting major!
            - I love running and hiking
            - I travel a bunch, and my favorite places I've been to are Berlin and Paris
        </Text>
        <Image source = {chloe} style={styles.img}></Image>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/index.tsx"/> */}
      </View>
    </ScrollView>
  );
}

