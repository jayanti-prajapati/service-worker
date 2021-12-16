/**
 * Workbox is a set of libraries to help you write and manage service workers and caching with the CacheStorage API.
 * https://developers.google.com/web/tools/workbox/guides/get-started
 */

/*eslint-disable */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

const DBNAME = 'everfi-idb';
const STORENAME = 'everfi-store';

if (!workbox) {
  console.log('Workbox failed to run');
}

const { registerRoute } = workbox.routing;
const { CacheFirst, CacheOnly, NetworkOnly } = workbox.strategies;
const { CacheableResponsePlugin } = workbox.cacheableResponse;
const { ExpirationPlugin } = workbox.expiration;
const { precacheAndRoute, cleanupOutdatedCaches } = workbox.precaching;
const { setCacheNameDetails } = workbox.core;
const { BackgroundSyncPlugin } = workbox.backgroundSync;
/*eslint-enable */

/**
 * Cache name configs
 */
setCacheNameDetails({
  prefix: 'everfi',
  suffix: 'v3',
  precache: 'furnace-static-precache',
  runtime: 'furnace-runtime',
});

//clean up incompatible precaches that were created by older versions of Workbox
cleanupOutdatedCaches();
/**
 * Use precaching injection to precache foundational files.
 * This uses a script which injects the files on compile. The script is the root of furnace workspace
 * and can be ran using `yarn workspace everfi-sdk buildManifest`
 * precacheAndRoute uses cach-first response strategy
 */

precacheAndRoute([{"revision":"84e961db1d5aa10fe774db79bb55c105","url":"index.html"},{"revision":"45b0cfe4522ded59a91efbe1c12770e7","url":"stylesheets/everfi-sdk.css"},{"revision":"efa3945587bc848559fd59b657e07800","url":"stylesheets/main.css"},{"revision":"2e58180f2bca8939f1ba26757362bec8","url":"stylesheets/vendor.css"},{"revision":"924a62d055b6545f3c3d523384e96cab","url":"javascripts/blocks/accordion.js"},{"revision":"391e8900a5a8fc9f5d4af08ba6ecfe55","url":"javascripts/blocks/activity.js"},{"revision":"15e1712a31e96d78dadc32da71b3aa1d","url":"javascripts/blocks/advocate-chat.js"},{"revision":"49e5b3b1a81f93f969f7b5cd51969727","url":"javascripts/blocks/animator.js"},{"revision":"9dbeac79b8b2ea25ab274a31ce967e77","url":"javascripts/blocks/apex-chart.js"},{"revision":"fce0fe55555365fdd70563de7e201fdc","url":"javascripts/blocks/assessment.js"},{"revision":"7d1b0649a12c7dc76886ebf772d82975","url":"javascripts/blocks/audio-loader-control.js"},{"revision":"114d09a2b15499da78ef12d74fb1bc03","url":"javascripts/blocks/audio-loader.js"},{"revision":"ecddcb0b1788a5f9b0876a2be1f3d701","url":"javascripts/blocks/audio.js"},{"revision":"dc9d245f8b58d79af06cb4721e81f59c","url":"javascripts/blocks/button.js"},{"revision":"8d6a94b209c91d02d0a103f62f78860c","url":"javascripts/blocks/calculation.js"},{"revision":"e3bfde6b660f8619aa3e8522b8db28f4","url":"javascripts/blocks/carousel.js"},{"revision":"0a9e8c61da5bd49afb7bcd37933fd289","url":"javascripts/blocks/chart.js"},{"revision":"8faa629b7b8df59981c011b72349b271","url":"javascripts/blocks/code-snippet.js"},{"revision":"2116f5a3bf451e4449d1a7e7f921881f","url":"javascripts/blocks/comment.js"},{"revision":"2c897e0d19449f223319049294728bfb","url":"javascripts/blocks/component.js"},{"revision":"bb16c45968c5b58c35bf907cdb2c6bd8","url":"javascripts/blocks/container.js"},{"revision":"045cc5d131cf672efac333e1e09cc71e","url":"javascripts/blocks/course-menu.js"},{"revision":"c388dc6d3a77758018cc4af22c81289a","url":"javascripts/blocks/custom-page.js"},{"revision":"8ed750fdf6b79818dfacb6c80a5f5672","url":"javascripts/blocks/custom.js"},{"revision":"330b4f9bc8334ef5a298f835799ced8a","url":"javascripts/blocks/customization-filter.js"},{"revision":"61b078a8859324cbb3cb6e848d278a4e","url":"javascripts/blocks/customization.js"},{"revision":"4561c146d6ceb99d6361bcaae17c38f8","url":"javascripts/blocks/data.js"},{"revision":"dfd74888f0f75ac74ceaa9802de79fa1","url":"javascripts/blocks/divider.js"},{"revision":"b1bf24d557aab0a279f86de9bf329c11","url":"javascripts/blocks/drag-and-drop.js"},{"revision":"cf0ad802891a7c12c2e3a7d4e3667aa0","url":"javascripts/blocks/drag-n-drop.js"},{"revision":"04266f889cb87e4f74f0aacbfc0fc90d","url":"javascripts/blocks/embedded-survey.js"},{"revision":"bc6a7c274293a044f300b44ad4ab0594","url":"javascripts/blocks/evaluation-results.js"},{"revision":"6023cc081771cdb98467d89fb279e7e9","url":"javascripts/blocks/field.js"},{"revision":"c8ca2e3b5e77278a7682ea8e5c80b165","url":"javascripts/blocks/form.js"},{"revision":"91bf148e0895473862588ea224fa490e","url":"javascripts/blocks/glossary.js"},{"revision":"d8093b5d7a9bfe4f4bca8182adce9c20","url":"javascripts/blocks/group.js"},{"revision":"52106dde51c31448c48dc5d56ce300c0","url":"javascripts/blocks/header.js"},{"revision":"a01ee60ccf2b2545b609b78e153b69b4","url":"javascripts/blocks/hotspot.js"},{"revision":"f651b457b3ed9fb8538e4008f3f9505c","url":"javascripts/blocks/html-import.js"},{"revision":"905493a2aa93355ca8fc22c91f704713","url":"javascripts/blocks/icon.js"},{"revision":"17e0a312253a99df66d9db4939c44bf0","url":"javascripts/blocks/iframe.js"},{"revision":"e3559e027aff7877b36bf706fdc68500","url":"javascripts/blocks/image.js"},{"revision":"50829499ca3e8e453905378b68eedfa0","url":"javascripts/blocks/import.js"},{"revision":"680d67e734b402959d68d9f19837f0a6","url":"javascripts/blocks/inline.js"},{"revision":"44da6ce2300d40cb02f703f6d65b8c6f","url":"javascripts/blocks/input.js"},{"revision":"ff26e7ed9b25d90d7db04d22cecba48f","url":"javascripts/blocks/label.js"},{"revision":"f74b59ed3520edfa6e33dfa218fef9a1","url":"javascripts/blocks/layout.js"},{"revision":"0ed4a76d3fd7ac68eb48f4c87960c7c8","url":"javascripts/blocks/link.js"},{"revision":"baa2ee344493a39126f80c7853cf80a5","url":"javascripts/blocks/list.js"},{"revision":"d7fe5c49434c9358c4de6fbecab85ba6","url":"javascripts/blocks/locale-selector.js"},{"revision":"a75319d149f78a7c569e42dcb6c3e21c","url":"javascripts/blocks/locale.js"},{"revision":"bcda0c849a30d4d5ecebc36caa910848","url":"javascripts/blocks/lottie-randomizer.js"},{"revision":"8b5dd9a8fa1a8521b1c82d886ddbc277","url":"javascripts/blocks/lottie.js"},{"revision":"7d5248a8818cdcd366c4069ca1086c09","url":"javascripts/blocks/modal.js"},{"revision":"90c74d56032c9f789e7b11e6dc7f7362","url":"javascripts/blocks/module.js"},{"revision":"f4ef908f7e67678dd76bf90e8ad6af15","url":"javascripts/blocks/page-path.js"},{"revision":"9db10efd1d07cec0593528bb20691459","url":"javascripts/blocks/poll-results.js"},{"revision":"8f6a4f903995c5cb5b8b9d27a8dc474a","url":"javascripts/blocks/poll.js"},{"revision":"41755f08483d348fa81cef6cf2bfc2c9","url":"javascripts/blocks/progression.js"},{"revision":"5475a665f8a9e3905251bc77f50c249e","url":"javascripts/blocks/rank.js"},{"revision":"ae5755ea643cf608f7b13ae76d704168","url":"javascripts/blocks/resource.js"},{"revision":"e20bc7903f2591d4819487c574ffba1c","url":"javascripts/blocks/results.js"},{"revision":"f9af89166d71c66c5895dec68ab620ce","url":"javascripts/blocks/session.js"},{"revision":"729f94edd076f973323020b993742513","url":"javascripts/blocks/slider.js"},{"revision":"c63a246cfb424c4eb9361aaca9f37a6b","url":"javascripts/blocks/state-law.js"},{"revision":"c390c69b7137bd31d1cc629cd203e96d","url":"javascripts/blocks/survey.js"},{"revision":"aa437c8b58df9be593bec159b7f50699","url":"javascripts/blocks/switch.js"},{"revision":"79a3573727b47d3914c8fa1578f6126d","url":"javascripts/blocks/tab.js"},{"revision":"a6cb499d7e04ea171cbed104d13b0c4f","url":"javascripts/blocks/table.js"},{"revision":"6e27b0e3ec7b68925b7f5412f12dc6ab","url":"javascripts/blocks/templates.js"},{"revision":"528189b7a428f3017fb77e2fde030c15","url":"javascripts/blocks/text.js"},{"revision":"25c88595f22cb39a390a1dd743d52439","url":"javascripts/blocks/twine.js"},{"revision":"e7639ce2ecf514fc6253da986fb22082","url":"javascripts/blocks/video.js"},{"revision":"01ab03a77492d74e7a1b9c0d06009a8b","url":"javascripts/vendor.js"},{"revision":"dd6d5643e07f224e20872d46bfa64505","url":"javascripts/ef.js"},{"revision":"a4530e5bb41808bfc204878e9c100e7f","url":"javascripts/everfi-sdk.js"},{"revision":"d029931467a8feb9b4f11c67caf99019","url":"javascripts/local-data.js"},{"revision":"cdd6e517a2ed07e92a55ccff73c541ed","url":"javascripts/app.js"},{"revision":"162aada8a11c84eb822d2e6b035a1270","url":"content/locales/ar-AE.json"},{"revision":"a7cae98e9d8b11989dca666d6744211f","url":"content/locales/bg-BG.json"},{"revision":"22016cc1ef5b3f940993f1bb208e04f8","url":"content/locales/cs-CZ.json"},{"revision":"13b6981e85c623593483eeb6b9c94557","url":"content/locales/da-DK.json"},{"revision":"2ec4d54d61f16108c7828070a0790bd7","url":"content/locales/de.json"},{"revision":"84145046475d36614d0c9520dcf233d6","url":"content/locales/el-GR.json"},{"revision":"82ce70a5ed3c1343f6f92d670feee1e4","url":"content/locales/en-GB.json"},{"revision":"b1a7583e475b447156393deb71dbb4bd","url":"content/locales/en.json"},{"revision":"f5e8cd3b7719dc3c2d41ba3ed8899108","url":"content/locales/es-ES.json"},{"revision":"52b4210f172cd3dc5a32db067e7568b3","url":"content/locales/es.json"},{"revision":"2d01661f54b4d8fc5d54604593b1f808","url":"content/locales/fi-FI.json"},{"revision":"7ad193074a3d71e8a80b34c8409002da","url":"content/locales/fr-CA.json"},{"revision":"42ffa24fb78d7a846e38984389e253f9","url":"content/locales/fr-FR.json"},{"revision":"f8abd9b8720b5e3d10f4d4b8effebad9","url":"content/locales/he-IL.json"},{"revision":"d909b7dfd7aacbdd1147ffbc5c3a776f","url":"content/locales/hi-IN.json"},{"revision":"582e250e1296f7002628478b90399e5f","url":"content/locales/hu-HU.json"},{"revision":"1ddc29b6490d3f539fe56d7cb41a9670","url":"content/locales/id-ID.json"},{"revision":"2bc0e782f94bc2e45e466519c4738a93","url":"content/locales/it.json"},{"revision":"8b5b0b37e17509b31660821c219adc52","url":"content/locales/ja.json"},{"revision":"13993de1c26fb9bebbe8fa6d828b5e81","url":"content/locales/ko.json"},{"revision":"9014c485843294c40ac80dffbf7e5ef6","url":"content/locales/ms-MY.json"},{"revision":"b8753f7ee94bb8c90d655449e55be295","url":"content/locales/nl-NL.json"},{"revision":"52d597799297958b56602c25a043ea1f","url":"content/locales/pl-PL.json"},{"revision":"43d7f6f5edc86d2df8b6bacfcf2d4718","url":"content/locales/pt-BR.json"},{"revision":"331d2726a41241e8986d034337b3754d","url":"content/locales/ro-RO.json"},{"revision":"af98d2719e11909ee951842526b77ae5","url":"content/locales/ru.json"},{"revision":"a49db74972bd5ea9f58fd4cbd981835a","url":"content/locales/sk-SK.json"},{"revision":"ab8535fae332e4736038c2cc9d4fa80b","url":"content/locales/sl-SI.json"},{"revision":"3c00674bdc08570510c4bb9b684b0b79","url":"content/locales/sr-RS.json"},{"revision":"a046795ba042c5da5f67d55299247b7a","url":"content/locales/sv-SE.json"},{"revision":"8084212af286ebd144401df93c31e40f","url":"content/locales/th-TH.json"},{"revision":"ce3b5b3fbb71768af5b4501715b1f1bb","url":"content/locales/tl-PH.json"},{"revision":"5f2218de94e6304de5b14112e02d11f4","url":"content/locales/tr-TR.json"},{"revision":"efb46d99a3468f7a32f36b1d3d6a5dc0","url":"content/locales/uk-UA.json"},{"revision":"4683f356e768bd9fbe03b29824987ca7","url":"content/locales/vi-VN.json"},{"revision":"d97d8fe543638d9484eb5f209a5f3154","url":"content/locales/zh-CN.json"},{"revision":"d775954ecdc6d55bc43849da99f73702","url":"content/locales/zh-TW.json"}]);

/*
Indexdb implementation
*/
const logError = err => {
  console.log(`IndexedDb error: ${err}`);
};
//Connection setup to indexed db
const connectDB = callback => {
  const request = indexedDB.open(DBNAME, 1);
  request.onerror = logError;
  request.onsuccess = function () {
    callback(request.result);
  };
  request.onupgradeneeded = function (e) {
    e.currentTarget.result.createObjectStore(STORENAME, { keyPath: 'url' });
    connectDB(callback);
  };
};
//indexed db service wrapper
const idbService = {
  //Store response to Indexeddb
  save: data =>
    new Promise(resolve =>
      connectDB(function (db) {
        const request = db.transaction([STORENAME], 'readwrite').objectStore(STORENAME).put(data);
        request.onerror = logError;
        request.onsuccess = function () {
          resolve(request.result);
        };
      })
    ),

  //Fetch response from Indexeddb
  fetch: key =>
    new Promise(resolve =>
      connectDB(function (db) {
        const request = db.transaction([STORENAME], 'readonly').objectStore(STORENAME).get(key);
        request.onerror = logError;
        request.onsuccess = function () {
          resolve(request.result);
        };
      })
    ),
};

//Fetch response from Network
const fetchFromNetwork = async request => {
  const response = await fetch(request);
  if (response.ok) {
    const obj = {
      url: getRequestUrl(request),
      headers: JSON.stringify(response.headers),
      status: response.status,
      statusText: response.statusText,
    };
    if (request.url.match(/\.(json)$/)) {
      obj.jsonData = await response.clone().json();
    } else {
      obj.blobData = await response.clone().blob();
    }
    await idbService.save(obj);
  }
  return response;
};

// video response headers set with bytes and range bytes.

const getVideoRangeResponseOptions = (request, response) => {
  const rangeRequest = request.headers.get('range') || '';
  const byteRanges = rangeRequest.match(/bytes=(?<from>[0-9]+)?-(?<to>[0-9]+)?/);
  const rangeFrom = Number(byteRanges?.groups?.from || 0);
  const rangeTo = Number(byteRanges?.groups?.to || response.blobData - 1);
  const responseOpts = {
    status: rangeRequest ? 206 : 200,
    statusText: rangeRequest ? 'Partial Content' : 'OK',
    headers: {
      'Accept-Ranges': 'bytes',
      'Content-Length': rangeTo - rangeFrom + 1,
      'Content-Type': response.blobData.type,
      'X-From-Cache': 'true',
    },
  };
  if (rangeRequest) {
    responseOpts.headers['Content-Range'] = `bytes ${rangeFrom}-${rangeTo}/${response.blobData.size}`;
  }
  return responseOpts;
};
const getRequestUrl = request => {
  if (request.headers && request.headers.get('range')) {
    return `${request.url}--${request.headers.get('range')}`;
  }
  return request.url;
};
//Strategy for large files like Image/Video/JSONs
const fetchIdbStrategy = async request => {
  try {
    const response = await idbService.fetch(getRequestUrl(request));
    if (response) {
      const isJson = request.url.match(/\.(json)$/);
      if (request.headers && request.headers.get('range')) {
        return new Response(response.blobData, getVideoRangeResponseOptions(request, response));
      } else {
        return new Response(isJson ? JSON.stringify(response.jsonData) : response.blobData, {
          status: response.status,
          statusText: `${response.statusText} - Fetched from IndexedDB!`,
        });
      }
    } else {
      return fetchFromNetwork(request);
    }
  } catch (err) {
    return fetchFromNetwork(request);
  }
};
//Request matcher for large files to cache response in indexeddb
const matcherIndexedDb = ({ request }) => {
  return (
    request.url.match(/\.(jpeg|jpg|gif|png|mp3|mp4|json)$/) ||
    request.url.indexOf('/media/videos/') >= 0 ||
    request.url.indexOf('/video-metadata/') >= 0
  );
};

//Callback handler for image/video requests
const handlerCbIndexedDb = ({ request, event }) => {
  event.respondWith(
    (async () => {
      return await fetchIdbStrategy(request);
    })()
  );
};
//Register route for workbox indexed db strategy
registerRoute(matcherIndexedDb, handlerCbIndexedDb);

//backgournd sync 
const bgSyncPlugin = new BackgroundSyncPlugin('BackgroundSyncQueue', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});


//registerRoute intercepts a fetch request
registerRoute(
  /\/api\/.*\/*.json/,
  new NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);