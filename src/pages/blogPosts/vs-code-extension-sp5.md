---
layout: ../../layouts/MarkdownPostLayout.astro
title: SafeDev Vulnerabilities Analyzer -  Iteration 5 . Pre Release  0.0.1
pubDate: 2024-06-04
description: Updates on the last iteration and first release of the extension
author: GabrielIchiro
image:
  url: "https://firebasestorage.googleapis.com/v0/b/vs-code-xss-analyzer.appspot.com/o/documentation%2Fimages%2Fcapture.jpeg?alt=media&token=79f550ff-663e-4b8c-896d-c036984e3164"
  alt: "Release"
tags: ["tech", "blogging", "projects", "cybersecurity", "vscode"]
---

# Documentation for Latest Changes to XSS Analyzer Extension

## Release Notes

This pre-release version of the SafeDev Vulnerabilities Analyzer extension introduces several new features and improvements.

### Process

1. Update the package.json file: Ensure that all the necessary fields are filled out correctly. These include name, displayName, description, version, publisher, categories, keywords, and icon. The publisher field is your Visual Studio Marketplace publisher ID.

2. Create a Visual Studio Marketplace publisher ID: If you don't have a publisher ID, you can create one by following the instructions in the Visual Studio Marketplace documentation.

3. Create a Personal Access Token (PAT): You need a PAT to authenticate with the Marketplace. You can create one by following the instructions in the Visual Studio Marketplace documentation.

4. Install the vsce package: vsce, short for "Visual Studio Code Extensions", is a command-line tool for packaging, publishing and managing VS Code extensions. Install it globally using npm:

npm install -g vsce

5. Package the extension: Run the following command in the terminal at the root of your extension directory:

vsce package

This will create a .vsix file, which is the packaged extension.

6. Publish the extension: Run the following command in the terminal at the root of your extension directory:

vsce publish

and that's it!
We're excited about these changes and we hope you are too. As always, if you encounter any issues or have any suggestions, please let us know on the issue tracker.
