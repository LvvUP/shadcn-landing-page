# Contributing

Thanks for helping improve Shadcn Landing Page. Focused bug fixes, accessibility improvements, documentation, and reusable section enhancements are welcome.

## Before opening an issue

- Search existing issues and discussions.
- Use Discussions for support questions and early ideas.
- Use the private process in [SECURITY.md](./SECURITY.md) for vulnerabilities.
- Never post secrets, personal data, paid content, or private screenshots.

## Local development

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/LvvUP/shadcn-landing-page.git
cd shadcn-landing-page
npm ci
npm run dev
```

Keep changes scoped and preserve the existing component, translation, and design conventions. Visible copy changes normally require matching edits in both `messages/en-US.json` and `messages/zh-CN.json`.

## Validate your change

```bash
npm run check
npm run audit
```

For UI work, also test keyboard navigation, mobile layout, both locales, and light/dark/system themes. Include before-and-after screenshots in the pull request when the change is visible.

## Pull requests

- Explain the problem and the chosen solution.
- Keep unrelated refactors out of the same pull request.
- Update documentation and attribution when behavior or bundled material changes.
- Confirm that new assets have clear redistribution rights.

By contributing, you agree that your contribution is licensed under this repository's [MIT License](./LICENSE).
