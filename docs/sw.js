/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/app.css",
    "revision": "aac6c657393d9f75d6e1b4374536bd4e"
  },
  {
    "url": "build/app.js",
    "revision": "e2a95e9beeb9356e6d646b7801bf0077"
  },
  {
    "url": "build/app/app.iwo4dyxh.js",
    "revision": "2303b80d8c47ce2c3b6924ec086846c7"
  },
  {
    "url": "build/app/app.w1ihzaer.js",
    "revision": "5b5207cc012bedddf2909bf3114bbf11"
  },
  {
    "url": "build/app/jws4hczc.entry.js",
    "revision": "2564b81c265c60e494344bfbabf4b256"
  },
  {
    "url": "build/app/jws4hczc.sc.entry.js",
    "revision": "1a2268146bf3330a136c52bd76f60b40"
  },
  {
    "url": "build/app/rx7mf328.entry.js",
    "revision": "fd1c7b31fdf6f2ce36a8fbcd135f876b"
  },
  {
    "url": "build/app/rx7mf328.sc.entry.js",
    "revision": "fd1c7b31fdf6f2ce36a8fbcd135f876b"
  },
  {
    "url": "index.html",
    "revision": "78175a6464b46de62200edc9fac65040"
  },
  {
    "url": "manifest.json",
    "revision": "dd96ce75d8246388beea91bc36ab38f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
