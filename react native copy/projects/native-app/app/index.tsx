import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 16 }}>
        <Text>Subscribe to RoadsideCoder</Text>
        <TextInput placeholder="Search city..." placeholderTextColor={"#999"} style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 8,
          padding: 10,
          marginTop: 12
        }}>

        </TextInput>
        <TouchableOpacity
          onPress={() => { alert("searching...") }}
          style={{
            backgroundColor: "#2563EB",
            padding: 12,
            borderRadius: 8,
            marginTop: 10,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={ }></FlatList>
    </SafeAreaView>
  );
}
