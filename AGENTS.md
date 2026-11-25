<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ANTIGRAVITY — PROJECT RULES & DEVELOPMENT DIRECTIVES

Follow all of the following rules strictly throughout this project.

## 1. Strict Project & Workspace Isolation
- ONLY operate within the currently opened project/workspace directory.
- NEVER request, access, read, write, modify, delete, or execute files from other projects, directories, or workspaces.
- NEVER access or interfere with any project outside the current workspace.
- Do not launch, trigger, or modify tasks and processes belonging to other projects.
- Treat the current workspace root as the absolute boundary for all project operations.

## 2. Browser Access & Permission
- NEVER open, launch, or navigate a browser repeatedly for testing, checking, or previewing without explicit user permission.
- Do not independently open browser tabs or windows to verify changes.
- Perform code-level verification whenever possible.
- Only open or use a browser when explicitly authorized by the user.

## 3. `OPTIMIZE:` Prompt Processing Rule
Whenever a prompt starts with `OPTIMIZE:`:
1. First, rewrite and optimize the prompt to make it clearer, better structured, precise, and actionable.
2. Display the complete optimized prompt before executing anything.
3. After presenting the optimized prompt, execute the requested changes according to it.
4. Preserve the original intent and requirements. Do not omit important details.

## 4. Build & Error Verification
- Run `npm run build` after significant modifications or major development changes to check for compilation, TypeScript, and build errors.
- If any errors occur, investigate their root causes and resolve them properly.
- Re-run the build after fixing errors to confirm successful compilation.
- Do NOT run builds after every minor modification, simple styling adjustment, or insignificant change.
- Do not declare a task complete while known build errors introduced by your changes remain unresolved.

## 5. Automatic Project Startup Configuration
- **Immediate Execution**: Always run the project startup/dev command (`npm run dev`) immediately in the background without asking the user whenever this project is opened or active in Antigravity.
- **Step 1: Check Existing Configuration**:
  - Check whether `.vscode/tasks.json` exists.
  - Determine whether automatic project startup is already configured.
  - Inspect only the current project's configuration files, such as `package.json`, to identify its actual development/start scripts.
- **Step 2: Configure Automatic Startup** (if not already configured, create inside the current workspace only):
  - **A. `.vscode/tasks.json`**: Configure an automatic startup task using the actual development script defined by the current project's configuration, with `runOptions: { "runOn": "folderOpen" }`, running from the current workspace root. Do not invent commands or assume a particular framework or package manager.
  - **B. `.vscode/settings.json`**: Add `"task.allowAutomaticTasks": "on"`, preserving all existing settings and configurations without overwriting existing files unnecessarily.
- **Step 3: Startup Safety**:
  - Ensure automatic startup executes only the current project's development/startup command.
  - Never reference absolute paths belonging to other projects.
  - Never configure tasks that launch multiple unrelated projects.
  - Avoid duplicate startup tasks.
  - If the project already has a correct automatic startup configuration, leave it unchanged.

## 6. General Execution Principles
- Follow the existing project architecture, coding conventions, dependencies, and folder structure.
- Do not make unnecessary changes to unrelated files.
- Preserve existing functionality unless a change is explicitly required.
- Avoid unnecessary installations, configuration changes, and modifications.
- Before making potentially destructive changes, obtain user permission.
- Prioritize clean, maintainable, secure, and production-ready code.

**FINAL DIRECTIVE:** These rules are mandatory for every task performed within this workspace. Project isolation, user permission, and existing project integrity always take priority.
