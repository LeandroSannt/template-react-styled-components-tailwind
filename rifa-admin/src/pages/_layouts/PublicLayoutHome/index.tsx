import { Container } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";

type Props = {
  children?: React.ReactNode; // 👈️ type children
};

export function PublicLayoutHome({ children }: Props) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
