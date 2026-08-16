# Teaching Assignments Repository 📚

Welcome to the **Teaching Assignments Repository**!  
This repository is designed to store and organize all assignments used for teaching purposes. Each session’s materials are managed through **separate branches**, making it easy to track progress, maintain version control, and revisit past sessions.

---

## 📂 Repository Structure

- **Main Branch (`main`)**  
  Contains general documentation, guidelines, and setup instructions.

- **Session Branches**  
  Each branch corresponds to a specific teaching session:
  - `session-1` → Assignments for Session 1
  - `session-2` → Assignments for Session 2
  - `session-3` → Assignments for Session 3
  - `session-4` → Assignments for Session 4
  - `session-5` → Assignments for Session 5

---

## 🔀 Branching Workflow

```mermaid
gitGraph
   commit id: "Initial setup"
   branch session-1
   checkout session-1
   commit id: "Assignments for Session 1"
   checkout main
   branch session-2
   checkout session-2
   commit id: "Assignments for Session 2"
   checkout main
   branch session-3
   checkout session-3
   commit id: "Assignments for Session 3"
   checkout main
   branch session-4
   checkout session-4
   commit id: "Assignments for Session 4"
   checkout main
   branch session-5
   checkout session-5
   commit id: "Assignments for Session 5"
```

