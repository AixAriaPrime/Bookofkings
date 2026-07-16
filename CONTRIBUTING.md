# Contributing

Thank you for contributing to the Persian Mirror app. This project is designed as a premium, culturally respectful learning product that combines a daily psychological ritual, Mirror result cards, Sage-mode reflection, and Shahnameh-inspired visuals. We value clarity, craftsmanship, and cultural integrity.

Please read this document before opening issues or pull requests.

## Project priorities

1. Preserve the daily ritual as the primary product path.
2. Keep UI mobile-first, elegant, and readable.
3. Keep business logic deterministic and testable.
4. Keep the design system centralized in `theme/`.
5. Respect cultural accuracy, avoid flattening identities, and use age-neutral language for learning content.
6. Ship small, verifiable changes. One feature, one PR.

## Repo structure

- `ui/` — screens, components, and visual presentation
- `domain/` — business rules, entities, and use cases
- `data/` — repositories, API clients, storage adapters
- `services/` — scoring, session flow, result generation, chat orchestration
- `theme/` — colors, typography, spacing, tokens, safe zones
- `navigation/` — app routing and screen flow
- `tests/` — unit and integration tests
- `.github/prompts/` — Copilot prompt files for developer workflows
- `.github/instructions/` — path-scoped Copilot instruction files

## How we work with GitHub Copilot

We use Copilot heavily to accelerate development but the product identity and quality rules must always be preserved.

- Use the prompt files in `.github/prompts/` for major tasks (foundation, core-engine, mirror-sage, testing, premium-share).
- Use `.github/copilot-instructions.md` and the path-scoped `.github/instructions/*.instructions.md` to guide Copilot suggestions.
- When running Copilot, keep only the relevant files open to reduce context noise.
- Prefer the strongest model available (e.g., GPT-5.6 Sol) for architecture and multi-file changes; use a faster model for repetitive UI edits.

## Local development

1. Clone the repo.
2. Install dependencies (refer to the root README for the stack-specific commands).
3. Run the app in development mode.
4. Run tests: `npm test` (or the project’s test command).

Follow the project README for stack-specific setup (Android/iOS emulators, environment variables, image keys, etc.).

## Working on features

1. Create an issue describing the feature or bug.
2. Attach the relevant Copilot prompt name (from `.github/prompts/`) if you used Copilot to scaffold work.
3. Create a feature branch: `feature/<short-description>`.

Small PR guideline:
- One logical change per PR.
- Keep PRs under ~400 LOC when possible.
- Include screenshots for UI changes.
- Add or update tests for any behavior change.
- Add a short changelog entry in the PR description.

## Pull request checklist

- [ ] The change implements just one logical idea.
- [ ] The app builds locally and the feature is testable.
- [ ] New code is covered by tests (unit or integration).
- [ ] UI changes follow the design tokens in `theme/`.
- [ ] No business logic added to `ui/`.
- [ ] Cultural and learning content uses age-neutral and respectful language.
- [ ] The PR links to the prompt used (if Copilot generated code).

## Testing

We require deterministic tests for core flows:
- session lifecycle
- prompt ordering and capture
- scoring and feature-vector generation
- archetype mapping
- result generation
- Mirror card rendering & safe-zone compliance
- Sage response formatting
- premium entitlement gating

Use mocked external services where appropriate. Prefer small, isolated tests with clear Arrange-Act-Assert structure.

## Design and visual rules

- Use tokens from `theme/`. Do not hardcode colors or spacing.
- Share-card layout must follow safe zones for vertical social formats (1080×1920 canvas with central safe area).
- Mirror cards show one dominant message, one focal visual element, and a subtle footer.
- Sage mode uses layered cards and progressive disclosure; transitions should be calm (fade, lift, soft glow).
- When in doubt about a cultural or historical claim, flag content for review — do not invent facts.

## Content and cultural review

- All educational content (Shahnameh references, historical notes, cultural explanations) must be:
  - Respectful and factually accurate
  - Age-neutral and globally accessible
  - Non-combative about identity differences (e.g., Persian vs. Arab identity)
- If you add historical or literary references, include source notes or links for verification in the PR description.

## Accessibility

- Use semantic text for screen readers.
- Maintain good contrast ratios (WCAG AA).
- Ensure touch targets are large enough for comfortable mobile interaction.

## Analytics and privacy

- Only track the events listed in `.github/copilot-instructions.md` (session start, prompt complete, result view, share tap, Sage open, premium view, return visit).
- Do not collect or transmit personally identifying data without explicit consent.
- Follow applicable privacy regulations; provide clear privacy options in Settings.

## Release process

- Merge to `main` only after passing CI and code review.
- Tag releases semantically and maintain a changelog.
- Deploy using the configured CI/CD pipeline.

## If Copilot output is wrong

- Treat Copilot as a tool, not an authority.
- Review and refactor generated code.
- Add tests that assert expected behavior and prevent regressions.
- If Copilot introduces broad new patterns, narrow the prompt and re-run with more precise instructions.

## Communication

- Use issues for feature requests and bugs.
- Use PR reviews for implementation feedback.
- Keep discussions civil and focused on product quality.

## License and attribution

Follow the project’s LICENSE file. Attribute any third-party assets (images, fonts) per their licenses.

---

Thank you — this project is intended to be beautiful, meaningful, and responsibly built. If you need a template PR, test example, or Copilot prompt tuned for a specific task, ask and the commander will provide it. 🫡