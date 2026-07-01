import { a as head, b as escape_html, y as attr } from "../../../../chunks/server.js";
import "../../../../chunks/RegistrationService.js";
//#region src/routes/register/coach/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let submitting = false;
		head("1n431pl", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Coach Registration | FGL_YOUTH</title>`);
			});
			$$renderer.push(`<meta name="description" content="Register a coach, director, or volunteer."/>`);
		});
		$$renderer.push(`<section class="page svelte-1n431pl"><div class="header-card svelte-1n431pl"><div class="header-top svelte-1n431pl"><div class="header-icon svelte-1n431pl" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation" focusable="false" class="svelte-1n431pl"><path d="M12 2 1 7v2h22V7L12 2Zm-7 9h3v9H5v-9Zm5 0h4v9h-4v-9Zm6 0h3v9h-3v-9ZM2 22h20v-2H2v2Z"></path></svg></div> <div><p class="eyebrow svelte-1n431pl">Registration</p> <h1 class="svelte-1n431pl">Coach Registration</h1></div></div> <p class="role-pill svelte-1n431pl">Account role: Coach</p> <p class="lede svelte-1n431pl">Add coaches, directors, and volunteers so your staff roster stays organized.</p></div> <form class="form-card svelte-1n431pl"><div class="form-grid svelte-1n431pl"><label class="svelte-1n431pl"><span class="svelte-1n431pl">First name</span> <input type="text" name="firstName" autocomplete="given-name" required="" class="svelte-1n431pl"/></label> <label class="svelte-1n431pl"><span class="svelte-1n431pl">Last name</span> <input type="text" name="lastName" autocomplete="family-name" required="" class="svelte-1n431pl"/></label> <label class="full-width svelte-1n431pl"><span class="svelte-1n431pl">Coach type</span> <select name="coachType" required="" class="svelte-1n431pl">`);
		$$renderer.option({ value: "" }, ($$renderer) => {
			$$renderer.push(`Select one`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Coach`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Program director`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Volunteer`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Assistant coach`);
		});
		$$renderer.push(`</select></label> <label class="svelte-1n431pl"><span class="svelte-1n431pl">Email</span> <input type="email" name="email" autocomplete="email" required="" class="svelte-1n431pl"/></label> <label class="svelte-1n431pl"><span class="svelte-1n431pl">Password</span> <input type="password" name="password" autocomplete="new-password" minlength="8" required="" class="svelte-1n431pl"/></label> <label class="svelte-1n431pl"><span class="svelte-1n431pl">Confirm password</span> <input type="password" name="passwordConfirm" autocomplete="new-password" minlength="8" required="" class="svelte-1n431pl"/></label> <label class="svelte-1n431pl"><span class="svelte-1n431pl">Phone</span> <input type="tel" name="phone" autocomplete="tel" class="svelte-1n431pl"/></label> <label class="svelte-1n431pl"><span class="svelte-1n431pl">Organization</span> <input type="text" name="organization" required="" class="svelte-1n431pl"/></label> <label class="svelte-1n431pl"><span class="svelte-1n431pl">Certification status</span> <select name="certificationStatus" class="svelte-1n431pl">`);
		$$renderer.option({ value: "" }, ($$renderer) => {
			$$renderer.push(`Select one`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Current`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Pending`);
		});
		$$renderer.option({}, ($$renderer) => {
			$$renderer.push(`Not required`);
		});
		$$renderer.push(`</select></label> <label class="full-width svelte-1n431pl"><span class="svelte-1n431pl">Notes</span> <textarea name="notes" rows="4" placeholder="Availability, experience, or other staff details" class="svelte-1n431pl"></textarea></label></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="actions svelte-1n431pl"><button type="submit"${attr("disabled", submitting, true)} class="svelte-1n431pl">${escape_html("Submit coach registration")}</button> <a class="back svelte-1n431pl" href="/">Back to home</a></div></form></section>`);
	});
}
//#endregion
export { _page as default };
