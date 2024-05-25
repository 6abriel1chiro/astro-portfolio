---
layout: ../../layouts/MarkdownPostLayout.astro
title: SafeDev Vulnerabilities Analyzer - Development Iteration 2
pubDate: 2024-05-02
description: Updates on the second iteration of development for the SafeDev Vulnerabilities Analyzer extension for Visual Studio Code.
author: GabrielIchiro
image:
  url: "https://firebasestorage.googleapis.com/v0/b/vs-code-xss-analyzer.appspot.com/o/documentation%2Fimages%2F2.jpeg?alt=media&token=a4165df1-b86f-4a7d-9e57-810752f7828b"
  alt: "Visual Studio Code with SafeDev Vulnerabilities Analyzer extension"
tags: ["tech", "blogging", "projects", "cybersecurity", "vscode"]
---

## Development Iteration 2: Enhancing the SafeDev Vulnerabilities Analyzer

In this iteration of development, we've made significant enhancements to the SafeDev Vulnerabilities Analyzer extension. Our focus was on improving the user experience by providing more actionable feedback and integrating our extension more seamlessly with the Visual Studio Code environment.

### Improved XSS Vulnerability Detection

We've made improvements to the `checkForXSS` function in our XSS Analyzer. Now, instead of just displaying a warning message when potential XSS vulnerabilities are found, the extension will highlight the problematic lines in the editor and list the issues in the Problems tab, just like a linter would.

We've also added a URL field to each finding. This URL can be used to provide more information about the issue and how to fix it. When the user clicks on the "how to fix" button, they will be redirected to the URL provided.

### Code Action Provider for XSS Findings

To provide a more integrated experience, we've implemented a `CodeActionProvider` for XSS findings. This provider offers a "How to fix?" action for each XSS finding. When this action is executed, it opens the URL associated with the finding, providing the user with more information on how to prevent the vulnerability.

This feature was implemented in a new `XSSFixProvider` class, which is registered as a code actions provider for JavaScript files. The `XSSFixProvider` class is defined in a separate `xssFixProvider.js` file, keeping our architecture clean and the responsibilities of each module clear.

When no vulnerability eis found a message is displayed:
<img class="no-issue-found" src="https://firebasestorage.googleapis.com/v0/b/vs-code-xss-analyzer.appspot.com/o/documentation%2Fimages%2Fno-found.jpeg?alt=media&token=7d285d1e-1a56-41c4-89b4-39e50abd8b6d" alt="screencapture" />

### Integration with the Extension Activation Process

The activation of the XSS analyzers has been integrated into the main extension activation process. When the SafeDev Vulnerabilities Analyzer extension is activated, it will automatically activate the SSRF and XSS analyzers.

This was achieved by requiring the `ssrfAnalyzer` and `xssAnalyzer` modules in the main `extension.js` file and calling their `activateSSRFAnalyzer` and `activateXSSAnalyzer` functions in the `activate` function.

### Conclusion

With these enhancements, the SafeDev Vulnerabilities Analyzer extension is now more user-friendly and provides more actionable feedback. Users can easily see where the potential vulnerabilities are in their code and get guidance on how to fix them. We're excited about these improvements and look forward to continuing to enhance the extension in future iterations.
