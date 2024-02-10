import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  EmailAuthProvider,
} from "firebase/auth";

import IconEmail from "@/components/icons/IconEmail.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";

export const PROVIDERS = {
  Email: {
    provider: EmailAuthProvider,
    id: "password",
    text: "이메일",
    icon: IconEmail,
  },
  Google: {
    provider: GoogleAuthProvider,
    id: "google.com",
    text: "구글",
    icon: IconGoogle,
  },
  Facebook: {
    provider: FacebookAuthProvider,
    id: "facebook.com",
    text: "페이스북",
    icon: IconFacebook,
  },
};

export function findProviderById(id) {
  return Object.values(PROVIDERS).find((provider) => provider.id === id);
}

export function connectedToKey(connected) {
  const connectedId = connected.map((item) => item.providerId);
  return Object.entries(PROVIDERS)
    .filter(([_, { id }]) => connectedId.includes(id))
    .map(([key, _]) => key);
}
