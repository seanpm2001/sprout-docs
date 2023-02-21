(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{558:function(t,a,e){"use strict";e.r(a);var s=e(34),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("Invisible Field")]),t._v(" "),e("p",[t._v("The Invisible Field allows you to define the value of a field on your form ahead of time without displaying that field to the user. This can be useful to help prepare information that will need to be associated with a form but doesn't necessarily need to be seen or filled out by the user.")]),t._v(" "),e("p",[t._v("The Invisible Field never shows the value of the field to the user on the front-end, not even in the code, so you can safely use this field for analytics, email addresses, or other data that you may not want to expose to the user but that you want associated with their form submission.")]),t._v(" "),e("h2",{attrs:{id:"settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),e("h3",{attrs:{id:"invisible-field-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#invisible-field-value"}},[t._v("#")]),t._v(" Invisible Field Value")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("This setting let's you predefine the value you want to see in your Invisible Field. It can parse Twig and any values provided via the "),e("code",[t._v("addFieldVariables")]),t._v(" template tag. See the Field Variables section below for more info.")])]),e("h3",{attrs:{id:"allow-edits"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allow-edits"}},[t._v("#")]),t._v(" Allow edits")]),t._v(" "),e("p",[t._v("Enable this setting if you wish to allow users in the Control Panel to edit this Invisible Field value. By default, the field will display the value but not allow any edits.")]),t._v(" "),e("h2",{attrs:{id:"field-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field-variables"}},[t._v("#")]),t._v(" Field Variables")]),t._v(" "),e("p",[t._v("When using the default Form Templates, the Invisible Field has access to several common variables that are also available as Craft Global Variables. The default variables include:")]),t._v(" "),e("ul",[e("li",[t._v("craft")]),t._v(" "),e("li",[t._v("currentSite")]),t._v(" "),e("li",[t._v("currentUser")]),t._v(" "),e("li",[t._v("now")]),t._v(" "),e("li",[t._v("siteName")]),t._v(" "),e("li",[t._v("siteUrl")]),t._v(" "),e("li",[t._v("systemName")])]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("These default values can be customized when using "),e("RouterLink",{pre:!0,attrs:{to:"/forms/template-overrides.html"}},[t._v("Template Overrides")]),t._v(" and additional variables can be made available using the "),e("code",[t._v("addFieldVariables")]),t._v(" tag. To add additional variables, pass those variables to the "),e("code",[t._v("addFieldVariables")]),t._v(" tag in your templates before the "),e("code",[t._v("displayForm")]),t._v(" tag.")],1)]),e("div",{staticClass:"language-twig extra-class"},[e("pre",{pre:!0,attrs:{class:"language-twig"}},[e("code",[e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("do")]),t._v(" sprout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addFieldVariables"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" category"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("hiddenEmail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("email@website.com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" sprout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayForm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("application"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n")])])]),e("div",{pre:!0},[e("p",[t._v("The Invisible Field Value setting is processed like a Twig Template and you can target the available variables are all made available to the field using the "),e("code",[t._v("object")]),t._v(" variable. The variables can be accessed using standard Twig syntax or shorthand object syntax:")])]),e("div",{staticClass:"language-twig extra-class"},[e("pre",{pre:!0,attrs:{class:"language-twig"}},[e("code",[e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("craft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getRequest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getAbsoluteUrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customField "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customField"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token twig language-twig"}},[e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hiddenEmail "),e("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n")])])]),e("p",[t._v("And shorthand syntax:")]),t._v(" "),e("div",{staticClass:"language-twig extra-class"},[e("pre",{pre:!0,attrs:{class:"language-twig"}},[e("code",[t._v("{craft.app.getRequest().getAbsoluteUrl()}\n{entry.title}\n{entry.customField}\n{entry.customField.first().id}\n{hiddenEmail}\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);