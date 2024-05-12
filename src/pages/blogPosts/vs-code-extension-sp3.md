---
layout: ../../layouts/MarkdownPostLayout.astro
title: SafeDev Vulnerabilities Analyzer - Development Iteration 3
pubDate: 2024-05-12
description: Updates on the third iteration of development for the SafeDev Vulnerabilities Analyzer extension for Visual Studio Code.
author: GabrielIchiro
image:
  url: "https://firebasestorage.googleapis.com/v0/b/vs-code-xss-analyzer.appspot.com/o/documentation%2Fimages%2F3.jpeg?alt=media&token=ed374ef6-d0dd-46a1-9f5d-c5111fffc5cf"
  alt: "Visual Studio Code with SafeDev Vulnerabilities Analyzer extension"
tags: ["tech", "blogging", "projects", "cybersecurity", "vscode"]
---

## Overview

The XSS Analyzer extension has been updated to include new rules for detecting potential Cross-Site Scripting (XSS) vulnerabilities related to the use of URL query parameters in JavaScript and React code.

## New Features

### Detection of Unsafe Query Parameter Use

The extension now checks for the use of `URLSearchParams` and `query.get` in the code. These are common ways to access query parameters in JavaScript and React, but if not used properly, they can lead to XSS vulnerabilities.

When the extension detects the use of `URLSearchParams`, it will recommend sanitizing query parameters to prevent XSS vulnerabilities. Similarly, when it detects the use of `query.get`, it will recommend sanitizing the output of `query.get` to prevent XSS vulnerabilities.

These recommendations are added to the list of findings by the extension, and each recommendation includes the line number where the potential vulnerability was detected and a message explaining the recommendation. The message also includes a link to the OWASP Input Validation Cheat Sheet for further guidance on how to prevent XSS vulnerabilities.

### Example

Here's an example of what the new findings might look like:

```javascript
findings.push({
  line: document.positionAt(path.node.loc.start).line + 1,
  message: `Recommendation: Sanitize query parameters when using URLSearchParams to prevent XSS vulnerabilities at Line ${
    document.positionAt(path.node.loc.start).line + 1
  }`,
  url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
});
```

This finding indicates that `URLSearchParams` is being used at the specified line number, and recommends sanitizing the query parameters to prevent XSS vulnerabilities.

## New Configuration Options

The `package.json` file for the SafeDev Vulnerabilities Analyzer extension has been updated with new configuration options. These options allow users to customize the behavior of the extension to better suit their needs.

1. **`safedev-vulnerabilities-analyzer.enableXSSCheck`**: This option enables or disables the XSS check. By default, this option is set to `true`, meaning the XSS check is enabled. If you want to disable the XSS check, you can set this option to `false`. This might be useful if you're working on a project where XSS vulnerabilities are not a concern, or if you're using another tool to check for XSS vulnerabilities.

2. **`safedev-vulnerabilities-analyzer.xssSeverity`**: This option sets the severity of XSS findings. By default, this option is set to `warning`. You can also set it to `error` or `info`. This allows you to control how prominently XSS findings are displayed in your editor. If you set this option to `error`, XSS findings will be displayed as errors, which might make them more noticeable. If you set this option to `info`, XSS findings will be displayed as informational messages, which might make them less noticeable.

You can change these options by going to the settings in Visual Studio Code (File > Preferences > Settings or `Cmd+,` on Mac) and searching for "SafeDev Vulnerabilities Analyzer". You'll see the new options listed there, and you can change them as needed.

## Conclusion

These changes to the XSS Analyzer extension enhance its ability to detect potential XSS vulnerabilities related to the use of URL query parameters. By following the recommendations provided by the extension, developers can write safer code and reduce the risk of XSS attacks. Additionally, the new configuration options allow users to customize the behavior of the extension to better suit their needs.
