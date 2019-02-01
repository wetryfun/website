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
    "revision": "330e3c7c9e059e992d9b7a8e1333ee94"
  },
  {
    "url": "build/app/app.hhlg3lj3.js",
    "revision": "8612e0dcb2774800f96d1f2016d06f40"
  },
  {
    "url": "build/app/app.ue680n9u.js",
    "revision": "51eebcd0df547abad2de6ffb1e8c41fd"
  },
  {
    "url": "build/app/ppjsxfbx.entry.js",
    "revision": "3fe3e34b1141c6d0745f7a7f414553b4"
  },
  {
    "url": "build/app/ppjsxfbx.sc.entry.js",
    "revision": "32af143ffd72c68cad51cf6805503846"
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
    "revision": "649d5c27b5d776f7b90009273ec2683c"
  },
  {
    "url": "manifest.json",
    "revision": "dd96ce75d8246388beea91bc36ab38f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
