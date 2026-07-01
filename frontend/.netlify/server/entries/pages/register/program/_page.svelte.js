import { a as head, b as escape_html, y as attr } from "../../../../chunks/server.js";
import "../../../../chunks/RegistrationService.js";
//#region src/routes/register/program/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let submitting = false;
		head("1bdgxav", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Program Registration | FGL_YOUTH</title>`);
			});
			$$renderer.push(`<meta name="description" content="Register a new youth disc golf program."/>`);
		});
		$$renderer.push(`<section class="page svelte-1bdgxav"><div class="header-card svelte-1bdgxav"><div class="header-top svelte-1bdgxav"><div class="header-icon svelte-1bdgxav" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-1bdgxav"><path d="M4 20V8l8-4 8 4v12H4Zm4-2h8v-6H8v6Zm2-8h4V8h-4v2Z"></path></svg></div> <div><p class="eyebrow svelte-1bdgxav">Registration</p> <h1 class="svelte-1bdgxav">Program Registration</h1></div></div> <p class="role-pill svelte-1bdgxav">Account role: Program director</p> <p class="lede svelte-1bdgxav">Set up the organization, season details, and logistics for a club or school program.</p></div> <form class="form-card svelte-1bdgxav"><div class="form-grid svelte-1bdgxav"><label class="full-width svelte-1bdgxav"><span class="svelte-1bdgxav">Program name</span> <input type="text" name="programName" required="" class="svelte-1bdgxav"/></label> <label class="svelte-1bdgxav"><span class="svelte-1bdgxav">Organization type</span> <select name="organizationType" required="" class="svelte-1bdgxav">`);
		$$renderer.option({ value: "" }, ($$renderer) => {
			$$renderer.push(`Select one`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Club`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`School`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Community center`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Park district`);
		});
		$$renderer.push(`</select></label> <label class="svelte-1bdgxav"><span class="svelte-1bdgxav">Season start</span> <input type="date" name="seasonStart" required="" class="svelte-1bdgxav"/></label> <label class="svelte-1bdgxav"><span class="svelte-1bdgxav">Season end</span> <input type="date" name="seasonEnd" required="" class="svelte-1bdgxav"/></label> <label class="svelte-1bdgxav"><span class="svelte-1bdgxav">Primary contact</span> <input type="text" name="contactName" autocomplete="name" required="" class="svelte-1bdgxav"/></label> <label class="svelte-1bdgxav"><span class="svelte-1bdgxav">Contact email</span> <input type="email" name="contactEmail" autocomplete="email" required="" class="svelte-1bdgxav"/></label> <label class="svelte-1bdgxav"><span class="svelte-1bdgxav">Password</span> <input type="password" name="password" autocomplete="new-password" minlength="8" required="" class="svelte-1bdgxav"/></label> <label class="svelte-1bdgxav"><span class="svelte-1bdgxav">Confirm password</span> <input type="password" name="passwordConfirm" autocomplete="new-password" minlength="8" required="" class="svelte-1bdgxav"/></label> <label class="svelte-1bdgxav"><span class="svelte-1bdgxav">Contact phone</span> <input type="tel" name="contactPhone" autocomplete="tel" class="svelte-1bdgxav"/></label> <label class="svelte-1bdgxav"><span class="svelte-1bdgxav">Expected participants</span> <input type="number" name="participantCount" min="0" step="1" class="svelte-1bdgxav"/></label> <label class="full-width svelte-1bdgxav"><span class="svelte-1bdgxav">Program goals</span> <textarea name="goals" rows="4" placeholder="Describe age groups, days, locations, or training goals" class="svelte-1bdgxav"></textarea></label></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="actions svelte-1bdgxav"><button type="submit"${attr("disabled", submitting, true)} class="svelte-1bdgxav">${escape_html("Submit program registration")}</button> <a class="back svelte-1bdgxav" href="/">Back to home</a></div></form></section>`);
	});
}
//#endregion
export { _page as default };
