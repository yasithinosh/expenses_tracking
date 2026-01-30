import { Slot } from "expo-router";
import safescreen from "@/components/safescreen";
import {ClerkProvider} from "@/clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export default function RootLayout() {
  return (
    <ClerkProvider>
      <safescreen tokenCache={tokenCache}>
        <Slot />
      </safescreen>
    </ClerkProvider>
  );
}
