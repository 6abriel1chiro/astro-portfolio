---
layout: ../../layouts/MarkdownPostLayout.astro
title: SafeDev Vulnerabilities Analyzer  1st sprint Update
pubDate: 2024-04-01
description: Update on progress after first iteration of research and development of VSCODE XSS analyzer project
author: GabrielIchiro
image:
  url: "https://res.cloudinary.com/practicaldev/image/fetch/s--fGfO3_Mu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/21xapfe2i1ixwm7ke8ai.png"
  alt: "vs code screencapture."

tags: ["tech", "blogging", "projects"]
---

# SafeDev Vulnerabilities Analyzer Update - April 14, 2024

## New Architecture

The SafeDev Vulnerabilities Analyzer extension has been updated with a new architecture to improve code organization and maintainability. The extension's codebase has been restructured into separate modules for different vulnerability analyzers, following a cleaner and more scalable approach.

### Directory Structure

The project directory structure has been updated as follows:

./src
├── analyzers
│ ├── credentialsAnalyzer
│ │ ├── credentialsAnalyzer.js
│ │ └── regexConfig.json
│ ├── ssrfAnalyzer
│ │ └── ssrfAnalyzer.js
│ └── xssAnalyzer
│ ├── regexXssRules.json
│ ├── xssAnalyser.js
│ └── xssRules.js
└── extension.js

- `analyzers`: Contains subdirectories for each vulnerability analyzer module.
- `credentialsAnalyzer`: Module for analyzing potential credentials/API keys vulnerabilities.
- `ssrfAnalyzer`: Module for analyzing potential SSRF (Server-Side Request Forgery) vulnerabilities.
- `xssAnalyzer`: Module for analyzing potential XSS (Cross-Site Scripting) vulnerabilities.

## New XSS Analyzer Rule

A new rule has been added to the XSS analyzer to detect potential XSS vulnerabilities related to the JavaScript protocol attack. This rule checks for unsanitized links used in the `href` attribute of anchor (`<a>`) tags that start with `javascript:`.

### XSS Analyzer Update

The `xssRules.js` file now includes a new function `hasJavaScriptProtocol` to check for URLs with the JavaScript protocol. The `xssAnalyzer.js` file has been updated to utilize this function and perform the necessary checks.

## Conclusion

With these updates, the SafeDev Vulnerabilities Analyzer extension is better equipped to detect a wider range of vulnerabilities, providing enhanced security for developers working with Visual Studio Code.
