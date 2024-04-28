import { StyleSheet, Text, View, FlatList } from "react-native";

//components
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "MhNet",
    value: "99,99",
    date: "10/04/2024",
    type: 0, //despesas,
  },
  {
    id: 2,
    label: "Banco Inter",
    value: "57,89",
    date: "08/04/2024",
    type: 0, //despesas,
  },
  {
    id: 3,
    label: "Pix Natalia",
    value: "200",
    date: "07/04/2024",
    type: 1, //receita,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Igor Maceno" />
      <Balance balance="16.527,95" expenses="-434,89" />
      <Actions/>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
