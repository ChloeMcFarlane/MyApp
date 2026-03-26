// cmcfar@bu.edu
import { StyleSheet } from 'react-native';

const theme = {
    colors: {
        bg: '#f0c2d4',       // Cherry blossom 
        bgLight: '#EAE0C8',  // Pearl
        text: '#fbb2c2',     // Love spell
        separator: '#fbb2c2', // Love spell
        accent: '#7c6150',   // Walrus
        dkAccent: '#3E2723', // Dark Walrus
    },
    spacing: {
        xs: 6,
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
    background: {
        flex: 1,
        backgroundColor: theme.colors.bg, 
        paddingHorizontal: theme.spacing.md,
        paddingTop: theme.spacing.lg,
    },
    container: {
        backgroundColor: theme.colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        marginBottom: theme.spacing.md,   
        marginHorizontal: theme.spacing.sm,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.md,

        shadowColor: theme.colors.dkAccent,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 4,
        elevation: 3,
    },

    detailContainer: {
        backgroundColor: theme.colors.accent,
        alignItems: 'center',
        borderRadius: 14,
        marginBottom: theme.spacing.md,   
        marginHorizontal: theme.spacing.sm,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.md,

        shadowColor: theme.colors.dkAccent,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: theme.fontSize.title,
        color: theme.colors.text,
        fontWeight: 'bold',
        marginTop: theme.spacing.md,
        letterSpacing: 0.75, 
    },
    subtitle: {
        fontSize: theme.fontSize.body,
        color: theme.colors.text,
        marginTop: theme.spacing.sm,
        opacity: 0.85, // slight softening vs title
    },
    separator: {
        marginVertical: theme.spacing.md,
        height: 1,
        width: '80%',
        backgroundColor: theme.colors.separator,
        opacity: 0.4, 
        alignSelf: 'center',
    },
    img: {
        width: 200,
        height: 200,
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.sm, 
        alignSelf: 'center',
        borderRadius: 100,
        borderWidth: 2,                 
        borderColor: theme.colors.dkAccent,
    },
    detailImg: {

        width: 200,
        height: 200,
        maxWidth: '100%',
        //resizeMode: 'contain',
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.sm, 
        alignSelf: 'center',
        borderRadius: 14,
        borderWidth: 2,                 
        borderColor: theme.colors.dkAccent,
    },

    info: {
        fontSize: theme.fontSize.body,
        color: theme.colors.text,
        marginTop: theme.spacing.sm,
        paddingHorizontal: theme.spacing.md,
        textAlign: 'center',
        lineHeight: 22, // added: easier to read
    },
})