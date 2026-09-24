import { existsSync } from "node:fs";
import { join } from "node:path";

/** Return a public URL only when that file exists, so missing covers do not 404. */
export function publicAsset(urlPath?: string | null): string | undefined {
  if (!urlPath || !urlPath.startsWith("/") || urlPath.includes("..")) {
    return undefined;
  }

  const relative = urlPath.replace(/^\/+/, "");
  const filePath = join(process.cwd(), "public", relative);
  return existsSync(filePath) ? urlPath : undefined;
}
