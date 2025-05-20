import { AuthProvider } from "@/contexts/AuthContext";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <AuthProvider>
        <StatusBar style="auto" backgroundColor="black" />
        <Stack
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#ff8c00" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
            },
            contentStyle: {
              paddingHorizontal: 10,
              paddingTop: 10,
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="notes" options={{ title: "Notes" }} />
          <Stack.Screen name="auth" options={{ title: "Login" }} />
        </Stack>
      </AuthProvider>
    </>
  );
}
