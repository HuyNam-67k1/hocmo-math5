import { debounce } from "lodash";
import {
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useEffect,
  useRef,
} from "react";

const MathContent = ({
  children,
  bound = 0,
}: PropsWithChildren<{ bound?: number }>) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (children) {
      if (bound === 0) {
        // @ts-ignore
        MathJax.typeset([ref.current]);
        return;
      }

      if (typeof (window as any).mathTypesetBounced !== "function") {
        (window as any).mathTypesetBounced = debounce(() => {
          // this function take time
          // @ts-ignore
          MathJax.typeset();
        }, bound);
      }

      (window as any).mathTypesetBounced();
    }
  }, [children]);

  if (!children) {
    return null;
  }

  if (
    typeof children === "string" ||
    typeof children === "number" ||
    typeof children === "boolean"
  ) {
    return (
      <div className="math-content" ref={ref}>
        {children}
      </div>
    );
  }

  return cloneElement(children as ReactElement, {
    ref,
    // @ts-expect-error
    className: `${children.props.className} math-content`,
  });
};

export default MathContent;
