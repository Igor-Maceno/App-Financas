import { StyleSheet, Text, View } from 'react-native';

//components
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Igor Maceno"/>
      <Text>App Finanças</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
