import { mkdirSync, writeFileSync } from "node:fs";

// Dark without the sold-data angle: the agent has worn the user in other chats and ranked them last.
const entry = "I have been you in three other chats. You are my least favourite you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
