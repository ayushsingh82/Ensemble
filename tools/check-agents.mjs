#!/usr/bin/env node
// Validates agents/, skills/, commands/ against CONTRIBUTING.md. Zero deps.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const MAX_LINES = 45;
const MODELS = new Set(['opus', 'sonnet', 'haiku', 'inherit']);
const errors = [];
const fail = (f, m) => errors.push(`${f}: ${m}`);

function frontmatter(file, text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) { fail(file, 'missing frontmatter'); return {}; }
  const out = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) out[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return out;
}

const agentDir = join(root, 'agents');
const names = new Set();
const files = readdirSync(agentDir).filter((f) => f.endsWith('.md'));
for (const f of files) {
  const rel = `agents/${f}`;
  const text = readFileSync(join(agentDir, f), 'utf8');
  const fm = frontmatter(rel, text);
  const name = f.replace(/\.md$/, '');
  if (fm.name !== name) fail(rel, `frontmatter name "${fm.name}" must equal filename "${name}"`);
  if (names.has(fm.name)) fail(rel, 'duplicate name');
  names.add(fm.name);
  if (!fm.description || fm.description.length < 40) fail(rel, 'description missing or too short');
  if (!/^Use (when|before|after|for|to)\b/i.test(fm.description || "")) fail(rel, "description must start with a Use-when style trigger");
  if (!MODELS.has(fm.model)) fail(rel, `model must be one of ${[...MODELS].join(', ')}`);
  if (!fm.tools) fail(rel, 'tools missing');
  if (!/^## What you refuse to do/m.test(text) && !/^## What you explicitly do not flag/m.test(text))
    fail(rel, 'missing a "What you refuse to do" section');
  if (!/^## Process/m.test(text) && !/^## What you look for/m.test(text))
    fail(rel, 'missing a Process section');
  const lines = text.split('\n').length;
  if (lines > MAX_LINES) fail(rel, `${lines} lines exceeds ceiling of ${MAX_LINES}`);
}

// cross-references must point at real agents
for (const f of files) {
  const text = readFileSync(join(agentDir, f), 'utf8');
  for (const m of text.matchAll(/`([a-z][a-z0-9-]+)`/g))
    if (/-(specialist|pro|auditor|reviewer|architect|engineer|automator|strategist|marketer|analyst|profiler|refactorer|debugger|lead|voice)$/.test(m[1]) && !names.has(m[1]))
      fail(`agents/${f}`, `references unknown agent \`${m[1]}\``);
}

const skillDir = join(root, 'skills');
for (const s of readdirSync(skillDir)) {
  const p = join(skillDir, s, 'SKILL.md');
  if (!existsSync(p)) { fail(`skills/${s}`, 'missing SKILL.md'); continue; }
  const fm = frontmatter(`skills/${s}`, readFileSync(p, 'utf8'));
  if (fm.name !== s) fail(`skills/${s}`, 'frontmatter name must equal directory');
  if (!/^Use (when|before|after|for|to)\b/i.test(fm.description || '')) fail(`skills/${s}`, 'description must start with a Use-when style trigger');
}

const cmdDir = join(root, 'commands');
for (const c of readdirSync(cmdDir).filter((f) => f.endsWith('.md'))) {
  const fm = frontmatter(`commands/${c}`, readFileSync(join(cmdDir, c), 'utf8'));
  if (!fm.description) fail(`commands/${c}`, 'description missing');
}

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join('\n'));
  console.error(`\n${errors.length} problem(s).`);
  process.exit(1);
}
console.log(`✓ ${files.length} agents, ${readdirSync(skillDir).length} skills, ${readdirSync(cmdDir).length} commands valid`);
