import "../../chunks/server.js";
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	$$renderer.push(`<main>`);
	children($$renderer);
	$$renderer.push(`<!----></main>`);
}
//#endregion
export { _layout as default };
