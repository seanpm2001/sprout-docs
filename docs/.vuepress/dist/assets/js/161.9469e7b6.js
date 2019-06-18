(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{225:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",[e._v("Craft 2")]),e._v(" "),a("p",[e._v("Sprout SEO installation and update instructions for Craft 2.")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Sprout SEO 2 for Craft 2 is no longer supported. If you are still running a Craft install that uses Sprout SEO 2 you can reference the "),a("router-link",{attrs:{to:"./v2/"}},[e._v("legacy documentation")]),e._v(" in our archive or reach out for support via our consulting services.")],1)]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("Updates are available via the Github repository.")]),e._v(" "),a("ul",[a("li",[e._v("Visit the "),a("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-seo/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sprout SEO releases"),a("OutboundLink")],1),e._v(" tab")]),e._v(" "),a("li",[e._v("Download the latest version of Sprout Email v3.x")])]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),a("h4",[e._v("Defaults and Sitemaps are now Globals and Sections")]),e._v(" "),a("p",[e._v("Defaults and Sitemaps no longer exist separately. You will now manage your Global Fallback details on the new 'Globals' tab. Specific Defaults will be managed in the new 'Sections' tab. Sections are now URL-aware and also allow you manage your Sitemap settings.")]),e._v(" "),a("h4",[e._v("All Meta fields have been combined into a single Element Metadata field")]),e._v(" "),a("p",[e._v("All Meta field types have been simplified to a single Element Metadata field type. The Element Metadata field type gives you a lot more control over how you can optionally set dynamic default values so you can leverage the content you have in your metadata instead of having to enter it twice.")]),e._v(" "),a("h4",[e._v("Simplify your templates")]),e._v(" "),a("p",[e._v("The new URL-Enabled Sections and Element Metadata fields, in most cases, allow you to simplify your template code to a single tag and allow you and your content editors to customize SEO directly from the Control Panel.")]),e._v(" "),a("h4",[e._v("Structured Data is now supported")]),e._v(" "),a("p",[e._v("Structured Data and several out-of-the-box schemas are now supported. Simple Main Entity schemas are supported and a custom Schema API allows you to map your unique content to your specific Structured Data needs.")]),e._v(" "),a("h4",[e._v("Improved Performance with Redirects")]),e._v(" "),a("p",[e._v("In Sprout SEO 3, we only query the database to process Redirects if a request to your site 404s. This improves performance for most website users, but leads to a potential gotcha that we outline below in the Breaking Changes section.")]),e._v(" "),e._m(11),e._v(" "),a("h4",[e._v("Update to the latest version of Craft")]),e._v(" "),a("p",[e._v("Some UI improvements will only be visible in a more recent version of Craft. Make sure you are running Craft 2.6.2949 or something higher for the best experience.")]),e._v(" "),a("h4",[e._v("Update your templates to use the new sproutseo tag")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),a("h4",[e._v("Defaults have been removed")]),e._v(" "),a("p",[e._v("Any Defaults that you had setup in Sprout SEO 2 will be migrated to the new Custom Sections area.")]),e._v(" "),e._m(16),e._v(" "),a("p",[e._v("There are 2 ways you can get things working again:")]),e._v(" "),e._m(17),e._v(" "),a("p",[e._v("This will get things working again but does not take advantage of several new features in Sprout SEO. See Option 2 for a more powerful way to update your new Custom Sections with Sprout SEO 3.")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._m(20),e._v(" "),e._m(21),e._m(22),e._v(" "),a("p",[e._v("Sprout SEO 3 will automatically generate Section Metadata templates for all URL-Enabled Sections. By default, this includes Entry Sections, Category Groups, Craft Commerce Product Types, and Sprout Email Campaign Emails.")]),e._v(" "),a("p",[e._v("In Sprout SEO 2 you had to set the Default handle in the template code on all Listing and Detail pages where you wanted to use that metadata. In Sprout SEO 3, Section Metadata is URL-aware and will monitor all matching URLs for existing URL-Enabled Element Detail pages. For a listing page, you can either choose to add your Section handle to the code as described above, or just make sure your Listing page has a URL-Enabled Single or Channel Page associated with it in Craft, and you'll be able to keep your code clean and give full control over the metadata to your users.")]),e._v(" "),a("p",[e._v("To get the most out of Sprout SEO 3, you will want to migrate any metadata from your Custom Sections to the matching URL-Enabled Section and delete the duplicate Custom Section.")]),e._v(" "),a("p",[e._v("For example, let's say you had a Default named 'Blog' in Sprout SEO 2 to manage metadata for your Blog Listing page and fallback data for your Blog Entry Detail pages. In Sprout SEO 3, this will be migrated as a Custom Section named Blog, but Sprout SEO 3 will also generate a URL-Enabled Section named Blog (which will default to disabled).  We recommend you migrate your Custom Section named Blog to use the URL-Enabled Section named Blog. This will help simplify your templates, give more control over how metadata is managed in the Control Panel, and give Sprout SEO more awareness on how to give SEO-related hints to your users.")]),e._v(" "),e._m(23),e._v(" "),a("h4",[e._v("Some fields get managed in different places")]),e._v(" "),a("p",[e._v("Metadata Title, Description, Keywords, and Image fields are optimized to single fields")]),e._v(" "),a("p",[e._v("The Global Fallback Title, Description, and OpenGraph and Twitter image have been combined into a single Title, Description, and Image field in the new Globals settings. If you need more granularity in your Sections you will now need to implement it at the Section level.")]),e._v(" "),a("p",[e._v("The Global Fallback Twitter Creator value will be migrated as a Custom Section and will need to be managed at the Section level.")]),e._v(" "),a("h4",[e._v("Some settings are now set dynamically")]),e._v(" "),a("p",[e._v("The URL and Open Graph URL Global Fallback and Default settings are now managed dynamically.")]),e._v(" "),e._m(24),e._v(" "),a("h4",[e._v("Some less common metadata fields have been removed")]),e._v(" "),a("p",[e._v("The Open Graph audio and video fields have been removed. We are considering how to reimplement them in a more user-friendly way. Please let us know if you have a specific use case we can consider.")]),e._v(" "),a("p",[e._v("The author and publisher columns have been removed. The only way these could have been implemented in the last version of Sprout SEO is via template overrides and this was not documented. Please let us know if you have a use case for them we need to be aware of.")]),e._v(" "),a("p",[e._v("The Twitter Player card has been removed. We are considering how to reimplement them in a more user-friendly way. Please let us know if you have a specific use case we can consider.")]),e._v(" "),a("h4",[e._v("Some Redirects may require testing")]),e._v(" "),a("p",[e._v("Sprout SEO 3 improves the performance of Redirects and does so by changing the position in the page routing that the Redirects get processed. In the past, we checked for Redirects as one of the first things on every page load. Now, we wait until a page is about to return a 404 error before we run our check to see if any redirects exist. Due to this change, there are some scenarios where a previous Redirect could stop working after you upgrade to Sprout SEO 3.")]),e._v(" "),a("p",[e._v("We recommending re-testing your Redirects after upgrading to Sprout SEO 3 to make sure old entries with matching URLs or custom routes don't accidentally catch something you are redirecting.")]),e._v(" "),e._m(25),e._v(" "),a("h4",[e._v("Review and improve your Global fallbacks")]),e._v(" "),e._m(26),e._v(" "),a("p",[e._v("Once you have updated your Globals, you can probably delete the Custom Section that was being used as your Global Fallback. Those values will now be active at your Global Metadata Level.")]),e._v(" "),a("h4",[e._v("Automate SEO via the new Element Metadata field")]),e._v(" "),a("p",[e._v("If you were using any Meta fields, these will be migrated to the new Element Metadata field as custom values in the new Meta Details blocks. To give your users better default options, you can update your new Element Metadata field to use values from existing custom fields in your Element field layouts.")]),e._v(" "),a("h4",[e._v("Review new Global and Advanced settings")]),e._v(" "),e._m(27)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Craft 2.6.2771 or a more recent version of Craft")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("ul",[t("li",[this._v("Place the "),t("code",[this._v("sproutseo")]),this._v(" folder inside your "),t("code",[this._v("craft/plugins")]),this._v(" folder.")]),this._v(" "),t("li",[this._v("Install the plugin via the Craft Dashboard. (Settings→Plugins)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"updating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{pre:!0},[a("ul",[a("li",[e._v("Place the "),a("code",[e._v("sproutseo")]),e._v(" folder inside your "),a("code",[e._v("craft/plugins")]),e._v(" folder and overwrite the existing copy of "),a("code",[e._v("sproutseo")]),e._v(".")]),e._v(" "),a("li",[e._v("Point your browser to your Craft control panel. If you are prompted to proceed with a database update, click “Finish up” and let the database updates run.  If no database updates are needed, you will see your control panel load as normal and you are good to go.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"downloading-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#downloading-updates","aria-hidden":"true"}},[this._v("#")]),this._v(" Downloading Updates")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"updating-to-sprout-seo-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-to-sprout-seo-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating to Sprout SEO 3")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Sprout SEO 3 brings adds extensive support for "),a("strong",[e._v("Structured Data")]),e._v(", allowing you to generate Rich Cards using JSON-LD; introduces "),a("strong",[e._v("URL-Enabled Sections")]),e._v(" and the "),a("strong",[e._v("Element Metadata field")]),e._v(", which both greatly simplify the complexity of managing SEO for content editors; and introduces "),a("strong",[e._v("content-focused SEO and usability improvements")]),e._v(", so your content editors always know when they are modifying metadata and what types of metadata they will affect.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Sprout SEO 3 is a major release. To get the full benefit of these features, existing users will need to take a few additional, manual steps after updating. We've outlined those items below in the "),t("em",[this._v("Breaking Changes")]),this._v(" and "),t("em",[this._v("Things to do after upgrading")]),this._v(" sections.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"big-things-that-have-changed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#big-things-that-have-changed","aria-hidden":"true"}},[this._v("#")]),this._v(" Big things that have changed")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"breaking-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes","aria-hidden":"true"}},[this._v("#")]),this._v(" Breaking Changes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("p",[this._v("The "),t("code",[this._v("optimize")]),this._v(" variable is no longer supported:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{{")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("sproutSeo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("optimize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}}")])])]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("p",[this._v("Update your templates to use the new "),t("code",[this._v("sproutseo")]),this._v(" tag:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{%")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("sproutseo")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")]),e._v("optimize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("%}")])])]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{pre:!0},[a("p",[e._v("To avoid conflicts with existing Section handles, your Custom Section handles will be updated during your migration to include the string "),a("code",[e._v("customSection")]),e._v(". So, if you had a handle named "),a("code",[e._v("blog")]),e._v(", your new Custom Section handle will be "),a("code",[e._v("customSectionBlog")]),e._v(". In addition, because you could have an Entry Section and a Category Group and a Custom Section all with the same handle, in your templates you'll need to update your handles to include an identifier of what Section they belong to (for custom sections, this would be "),a("code",[e._v("sproutseo_section:customSectionBlog")]),e._v(").")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("1) Update the handles and attribute name")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Sprout SEO 2")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{%")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("sproutSeo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")]),e._v("handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("%}")])])]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Sprout SEO 3")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{%")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("sproutSeo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")]),e._v("sproutseo_section:customSectionHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("%}")])])]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("2) Migrate the Custom Section Metadata to its respective URL-Enabled Section")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Custom Sections in Sprout SEO 3 have a URL setting, which allows them to match a URL and know when to display your metadata dynamically. When we migrate the Sprout SEO 2 Defaults to Sprout SEO 3 Custom Sections, we set the URL to blank because we don't know what the URL of your Custom Section should be.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("p",[this._v("The Open Graph locale setting is now managed dynamically. If you are using Locales for multi-site behavior instead of multi-lingual behavior, you will want to enable "),t("code",[this._v("Settings->Advanced->Override default locale behavior")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"things-to-do-after-upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#things-to-do-after-upgrading","aria-hidden":"true"}},[this._v("#")]),this._v(" Things to do after upgrading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("p",[this._v("Review and add additional details about your website in the Globals section. "),t("code",[this._v("Globals->Website Identity")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("p",[this._v("The new version of Sprout SEO has additional options for the "),t("code",[this._v("Globals->Customization->Append value to all Meta Titles")]),this._v(" setting")])])}],!1,null,null,null);t.default=n.exports}}]);