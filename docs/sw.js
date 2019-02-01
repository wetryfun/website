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
    "revision": "1a6df5183ec2b5af97c3cdcf197f9b4a"
  },
  {
    "url": "build/app.js",
    "revision": "c6560e6057b1185c8f2d67644f665f78"
  },
  {
    "url": "build/app/app.9jj2rvl6.js",
    "revision": "f498f6ad597ee94661bbf1f9dd62ff7f"
  },
  {
    "url": "build/app/app.ggldt3y2.js",
    "revision": "80695db776364935a51194e589f91f68"
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
    "url": "build/app/weyn5ovw.entry.js",
    "revision": "59e60de68bd641e9ab9ba296e428530a"
  },
  {
    "url": "build/app/weyn5ovw.sc.entry.js",
    "revision": "59e60de68bd641e9ab9ba296e428530a"
  },
  {
    "url": "index.html",
    "revision": "5240a1e1731f6e7ae982010eb62452f7"
  },
  {
    "url": "manifest.json",
    "revision": "dd96ce75d8246388beea91bc36ab38f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
