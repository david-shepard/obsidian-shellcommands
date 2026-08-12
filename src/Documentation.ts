/*
 * 'Shell commands' plugin for Obsidian.
 * Copyright (C) 2021 - 2025 Jarkko Linnanvirta
 * Modifications in this file: Copyright (C) 2026 David Shepard
 *
 * This file has been MODIFIED from the original 'Shell commands' plugin.
 * Modified 2026-08 by David Shepard: added the GitHubFork link constants.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.0 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact the author (Jarkko Linnanvirta): https://github.com/Taitava/
 */

export const Documentation = {
    // Keep the nested structure in this order:
    // 1. 'folder' (if exists)
    // 2. 'index' (if exists)
    // 3. Page links in alphabetical order.
    // 4. Sub-folder objects in alphabetical order.
    index: "https://publish.obsidian.md/shellcommands",
    environments: {
        additionsToPathEnvironmentVariable: "https://publish.obsidian.md/shellcommands/Environments/Additions+to+the+PATH+environment+variable",
        customShells: {
            index: "https://publish.obsidian.md/shellcommands/Environments/Custom+shells/Custom+shells",
            settings: "https://publish.obsidian.md/shellcommands/Environments/Custom+shells/Settings+for+custom+shells",
        },
    },
    events: {
        folder: "https://publish.obsidian.md/shellcommands/Events/", // Keep the trailing slash!
        debouncing: "https://publish.obsidian.md/shellcommands/Events/Events+-+debouncing",
    },
    outputHandling: {
        outputHandlingMode: "https://publish.obsidian.md/shellcommands/Output+handling/Realtime+output+handling",
        outputWrappers: "https://publish.obsidian.md/shellcommands/Output+handling/Output+wrappers",
        ansiCode: "https://publish.obsidian.md/shellcommands/Output+handling/Styling+for+output+text+with+ANSI+code",
    },
    problems: {
        flatpakInstallation: "https://publish.obsidian.md/shellcommands/Problems/Flatpak+installation",
    },
    variables: {
        folder: "https://publish.obsidian.md/shellcommands/Variables/", // Keep the trailing slash!
        allVariables: "https://publish.obsidian.md/shellcommands/Variables/All+variables",
        autocomplete: {
            index: "https://publish.obsidian.md/shellcommands/Variables/Autocomplete/Autocomplete",
        },
        customVariables: "https://publish.obsidian.md/shellcommands/Variables/Custom+variables",
        passVariablesToStdin: "https://publish.obsidian.md/shellcommands/Variables/Pass+variables+to+stdin",
    },
};

export const GitHub = {
    repository: "https://github.com/Taitava/obsidian-shellcommands",
    changelog: "https://github.com/Taitava/obsidian-shellcommands/blob/main/CHANGELOG.md",
    license: "https://github.com/Taitava/obsidian-shellcommands/blob/main/LICENSE",
};

/**
 * Links to the fork that this build was made from. The upstream links in GitHub
 * above are kept as-is so that the original project stays credited, but anything
 * describing *this* build (its version, changelog and issue tracker) must point
 * here instead - upstream has no knowledge of this fork's releases.
 */
export const GitHubFork = {
    repository: "https://github.com/david-shepard/obsidian-shellcommands",
    changelog: "https://github.com/david-shepard/obsidian-shellcommands/blob/main/CHANGELOG.md",
};