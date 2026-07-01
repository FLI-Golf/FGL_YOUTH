import { b as escape_html, i as ensure_array_like, y as attr } from "../../chunks/server.js";
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	const footerLinks = [
		{
			label: "Home",
			href: "/"
		},
		{
			label: "Player Registration",
			href: "/register/player"
		},
		{
			label: "Program Registration",
			href: "/register/program"
		},
		{
			label: "Coach Registration",
			href: "/register/coach"
		}
	];
	$$renderer.push(`<main class="svelte-12qhfyh">`);
	children($$renderer);
	$$renderer.push(`<!----></main> <footer class="site-footer svelte-12qhfyh" aria-label="Site footer"><div class="footer-inner svelte-12qhfyh"><div class="footer-brand svelte-12qhfyh"><img src="/fliGolf_rwb-01.png" alt="FGL Youth logo" class="svelte-12qhfyh"/> <div class="footer-brand-copy svelte-12qhfyh"><strong class="svelte-12qhfyh">FGL Youth Development</strong> <p class="svelte-12qhfyh">Youth disc golf tools for programs, registration, and player growth.</p></div></div> <nav class="footer-nav svelte-12qhfyh" aria-label="Footer links"><!--[-->`);
	const each_array = ensure_array_like(footerLinks);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let link = each_array[$$index];
		$$renderer.push(`<a${attr("href", link.href)} class="svelte-12qhfyh">${escape_html(link.label)}</a>`);
	}
	$$renderer.push(`<!--]--></nav> <p class="footer-note svelte-12qhfyh">Built for clubs, schools, families, and staff who want a cleaner registration flow.</p></div></footer>`);
}
//#endregion
export { _layout as default };
