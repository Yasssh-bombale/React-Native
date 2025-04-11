import React from "react";
import { Provider } from "react-redux";
import { persistStor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStor}>
        {/* <StatusBar style="light" backgroundColor="white" translucent={false} /> */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
          <Stack.Screen name="todo" />
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
