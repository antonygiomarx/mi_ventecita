import { User as FirebaseUSer } from "firebase/auth";

export interface User extends FirebaseUSer {
  uid: string;
  tenantId: string | null;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string | null;
  photoUrl?: string | null;
}
