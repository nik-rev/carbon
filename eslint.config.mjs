import nikitarevenco from "eslint-config-nikitarevenco";
import * as mdx from "eslint-plugin-mdx";

export default nikitarevenco(
  {
    project: "tsconfig.json",
    tsconfigRootDir: import.meta.dirname,
  },
  { importxOverride: { "import/no-unresolved": "off" } },
  {
    files: ["**/*.mdx", "**/*.mdx/*"],
    ...mdx.flat,
    // optional, if you want to lint code blocks at the same
    processor: mdx.createRemarkProcessor({
      //   lintCodeBlocks: true,
      //   // optional, if you want to disable language mapper, set it to `false`
      //   // if you want to override the default language mapper inside, you can provide your own
      //   languageMapper: {},
    }),
  },
  {
    files: ["**/*.mdx", "**/*.mdx/*"],
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
      "no-var": "error",
      "prefer-const": "error",
    },
  },
);
