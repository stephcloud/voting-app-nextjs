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
