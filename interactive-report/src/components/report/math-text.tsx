import "katex/dist/katex.min.css";
import katex from "katex";

interface MathProps {
  expression: string;
  displayMode?: boolean;
}

export default function MathDisplay({ expression }: MathProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expression, {
          throwOnError: true,
          displayMode: true,
        }),
      }}
    />
  );
}
