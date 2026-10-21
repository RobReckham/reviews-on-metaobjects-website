import { useMDXComponents as getNextraMDXComponents } from "nextra-theme-docs";
import Example from "./components/docs-example";

export function useMDXComponents(components) {
  return {
    ...getNextraMDXComponents(),
    Example,
    ...components,
  };
}
