import { i as head } from "../../../../chunks/server.js";
//#region src/routes/register/program/+page.svelte
function _page($$renderer) {
	head("1bdgxav", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Program Registration | FGL_YOUTH</title>`);
		});
		$$renderer.push(`<meta name="description" content="Register a new youth disc golf program."/>`);
	});
	$$renderer.push(`<section class="page svelte-1bdgxav"><p class="eyebrow svelte-1bdgxav">Registration</p> <h1 class="svelte-1bdgxav">Program Registration</h1> <p class="svelte-1bdgxav">Use this page for club, season, or program setup. It is ready to be connected to an
    onboarding workflow or admin form.</p> <a class="back svelte-1bdgxav" href="/">Back to home</a></section>`);
}
//#endregion
export { _page as default };
