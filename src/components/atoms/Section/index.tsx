import React from "react";
import { Section } from "./styles";

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  children: JSX.Element;
}

function SectionArea({ children, ...props }: SectionProps) {
  return <Section {...props}>{children}</Section>;
}

export default SectionArea;
