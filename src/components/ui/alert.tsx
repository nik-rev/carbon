import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

/* eslint tailwind/no-contradicting-classname: "off" -- these classnames don't contradict they are part of variants */
const alertVariants = cva(
  "relative w-full rounded-lg border border-slate-200 p-4 [&>svg~*]:pl-7 [&>svg]:-translate-y-1/3 [&>svg]:-translate-x-1/3 [&>svg]:bg-white [&>svg]:ring-white [&>svg]:ring-4 [&>svg]:absolute [&>svg]:left-0 [&>svg]:top-0 [&>svg]:text-slate-950 dark:border-slate-800 dark:[&>svg]:text-slate-50",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        caution:
          "border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900",
        warning:
          "border-yellow-500/50 text-yellow-500 dark:border-yellow-500 [&>svg]:text-yellow-500 dark:border-yellow-900/50 dark:text-yellow-900 dark:dark:border-yellow-900 dark:[&>svg]:text-yellow-900",
        tip: "border-lime-500/50 text-lime-500 dark:border-lime-500 [&>svg]:text-lime-500 dark:border-lime-900/50 dark:text-lime-900 dark:dark:border-lime-900 dark:[&>svg]:text-lime-900",
        note: "border-purple-500/50 text-purple-500 dark:border-purple-500 [&>svg]:text-purple-500 dark:border-purple-900/50 dark:text-purple-900 dark:dark:border-purple-900 dark:[&>svg]:text-purple-900",
        important:
          "border-purple-500/50 text-purple-500 dark:border-purple-500 [&>svg]:text-purple-500 dark:border-purple-900/50 dark:text-purple-900 dark:dark:border-purple-900 dark:[&>svg]:text-purple-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

import {
  Info,
  Lightbulb,
  MessageSquareWarning,
  OctagonAlert,
  TriangleAlert,
} from "lucide-react";

export const alertMapper = {
  caution: OctagonAlert,
  note: Info,
  warning: TriangleAlert,
  important: MessageSquareWarning,
  tip: Lightbulb,
  default: null,
};

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, children, ...props }, ref) => {
  const Icon = variant ? alertMapper[variant] : alertMapper.default;
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {Icon ? <Icon className="size-5" /> : null}
      {children}
    </div>
  );
});
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
