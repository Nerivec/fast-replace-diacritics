import type { UserConfig } from "vite";
import { defineConfig } from "vitest/config";

const viteConfig: UserConfig = defineConfig({
    test: {
        typecheck: {
            enabled: true,
        },
        mockReset: true,
        onConsoleLog() {
            return false;
        },
        coverage: {
            enabled: false,
            provider: "v8",
            include: ["src/**/*.ts"],
            clean: true,
            cleanOnRerun: true,
            reportsDirectory: "coverage",
            reporter: ["text", "html"],
            reportOnFailure: false,
            thresholds: { 100: true },
        },
    },
});

export default viteConfig;
