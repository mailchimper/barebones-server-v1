/*global Ultraviolet*/
self.__uv$config = {
    prefix: "/uv/service/",
    bare: "https://backend-test-v2.humbertoesteban-terriquezpimienta.workers.dev/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv/uv.handler.js",
    client: "/uv/uv.client.js",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    sw: "/uv/uv.sw.js",
};
