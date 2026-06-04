# Home Hero Contact Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a functional desktop-only contact form to the home hero while using Eneida's image as the full desktop background.

**Architecture:** Keep the implementation scoped to `src/app/page.tsx`, which is already a client component. Add a small source-level verification script because the repository has no configured test runner. Reuse the existing contact page webhook contract.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS, Node.js verification script.

---

### Task 1: Verification Harness

**Files:**
- Create: `scripts/verify-home-hero-form.mjs`
- Modify: `package.json`

- [ ] **Step 1: Add a verification script**

Create `scripts/verify-home-hero-form.mjs` to assert that the home page contains the desktop hero form, the Eneida background image, the same webhook endpoint, required fields, and mobile hiding classes.

- [ ] **Step 2: Wire the script into npm**

Add `verify:hero` to `package.json`.

- [ ] **Step 3: Run RED verification**

Run: `npm run verify:hero`

Expected: fail before implementation because the home hero does not yet contain the form.

### Task 2: Desktop Hero Form

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add form state and submit handling**

Add local state for `nome`, `email`, `telefone`, and `mensagem`, plus submit, success, and error states. Submit JSON to `https://black-elephant.app.n8n.cloud/webhook/verite-contact-form`.

- [ ] **Step 2: Update desktop hero layout**

At `lg` and above, show `/images/eneida.png` as the full-bleed background, keep the copy on the left, and add the glass form on the right.

- [ ] **Step 3: Preserve mobile**

Keep the existing mobile visual direction and hide the new form with responsive classes below `lg`.

### Task 3: Verification

**Files:**
- Verify: `src/app/page.tsx`
- Verify: `scripts/verify-home-hero-form.mjs`

- [ ] **Step 1: Run focused verification**

Run: `npm run verify:hero`

Expected: pass.

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: pass.

- [ ] **Step 3: Inspect desktop and mobile**

Run the local dev server and inspect desktop and mobile screenshots to confirm the form, background, and responsive behavior.
