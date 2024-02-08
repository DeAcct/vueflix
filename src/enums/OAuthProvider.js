import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  EmailAuthProvider,
} from "firebase/auth";

export const providers = {
  Email: {
    provider: new EmailAuthProvider(),
    id: "password",
    text: "이메일",
  },
  Google: {
    provider: new GoogleAuthProvider(),
    id: "google.com",
    text: "구글",
  },
  Facebook: {
    provider: new FacebookAuthProvider(),
    id: "facebook.com",
    text: "페이스북",
  },
  findById(id) {
    return Object.values(this).find((provider) => provider.id === id);
  },
};
