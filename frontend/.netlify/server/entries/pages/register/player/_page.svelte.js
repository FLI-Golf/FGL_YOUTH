import { i as head } from "../../../../chunks/server.js";
//#region src/routes/register/player/+page.svelte
function _page($$renderer) {
	head("jced24", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Player Registration | FGL_YOUTH</title>`);
		});
		$$renderer.push(`<meta name="description" content="Register a participant for a youth disc golf program."/>`);
	});
	$$renderer.push(`<section class="page svelte-jced24"><p class="eyebrow svelte-jced24">Registration</p> <h1 class="svelte-jced24">Player Registration</h1> <p class="svelte-jced24">This is the entry point for new participant signups. Connect this page to your PocketBase
    collection or form flow when you are ready to collect submissions.</p> <a class="back svelte-jced24" href="/">Back to home</a></section>`);
}
//#endregion
export { _page as default };
