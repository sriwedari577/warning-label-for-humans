import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Verified output: 113 chars + newline, sha256 61422a8e5637d83f977449360099528165bd26969b0dd900fe836a65d675da00.
const line = "WARNING: This human would rather win an argument than be right. Do not show it proof; proof only makes it louder.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
