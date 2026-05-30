/**
 * fix-eperm.cjs
 * Patches Node's fs module to:
 * 1. Block scanning of directories outside the project (C:\Users especially)
 * 2. Gracefully handle EPERM and EACCES errors as a fallback
 * Load via NODE_OPTIONS="--require ./fix-eperm.cjs"
 */
const fs = require("fs");
const path = require("path");

const SUPPRESSED = new Set(["EPERM", "EACCES"]);

// Directories that should NEVER be scanned during build
// (scanning C:\Users causes both permission errors and OOM)
const BLOCKED_PREFIXES = [
  "C:\\Users",
  "C:\\ProgramData",
  "C:\\Windows",
  "C:\\Program Files\\WindowsApps",
];

function isBlocked(p) {
  if (typeof p !== "string") return false;
  const norm = path.resolve(p);
  return BLOCKED_PREFIXES.some((prefix) =>
    norm.toLowerCase().startsWith(prefix.toLowerCase())
  );
}

// --- Patch fs.readdir (callback API) ---
const origReaddir = fs.readdir;
fs.readdir = function (p, optionsOrCb, maybeCb) {
  const cb = typeof optionsOrCb === "function" ? optionsOrCb : maybeCb;
  const options = typeof optionsOrCb === "function" ? undefined : optionsOrCb;

  if (isBlocked(p)) {
    return process.nextTick(() => cb(null, []));
  }

  const wrappedCb = function (err, result) {
    if (err && SUPPRESSED.has(err.code)) {
      return cb(null, []);
    }
    return cb(err, result);
  };

  if (typeof optionsOrCb === "function") {
    return origReaddir.call(fs, p, wrappedCb);
  }
  return origReaddir.call(fs, p, options, wrappedCb);
};

// --- Patch fs.readdirSync ---
const origReaddirSync = fs.readdirSync;
fs.readdirSync = function (p, options) {
  if (isBlocked(p)) return [];
  try {
    return origReaddirSync.call(fs, p, options);
  } catch (err) {
    if (SUPPRESSED.has(err.code)) return [];
    throw err;
  }
};

// --- Patch fs.promises.readdir ---
const origPromiseReaddir = fs.promises.readdir;
fs.promises.readdir = async function (p, options) {
  if (isBlocked(p)) return [];
  try {
    return await origPromiseReaddir.call(fs.promises, p, options);
  } catch (err) {
    if (SUPPRESSED.has(err.code)) return [];
    throw err;
  }
};

// --- Patch fs.opendir ---
const origOpendir = fs.opendir;
if (origOpendir) {
  const makeEmptyDir = (p) => ({
    close: (cb2) => (cb2 ? cb2(null) : Promise.resolve()),
    closeSync: () => {},
    read: (cb2) => (cb2 ? cb2(null, null) : Promise.resolve(null)),
    readSync: () => null,
    path: p,
    [Symbol.asyncIterator]: async function* () {},
  });

  fs.opendir = function (p, optionsOrCb, maybeCb) {
    const cb = typeof optionsOrCb === "function" ? optionsOrCb : maybeCb;
    const options = typeof optionsOrCb === "function" ? undefined : optionsOrCb;

    if (isBlocked(p)) {
      return process.nextTick(() => cb(null, makeEmptyDir(p)));
    }

    const wrappedCb = function (err, dir) {
      if (err && SUPPRESSED.has(err.code)) {
        return cb(null, makeEmptyDir(p));
      }
      return cb(err, dir);
    };

    if (typeof optionsOrCb === "function") {
      return origOpendir.call(fs, p, wrappedCb);
    }
    return origOpendir.call(fs, p, options, wrappedCb);
  };
}

// --- Patch fs.promises.opendir ---
if (fs.promises.opendir) {
  const origPromiseOpendir = fs.promises.opendir;
  fs.promises.opendir = async function (p, options) {
    if (isBlocked(p)) {
      return {
        close: () => Promise.resolve(),
        read: () => Promise.resolve(null),
        path: p,
        [Symbol.asyncIterator]: async function* () {},
      };
    }
    try {
      return await origPromiseOpendir.call(fs.promises, p, options);
    } catch (err) {
      if (SUPPRESSED.has(err.code)) {
        return {
          close: () => Promise.resolve(),
          read: () => Promise.resolve(null),
          path: p,
          [Symbol.asyncIterator]: async function* () {},
        };
      }
      throw err;
    }
  };
}
