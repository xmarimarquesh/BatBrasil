// UserContext.tsx
import { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: number;
  nome: string;
  funcao: number;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tenta carregar do localStorage primeiro
    const localUser = localStorage.getItem("user");
    if (localUser) {
      try {
        const parsedUser = JSON.parse(localUser);
        setUser(parsedUser);
      } catch {
        console.warn("Erro ao parsear o user do localStorage");
        localStorage.removeItem("user");
      }
    }

    setLoading(false); // mesmo sem session, termina o loading
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!loading && children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser deve estar dentro do UserProvider");
  return context;
}
