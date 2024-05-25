---
layout: ../../layouts/MarkdownPostLayout.astro
title: SafeDev Vulnerabilities Analyzer - Development Iteration 4.1 . Improved Bug fixes
pubDate: 2024-05-19
description: Updates on the latest changes to the XSS Analyzer extension, including more informative warning messages for potential Cross-Site Scripting vulnerabilities.
author: GabrielIchiro
image:
  url: "https://firebasestorage.googleapis.com/v0/b/vs-code-xss-analyzer.appspot.com/o/documentation%2Fimages%2FWhatsApp%20Image%202024-05-20%20at%2000.56.29.jpeg?alt=media&token=5f367851-0ea7-433a-b81c-6963183bf1e2"
  alt: "Visual Studio Code with XSS Analyzer extension"
tags: ["tech", "blogging", "projects", "cybersecurity", "vscode"]
---

# Documentation for Latest Changes to XSS Analyzer Extension

## Accumulating Diagnostics for Multiple Vulnerabilities

Previously, the XSS Analyzer extension was only showing one vulnerability in the Problems tab, even when multiple vulnerabilities were detected. This was due to the way the diagnostics were being set for the document URI.

In the latest update, we have modified the code to accumulate all the diagnostics in an array and then set them all at once after the loop. This ensures that all the detected vulnerabilities are shown in the Problems tab.

Here's the updated code:

```javascript
if (findings.length > 0) {
  xssFindings = findings;
  let diagnostics = []; // Create an array to store all the diagnostics

  findings.forEach((finding) => {
    const { line, message } = finding;
    const position = new vscode.Position(line - 1, 0);
    const range = new vscode.Range(position, position);
    const diagnostic = new vscode.Diagnostic(
      range,
      message,
      vscode.DiagnosticSeverity.Warning
    );
    diagnostic.code = {
      value: "fix url",
      target: vscode.Uri.parse(finding.url),
    };
    diagnostics.push(diagnostic); // Add the diagnostic to the array
  });

  diagnosticCollection.set(document.uri, diagnostics); // Set all the diagnostics at once
}
```

## Showing Detailed Information for How to Fix Vulnerabilities

We have also added a new feature that shows detailed information on how to fix a detected vulnerability when the user clicks "How to fix?". This includes an unsafe example, a safe example, and a URL for more information.

To implement this, we have created a new command that opens a webview and displays the information. The `provideCodeActions` method in the `XSSFixProvider` class has been modified to pass the necessary values to the `command` object in the `CodeAction`.

Here's the updated code:

```javascript
class XSSFixProvider {
  provideCodeActions(document, range, context, token) {
    return context.diagnostics
      .filter((diagnostic) => diagnostic.code.value === "xss")
      .map((diagnostic) => {
        const fix = new vscode.CodeAction(
          "How to fix?",
          vscode.CodeActionKind.QuickFix
        );
        fix.diagnostics = [diagnostic];
        fix.command = {
          title: "How to fix?",
          command: "extension.showXSSFix",
          arguments: [diagnostic],
        };
        return fix;
      });
  }
}
```

Here's a demo of the extension:

<video width="320" height="240" controls>
  <source src="/video/Screen Recording-compressed.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

These changes make the XSS Analyzer extension more informative and helpful for developers, and assist in preventing XSS vulnerabilities in your code.
