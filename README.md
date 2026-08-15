# Head of House Voting App

A digital voting app built for weekly Head of House elections in the HackathonAfrica 3.0 bootcamp. Originally built with vanilla HTML, CSS, and JavaScript, then rebuilt in React and Next.js with TypeScript as part of a bootcamp assignment.

## What it does

Bootcamp cohort members can search for and vote for one candidate out of 20. Once voting closes, results show who got the most votes (Head of House) and second most (Assistant Head of House), ranked live as votes come in.

## Features

- Search-based candidate selection with live filtering, built for scale instead of a long list of cards
- Two-step voting: select a candidate, then confirm before the vote is cast
- One vote per browser, enforced with localStorage so votes persist across refreshes
- Live results page, ranked automatically by vote count
- Tie handling: if two or more candidates share the top vote count, none of them get falsely labeled as the winner
- Branded to match AfricaPlan Foundation's navy and gold color scheme

## Tech stack

- **Next.js** (Pages Router) — routing and project structure
- **TypeScript** — type safety across components and state
- **Tailwind CSS** — styling
- **React Context + useState** — vote state management
- **localStorage** — vote persistence, no backend required

No backend, no database. All state lives in the browser for this version.

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/stephcloud/voting-app-nextjs.git
cd voting-app-nextjs
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

components/ → CandidateSearch, CandidateRow, SelectedCandidateCard, ResultBar
context/ → VoteContext, handles all vote state and localStorage syncing
data/ → candidates.ts, the list of candidates
types/ → shared TypeScript interfaces
pages/ → index.tsx (voting page), results.tsx (results page)

## How voting works

1. A voter searches for a candidate by name, or browses the full list
2. Selecting a candidate shows a confirmation card, nothing is cast yet
3. Confirming the vote updates state and saves it to localStorage
4. The voter sees who's currently leading, then can view full results
5. Results rank all candidates by vote count. First place is labeled Head of House, second is Assistant Head of House, everyone else is a runner-up. Candidates with zero votes are shown honestly as having no votes yet, not falsely ranked.

## What I'd add with a backend

This version has no backend, so "one vote per browser" is the closest it can get to "one vote per person." A real backend would allow proper per-user authentication and true one-vote-per-person enforcement, plus centralized results instead of results being calculated per-browser from local data.

## Built by

Afunogu Stephanie Chinaecherem, HackathonAfrica 3.0, AfricaPlan Foundation.
