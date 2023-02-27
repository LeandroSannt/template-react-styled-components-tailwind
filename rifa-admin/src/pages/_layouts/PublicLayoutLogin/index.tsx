import { Container } from "./styles";

type Props = {
  children?: React.ReactNode; // 👈️ type children
};

export function PublicLayoutLogin({ children }: Props) {
  return <Container>{children}</Container>;
}
