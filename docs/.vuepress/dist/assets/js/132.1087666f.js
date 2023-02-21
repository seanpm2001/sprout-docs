(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{610:function(t,e,a){"use strict";a.r(e);var s=a(34),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("Custom Sections")]),t._v(" "),a("p",[t._v("Custom Sections allow you to add arbitrary page URLs to your XML Sitemap and manage metadata for pages that may not be otherwise supported using the URL-Enabled Sections or Element Metadata field.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),a("p",[t._v("Custom Sections have been deprecated in Sprout SEO 4.")]),t._v(" "),a("p",[t._v("We strongly recommend using the "),a("RouterLink",{attrs:{to:"/seo/element-metadata-field.html"}},[t._v("Element Metadata Field")]),t._v(" instead. The same functionality can be achieved with the right configuration and upgrading to the latest version of Sprout SEO will be easier if you do. Custom Pages are now handled entirely in the Sitemaps section.")],1)]),t._v(" "),a("p",[t._v("Consider a User Profile section where all User data is managed in the Users section, however no specific page exists for the listing page of all the User Profiles on the front-end. In this case, you may want to create a Custom Section for your User Profile listing page.")]),t._v(" "),a("p",[t._v("Custom Sections probably only need to be used for more advanced situations. Managing metadata and XML sitemaps via the default URL-Enabled Settings will likely require less overhead to get setup and be easier for the average user to understand.")]),t._v(" "),a("p",[t._v("Custom Sections can be enabled in Sprout SEO's Advanced settings and will require additional, manual updates to your template to add to the metadata cascade.")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("To indicate that you want a specific Custom Section added to the metadata processed in a template, use the Sprout SEO "),a("code",[t._v("meta")]),t._v(" tag and set the "),a("code",[t._v("section")]),t._v(" attribute to the handle of your Custom Section. All custom section handles should be prefixed with "),a("code",[t._v("sproutseo_section")]),t._v(":")])]),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("do")]),t._v(" sprout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  section"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("sproutseo_section:customSectionHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n")])])]),a("p",[t._v("By default, the value you use in the Custom Sections URL setting will be used for the URL. This URL is not monitored in any way dynamically, only output in your metadata when you specifically tell it to be output with the code above.")]),t._v(" "),a("p",[t._v("As you can only define one URL in a Custom Section, if you plans to use the Custom Section as fallback metadata in more than one template, you can further customize your meta override tag to output a unique URL on each page where the override exists:")]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("do")]),t._v(" sprout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  section"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("sproutseo_section:customSectionHandle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  canonical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" craft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ogUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" craft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  twitterUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" craft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);