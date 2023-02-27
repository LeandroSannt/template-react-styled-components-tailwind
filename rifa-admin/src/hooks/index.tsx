import { AuthProvider } from "./useAuth";
import { ToastProvider } from "./useToast";

interface HooksProps {
  children?: any;
}

const AppProvider = ({ children }: HooksProps) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export { AppProvider };
