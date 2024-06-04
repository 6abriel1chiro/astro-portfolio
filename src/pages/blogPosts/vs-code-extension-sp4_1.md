---
layout: ../../layouts/MarkdownPostLayout.astro
title: SafeDev Vulnerabilities Analyzer - Development Iteration 4. Improved Warning Messages
pubDate: 2024-05-19
description: Updates on the latest changes to the XSS Analyzer extension, including more informative warning messages for potential Cross-Site Scripting vulnerabilities.
author: GabrielIchiro
image:
  url: "https://firebasestorage.googleapis.com/v0/b/vs-code-xss-analyzer.appspot.com/o/documentation%2Fimages%2FWhatsApp%20Image%202024-05-20%20at%2000.56.29.jpeg?alt=media&token=5f367851-0ea7-433a-b81c-6963183bf1e2"
  alt: "Visual Studio Code with XSS Analyzer extension"
tags: ["tech", "blogging", "projects", "cybersecurity", "vscode"]
---

## Documentation for Latest Changes to the XSS Analyzer Extension

In the latest update to the XSS Analyzer extension, we have made several important changes to improve the information provided in the warning messages when potential Cross-Site Scripting (XSS) vulnerabilities are detected.

### Addition of `reason`, `unsafeExample`, and `safeExample` to Warning Messages

Previously, when a potential XSS vulnerability was detected, the warning message only included the line number and a brief message about the issue.

In the latest update, we have added three new pieces of information to the warning message:

1. `reason`: This provides a more detailed explanation of why the detected code could potentially lead to an XSS vulnerability. It helps developers understand the underlying issue and how it could be exploited.

2. `unsafeExample`: This provides an example of unsafe code that is similar to the detected code. It helps developers see a concrete example of the kind of code that could lead to an XSS vulnerability.

3. `safeExample`: This provides an example of how to modify the unsafe code to make it safe from XSS vulnerabilities. It helps developers understand how to fix the detected issue.

Here is an example of a new warning message:

```javascript
{
 line: path.node.loc.start.line,
 message: `Warning: Variables placed into inline CSS. This can lead to XSS vulnerabilities at Line ${path.node.loc.start.line}`,
 url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
 reason: `A variable was placed into inline CSS, which can lead to XSS vulnerabilities if the variable's value is not properly sanitized.`,
 unsafeExample: `<style>.myClass { color: '${userInput}'; }</style>`,
 safeExample: `<style>.myClass { color: '\\x${sanitize(userInput)}'; }</style>`,
}
```

New Checks for Potential XSS Vulnerabilities
The new checks in the code are designed to detect potential Cross-Site Scripting (XSS) vulnerabilities in JavaScript code. Here's a breakdown of what each check does:

Dangerous Function Call Check
This check is looking for function calls that are considered dangerous in terms of XSS. If the function call is dangerous and the arguments are not safe (i.e., they are not quoted data values), a warning is added to the findings array.
The warning includes the line number where the potential vulnerability was found, a message explaining the issue, a URL for more information about XSS prevention, a reason explaining why the code could lead to an XSS vulnerability, an example of unsafe code, and an example of how to make the code safe.
Inline CSS Check
This check is looking for variables placed into inline CSS. Inline CSS is considered a potential XSS vulnerability because it can be used to execute malicious scripts if the CSS values are not properly sanitized.
If a style value is found and it is not a quoted data value, a warning is added to the findings array. The warning includes the same information as the dangerous function call check.

We believe these changes will make the warning messages more informative and helpful for developers, and will assist in preventing XSS vulnerabilities in your code.
