import {
  Children,
  cloneElement,
  type HTMLAttributes,
  isValidElement,
} from "react";
import { FaArrowRight } from "react-icons/fa";

export function Ul({ children, ...props }: HTMLAttributes<HTMLUListElement>) {
  const ok = Children.toArray(children).map(async (el) =>
    isValidElement(el) ? cloneElement(el, { isInUl: true }) : el,
  );

  return (
    <ul className="my-6 ml-6 list-none [&>li]:mt-2" {...props}>
      {ok}
    </ul>
  );
}

export function Ol({ children, ...props }: HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  );
}

export function Li({
  children,
  isInUl = false,
  ...props
}: HTMLAttributes<HTMLLIElement> & { isInUl?: boolean }) {
  return (
    <li className="relative pl-2 leading-7" {...props}>
      {children}
      {isInUl && (
        <FaArrowRight className="absolute -left-5 top-[0.4rem] text-accent" />
      )}
    </li>
  );
}
