// ─── Security & Validation ────────────────────────────────────────────
// Input sanitization utilities for user-facing inputs.

/** Sanitize a user-supplied string to prevent XSS in rendered content. */
function sanitizeInput(value: unknown, label = "input", maxLen = 2000): string {
  if (typeof value !== "string") throw new Error(`${label} must be a string`);
  if (value.length > maxLen) throw new Error(`${label} exceeds max length`);
  if (value.includes("\0")) throw new Error(`${label} contains null bytes`);
  return value.replace(/[<>"'&]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "&": "&amp;" })[c] ?? c
  );
}

/** Strip internal details from error messages before display. */
function sanitizeError(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  return msg.replace(/\/[\w/.-]+/g, "[path]").split("\n")[0].slice(0, 300);
}

import React from "react";
import "./App.less";
import "focus-visible"; // https://css-tricks.com/keyboard-only-focus-styles/
import { Routes } from "./app/routes";
import { AppProviders } from "app/AppProviders";
import "@reach/dialog/styles.css";

// const isLocalhost = Boolean(
//   window.location.hostname === "localhost" ||
//     // [::1] is the IPv6 localhost address.
//     window.location.hostname === "[::1]" ||
//     // 127.0.0.0/8 are considered localhost for IPv4.
//     window.location.hostname.match(
//       /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );
// if (isLocalhost) {
if (window.location.hostname === "wdyr") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    // trackAllPureComponents: true,
  });
}

function App() {
  return (
    <AppProviders>
      <Routes />
    </AppProviders>
  );
}

export default App;
