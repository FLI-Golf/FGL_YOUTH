

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BSJGlVpU.js","_app/immutable/chunks/LWJNK0TC.js","_app/immutable/chunks/xihTtKlq.js"];
export const stylesheets = ["_app/immutable/assets/0.hNrPN4_v.css"];
export const fonts = [];
