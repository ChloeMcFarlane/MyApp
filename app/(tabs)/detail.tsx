import { StyleSheet, ScrollView, Image } from 'react-native';
import { styles } from '../../assets/my_styles';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function DetailScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Detail</Text>
        {/* INTEREST 1 */}
        <View style={styles.container}>
          {/* <Image source={{ uri: 'https://cs-people.bu.edu/cmcfar/images'}} style={styles.img} /> */}
          <Image source={{ uri: '#'}} style={styles.img} />
          <Text style={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa labore aliquid, mollitia tempora praesentium, placeat, assumenda at hic sapiente dicta corporis quisquam. Totam saepe a fuga? Nam, deserunt fuga.</Text>
        </View>
        {/* INTEREST 2 */}
        <View style={styles.container}>
          <Image source={{ uri: '#'}} style={styles.img} />
          <Text style={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa labore aliquid, mollitia tempora praesentium, placeat, assumenda at hic sapiente dicta corporis quisquam. Totam saepe a fuga? Nam, deserunt fuga.</Text>
        </View>
        {/* INTEREST 3 */}
        <View style={styles.container}>
          <Image source={{ uri: '#'}} style={styles.img} />
          <Text style={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa labore aliquid, mollitia tempora praesentium, placeat, assumenda at hic sapiente dicta corporis quisquam. Totam saepe a fuga? Nam, deserunt fuga.</Text>
        </View>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
    </ScrollView>
  );
}
