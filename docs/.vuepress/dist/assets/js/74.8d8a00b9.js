(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{340:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",[t._v("Forms")]),t._v(" "),a("p",[t._v("Form Elements allow users to create and manage single and multi-page online forms within Craft CMS. Content authors can add "),a("router-link",{attrs:{to:"./form-fields.html"}},[t._v("Form Fields")]),t._v(", tabs, and customize a form's settings such as a custom Title Format, Redirect, or Submit Button text.")],1),t._v(" "),a("p",[t._v("When forms are submitted, a form "),a("router-link",{attrs:{to:"./entries.html"}},[t._v("Entry")]),t._v(" will be created in your Craft database. Send "),a("router-link",{attrs:{to:"./notifications.html"}},[t._v("Notification Emails")]),t._v(" to confirm receipt with the user or notify admins that a new Entry is ready for review. Run and export "),a("router-link",{attrs:{to:"./reports.html"}},[t._v("Reports")]),t._v(" to learn more.")],1),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("Forms are displayed on your website using Form Templates. Sprout Forms comes with two "),a("router-link",{attrs:{to:"./default-form-templates.html"}},[t._v("Default Form Templates")]),t._v(" and your web team can customize and style those templates using "),a("router-link",{attrs:{to:"./template-overrides.html"}},[t._v("Template Overrides")]),t._v(" or by building a "),a("router-link",{attrs:{to:"./custom-form-templates.html"}},[t._v("Custom Form Template")]),t._v(" integration.")],1),t._v(" "),a("p",[t._v("Front-end validation, error states, accessibility, and submitting your form data will be managed from your Form Templates.")]),t._v(" "),a("p",[t._v("Form Templates can be set globally or customized on a per-form basis. You can switch between Form Templates via the Form Templates dropdown field in the global settings or (if enabled) on an individual form's settings.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("To make a form available to your users, you will need to display it in your templates. This can be done for a specific form or, for scenarios such as landing pages, you can let your content authors select or build a custom form for a specific page.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Display a specific form on a specific page in your templates like so:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("Add a Form Relations Field to a Field Layout to allow a content author to select any available Form to display on a particular page.")]),t._v(" "),a("code-toggle",{attrs:{languages:["slot0","slot3"],labels:{slot0:"Craft 3",slot3:"Craft 2"}}},[a("template",{slot:"slot0"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("formHandle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("formFieldHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("one")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("handle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("formHandle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])])]),t._v(" "),a("template",{slot:"slot3"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("formHandle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("formFieldHandle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("first")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("handle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("formHandle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])])])],2),t._v(" "),t._m(5),t._v(" "),a("div",{pre:!0},[a("p",[t._v("While the primary tag you will use in your templates is the "),a("code",[t._v("displayForm")]),t._v(" tag, there are several tags to be aware of if you begin using "),a("router-link",{pre:!0,attrs:{to:"./template-overrides.html"}},[t._v("Template Overrides")]),t._v(" or get into more advanced use cases.")],1)]),t._v(" "),a("h4",[t._v("form")]),t._v(" "),t._m(6),t._v(" "),a("code-toggle",{attrs:{languages:["slot0","slot3"],labels:{slot0:"Craft 3",slot3:"Craft 2"}}},[a("template",{slot:"slot0"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# Returns a barrelstrength\\sproutforms\\elements\\Form #}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])]),t._v(" "),a("template",{slot:"slot3"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# Returns a SproutForms_FormModel #}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])])],2),t._v(" "),a("h4",[t._v("displayForm")]),t._v(" "),t._m(7),t._v(" "),t._m(8),a("h4",[t._v("displayTab")]),t._v(" "),t._m(9),t._v(" "),a("code-toggle",{attrs:{languages:["slot0","slot3"],labels:{slot0:"Craft 3",slot3:"Craft 2"}}},[a("template",{slot:"slot0"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("tab")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("getFieldLayout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("getTabs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("tab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("renderingOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])]),t._v(" "),a("template",{slot:"slot3"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayTab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contact.tab1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# Examples of how Tab Handles get processed:\n\nTab Name             Tab Handle\n----------           ----------\nTab 1                tab1\nSection One          sectionone\nPersonal Questions   personalquestions\n#}")]),t._v("\n")])])])])],2),t._v(" "),a("h4",[t._v("displayField")]),t._v(" "),t._m(10),t._v(" "),a("code-toggle",{attrs:{languages:["slot0","slot3"],labels:{slot0:"Craft 3",slot3:"Craft 2"}}},[a("template",{slot:"slot0"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("layoutFields")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("tab")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("getFields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("field")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("layoutFields")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-%}")])])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("renderingOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])]),t._v(" "),a("template",{slot:"slot3"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contact.email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])])])],2),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Sprout Forms adds a Form Relations Field to Craft CMS:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("Sprout Forms allows you to set a redirect for your Form in the Form Settings or in the template.")]),t._v(" "),a("code-toggle",{attrs:{languages:["slot0","slot3"],labels:{slot0:"Craft 3",slot3:"Craft 2"}}},[a("template",{slot:"slot0"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("accept-charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sprout-forms/entries/save-entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("contact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("redirectInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("contact?message=thankyou"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# All of your fields here #}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n")])])])]),t._v(" "),a("template",{slot:"slot3"},[a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("accept-charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sproutForms/entries/saveEntry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("contact"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("contact?message=thankyou"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# All of your fields here #}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n")])])])])],2),t._v(" "),t._m(15),t._v(" "),a("h4",[t._v("Example redirect values:")]),t._v(" "),t._m(16)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"form-templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form-templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Form Templates")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"templating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templating","aria-hidden":"true"}},[this._v("#")]),this._v(" Templating")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"a-specific-form"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-specific-form","aria-hidden":"true"}},[this._v("#")]),this._v(" A specific form")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contactForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"a-chosen-form"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-chosen-form","aria-hidden":"true"}},[this._v("#")]),this._v(" A chosen form")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"template-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-tags","aria-hidden":"true"}},[this._v("#")]),this._v(" Template Tags")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("You can access your Form Element directly using the "),s("code",[this._v("form")]),this._v(" tag.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("The "),s("code",[this._v("displayForm")]),this._v(" tag renders the HTML for all files defined in your Form Templates.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("contactForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("The "),s("code",[this._v("displayTab")]),this._v(" tag is called within the "),s("code",[this._v("displayForm")]),this._v(" tag and renders each individual tab defined in your form and all fields within it.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("The "),s("code",[this._v("displayField")]),this._v(" tag is called within the "),s("code",[this._v("displayTab")]),this._v(" tag and renders each individual field defined in your Tab's Field Layout.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"form-relations-field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form-relations-field","aria-hidden":"true"}},[this._v("#")]),this._v(" Form Relations Field")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("Forms (Sprout Forms)")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Settings")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"redirects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirects","aria-hidden":"true"}},[this._v("#")]),this._v(" Redirects")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("Your redirect value can be an absolute URL, relative URL, or use the dynamic "),s("code",[this._v("{siteUrl}")]),this._v(" variable:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("/thank-you")]),t._v(" "),a("li",[t._v("thank-you")]),t._v(" "),a("li",[t._v("?message=success")]),t._v(" "),a("li",[t._v("thank-you?message=success")]),t._v(" "),a("li",[t._v("{siteUrl}")]),t._v(" "),a("li",[t._v("https://website.com/thank-you")])])}],!1,null,null,null);s.default=e.exports}}]);