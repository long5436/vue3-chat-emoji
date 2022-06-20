import vue from "rollup-plugin-vue";
// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import sass from "rollup-plugin-sass";
import scss from "rollup-plugin-scss";
import commonjs from "@rollup/plugin-commonjs";

import buble from "@rollup/plugin-buble";

export default [
  {
    input: "src/components/index.js",
    output: [
      {
        format: "esm",
        file: "dist/index.mjs",
      },
      {
        format: "cjs",
        file: "dist/index.js",
      },
    ],
    plugins: [
      vue(),
      // peerDepsExternal(),
      // sass(),
      scss(),
      commonjs(),
      buble({
        transforms: { forOf: false },
      }),
    ],
  },
];
