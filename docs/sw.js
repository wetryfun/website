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
    "revision": "483e791a979d3eb0b573660115168582"
  },
  {
    "url": "build/app/app.2e5rm1j7.js",
    "revision": "d9ee519b58fb7cbba459692ab6811630"
  },
  {
    "url": "build/app/app.f6z1pggz.js",
    "revision": "17acf53e01b3c355cbb07c229ade4e97"
  },
  {
    "url": "build/app/cjvm8u8f.entry.js",
    "revision": "709be6f14f1fd13f441700e0f8ea8dd0"
  },
  {
    "url": "build/app/cjvm8u8f.sc.entry.js",
    "revision": "709be6f14f1fd13f441700e0f8ea8dd0"
  },
  {
    "url": "build/app/fg7cvtjy.entry.js",
    "revision": "160edcbed8d8b8f316794f1f56c070ec"
  },
  {
    "url": "build/app/fg7cvtjy.sc.entry.js",
    "revision": "160edcbed8d8b8f316794f1f56c070ec"
  },
  {
    "url": "index.html",
    "revision": "7373fc9212ca0a6579c933831b11b357"
  },
  {
    "url": "manifest.json",
    "revision": "dd96ce75d8246388beea91bc36ab38f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
