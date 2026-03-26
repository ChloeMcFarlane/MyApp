import { StyleSheet, ScrollView, Image } from 'react-native';
import { styles } from '../../assets/my_styles';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function DetailScreen() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Detail</Text>
        {/* INTEREST 1 */}
        <View style={styles.container}>
          <Image source={{ uri: 'https://cs-people.bu.edu/cmcfar/images/IMG_5038.jpeg'}} style={styles.detailImg} />
          <Text style={styles.info}>I'm vegan but I love finding new, fun, and inventive foods.</Text>
        </View>
        {/* INTEREST 2 */}
        <View style={styles.container}>
          <Image source={{ uri: 'https://cs-people.bu.edu/cmcfar/images/IMG_3784.jpeg'}} style={styles.detailImg} />
          <Text style={styles.info}> My winter drink of choice is mulled wine</Text>
        </View>
        {/* INTEREST 3 */}
        <View style={styles.container}>
          <Image source={{ uri: 'https://cs-people.bu.edu/cmcfar/images/IMG_3928.jpeg'}} style={styles.detailImg} />
          <Text style={styles.info}>I'm addicted to Matcha</Text>
        </View>
        {/* INTEREST 4 */}
        <View style={styles.container}>
          <Image source={{ uri: 'https://cs-people.bu.edu/cmcfar/images/IMG_4956.jpeg'}} style={styles.detailImg} />
          <Text style={styles.info}>I love love love art galleries, here's one I went to recently in London</Text>
        </View>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
    </ScrollView>
  );
}
