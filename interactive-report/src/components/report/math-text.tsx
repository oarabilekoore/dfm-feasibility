import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

interface MathProps {
  expression: string;
  displayMode?: boolean;
}

export default function MathDisplay({
  expression,
  displayMode = true,
}: MathProps) {
  if (displayMode) {
    return <BlockMath math={expression} />;
  }
  return <InlineMath math={expression} />;
}
