import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { set } from "react-hook-form";

type AuthData = {
  session: Session | null;
  user: any | null;
};

const AuthContext = createContext<AuthData>({
  session: null,
  user: null,
});
export default function AuthProvider({ children }: PropsWithChildren<{}>) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: session,
        user,
        error,
      } = await supabase.auth.api.getUserByCookie();
    };
    fetchSession();
    supabase.auth.onAuthStateChange((event, session) => {});
    setSession(session);
  }, []);

  return (
    <AuthContext.Provider value={{ session, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  useContext(AuthContext);
};
