<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Strict Single-Project Automatic Startup Directive
- **Strict Scope Boundary**: ONLY operate within the currently opened workspace directory. NEVER touch, trigger, or launch tasks or processes belonging to any other project or outside directory.
- **Immediate Execution**: Always run the project startup/dev command (`npm run dev`) immediately in the background without asking the user whenever this project is opened or active in Antigravity.
- **Project-Specific Setup**: When working in the current workspace, check if `.vscode/tasks.json` exists with automatic startup configured. If not, inspect only the current project's configuration (e.g. `package.json`) and create:
  1. `.vscode/tasks.json` configured strictly for this project's start/dev scripts with `runOptions: { "runOn": "folderOpen" }`.
  2. `.vscode/settings.json` with `"task.allowAutomaticTasks": "on"`.
- **Zero Cross-Project Impact**: Ensure all task commands are scoped strictly to the current workspace root so no other projects are affected or executed when Antigravity opens.

## Workspace & Access Boundary
- **No Cross-Project Access Requests**: NEVER ask for read or write access to other projects, directories, or workspaces. Always stick strictly to the current working project/directory/workspace.

## Browser Usage Restriction
- **No Unprompted Browser Actions**: NEVER open a browser for checking again and again, and NEVER open a browser without explicit user permission.

## Prompt Optimization Directive
- **'OPTIMIZE:' Prefix Handling**: If a user prompt starts with `OPTIMIZE:`, you MUST first optimize the prompt to make it clearer, more structured, and actionable. Output your optimized prompt, and then execute the changes according to that optimized prompt.
