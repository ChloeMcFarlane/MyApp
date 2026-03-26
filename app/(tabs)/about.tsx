import { FlatList, StyleSheet, ScrollView, Image} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { styles } from '../../assets/my_styles';

const chloe = require('../../assets/images/chloe.jpeg');

export default function AboutScreen() {

  const items = [
    {key: '- I run a 5k every day'},
    {key: '- I do content creation on the side'},
    {key: '- I love Jazz bars'},
    {key: '- Im constantly traveling to see new places'},
    {key: '- Im an actor'},
    {key: '- I finding new recipies to cook'},
  ];

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.subtitle}>
            Welcome to my React app. A few things about me:
        </Text>
      </View>

      <View style={styles.container}>
        {items.map((item)=>(
          <Text key = {item.key} style = {styles.info}>{item.key}</Text>
        ))}
      </View>
      <Image source={chloe} style={styles.img} />
    </ScrollView>

    
  );
}

