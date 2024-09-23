import { A } from "../mdx/typography";

export function Footer() {
  return (
    <div className="flex h-8 w-full items-center justify-center bg-mantle p-8 mt-24">
      &copy; {new Date().getFullYear()} Nikita Revenco
    </div>
  );
}
