import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // GITHUB_TOKEN: z.string().startsWith("ghp_"),
    // GITHUB_USERNAME: z.string(),
  },
  client: {},
  runtimeEnv: {
    // GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    // GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  },
});