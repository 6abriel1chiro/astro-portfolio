---
layout: ../../layouts/MarkdownPostLayout.astro
title: SafeDev Vulnerabilities Analyzer - Development Iteration 2
pubDate: 2024-05-12
description: Updates on the second iteration of development for the SafeDev Vulnerabilities Analyzer extension for Visual Studio Code.
author: GabrielIchiro
image:
  url: "https://res.cloudinary.com/practicaldev/image/fetch/s--fGfO3_Mu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/21xapfe2i1ixwm7ke8ai.png"
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

### Integration with the Extension Activation Process

The activation of the SSRF and XSS analyzers has been integrated into the main extension activation process. When the SafeDev Vulnerabilities Analyzer extension is activated, it will automatically activate the SSRF and XSS analyzers.

This was achieved by requiring the `ssrfAnalyzer` and `xssAnalyzer` modules in the main `extension.js` file and calling their `activateSSRFAnalyzer` and `activateXSSAnalyzer` functions in the `activate` function.

### Conclusion

With these enhancements, the SafeDev Vulnerabilities Analyzer extension is now more user-friendly and provides more actionable feedback. Users can easily see where the potential vulnerabilities are in their code and get guidance on how to fix them. We're excited about these improvements and look forward to continuing to enhance the extension in future iterations.
