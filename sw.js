/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-acb55742'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/BrandedTypes-YHtYcej3.js",
    "revision": null
  }, {
    "url": "assets/index-BlB99Dex.js",
    "revision": null
  }, {
    "url": "assets/index-CPJ7vhBF.css",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "3a56a5f64225d27af5b6cb3e35571a75"
  }, {
    "url": "registerSW.js",
    "revision": "a930d1cf2ea0472754b08a448b2df5f3"
  }, {
    "url": "android-chrome-192x192.png",
    "revision": "ec202bf96cf5ac5f78a5efceebd1553e"
  }, {
    "url": "android-chrome-512x512.png",
    "revision": "e5f04421561ffa213b3d68be6f61071e"
  }, {
    "url": "favicon.ico",
    "revision": "81897b25831c5fedfba214e1a0da9fa2"
  }, {
    "url": "maskable_icon.png",
    "revision": "c99dc95e012a1ecb5341df8ffb1a3aee"
  }, {
    "url": "site.webmanifest",
    "revision": "b7f98ecf49cb7edf57458f37ef6eb0be"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
