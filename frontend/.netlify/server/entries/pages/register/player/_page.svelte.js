import { a as head, b as escape_html, y as attr } from "../../../../chunks/server.js";
import "../../../../chunks/RegistrationService.js";
//#region src/routes/register/player/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let submitting = false;
		head("jced24", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Player Registration | FGL_YOUTH</title>`);
			});
			$$renderer.push(`<meta name="description" content="Register a participant for a youth disc golf program."/>`);
		});
		$$renderer.push(`<section class="page svelte-jced24"><div class="header-card svelte-jced24"><div class="header-top svelte-jced24"><div class="header-icon svelte-jced24" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-jced24"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8v-2a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v2h14Z"></path></svg></div> <div><p class="eyebrow svelte-jced24">Registration</p> <h1 class="svelte-jced24">Player Registration</h1></div></div> <p class="role-pill svelte-jced24">Account role: Player</p> <p class="lede svelte-jced24">Collect the essentials for a youth participant so the program can get them set up quickly.</p></div> <form class="form-card svelte-jced24"><div class="form-grid svelte-jced24"><label class="svelte-jced24"><span class="svelte-jced24">First name</span> <input type="text" name="firstName" autocomplete="given-name" required="" class="svelte-jced24"/></label> <label class="svelte-jced24"><span class="svelte-jced24">Last name</span> <input type="text" name="lastName" autocomplete="family-name" required="" class="svelte-jced24"/></label> <label class="svelte-jced24"><span class="svelte-jced24">Date of birth</span> <input type="date" name="dateOfBirth" required="" class="svelte-jced24"/></label> <label class="svelte-jced24"><span class="svelte-jced24">Guardian name</span> <input type="text" name="guardianName" autocomplete="name" required="" class="svelte-jced24"/></label> <label class="svelte-jced24"><span class="svelte-jced24">Email</span> <input type="email" name="email" autocomplete="email" required="" class="svelte-jced24"/></label> <label class="svelte-jced24"><span class="svelte-jced24">Password</span> <input type="password" name="password" autocomplete="new-password" minlength="8" required="" class="svelte-jced24"/></label> <label class="svelte-jced24"><span class="svelte-jced24">Confirm password</span> <input type="password" name="passwordConfirm" autocomplete="new-password" minlength="8" required="" class="svelte-jced24"/></label> <label class="svelte-jced24"><span class="svelte-jced24">Phone</span> <input type="tel" name="phone" autocomplete="tel" class="svelte-jced24"/></label> <label class="full-width svelte-jced24"><span class="svelte-jced24">Home club or school</span> <input type="text" name="organization" required="" class="svelte-jced24"/></label> <label class="full-width svelte-jced24"><span class="svelte-jced24">Notes</span> <textarea name="notes" rows="4" placeholder="Allergies, tee time preferences, or other details" class="svelte-jced24"></textarea></label></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="actions svelte-jced24"><button type="submit"${attr("disabled", submitting, true)} class="svelte-jced24">${escape_html("Submit player registration")}</button> <a class="back svelte-jced24" href="/">Back to home</a></div></form></section>`);
	});
}
//#endregion
export { _page as default };
