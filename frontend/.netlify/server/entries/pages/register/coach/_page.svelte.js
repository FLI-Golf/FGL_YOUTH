import { i as head } from "../../../../chunks/server.js";
//#region src/routes/register/coach/+page.svelte
function _page($$renderer) {
	head("1n431pl", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Coach Registration | FGL_YOUTH</title>`);
		});
		$$renderer.push(`<meta name="description" content="Register a coach, director, or volunteer."/>`);
	});
	$$renderer.push(`<section class="page svelte-1n431pl"><p class="eyebrow svelte-1n431pl">Registration</p> <h1 class="svelte-1n431pl">Coach Registration</h1> <p class="svelte-1n431pl">Add coaches, directors, or volunteers here. This route can later collect role details and
    permissions for your staff roster.</p> <a class="back svelte-1n431pl" href="/">Back to home</a></section>`);
}
//#endregion
export { _page as default };
