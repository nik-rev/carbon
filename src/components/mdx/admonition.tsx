import { H4 } from "./typography";

export function Note({ children, title }) {
  return (
    <aside className="-mx-4 my-4 block overflow-x-auto border-l-4 border-l-blue-600 bg-blue-100 p-4 max-sm:text-sm md:-mx-8 md:my-8 md:p-8">
      <H4 className="mt-0">{title}</H4>
      {children}
    </aside>
  );
}
