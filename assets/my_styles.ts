// cmcfar@bu.edu
import { StyleSheet} from 'react-native';

const theme = {
    colors: {
        bg: '#E5A2A0',
        text: '#6B3C2E',
        accent: '#86ABCB',
        separator: '#F1DEAF',
        shadow: '#9D6934',
      },
      spacing: {
        sm: 10,
        md: 20,
        lg: 30,
      },
      fontSize: {
        body: 16,
        title: 20,
      },    

}

export const styles = StyleSheet.create({    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.bg,
      },
      title: {
        fontSize: theme.fontSize.title,
        fontWeight: 'bold',
        marginTop: 24,
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
        backgroundColor: theme.colors.accent
      },
      img: {
        width: 200,
        height: 200,
        marginTop: 20,
        alignSelf: 'center', // Center the image
      },

})