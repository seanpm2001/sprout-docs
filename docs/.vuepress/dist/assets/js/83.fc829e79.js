(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{427:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("Hidden Field")]),t._v(" "),s("p",[t._v("The Hidden Field allows you to define the value of a field on your form ahead of time without displaying that field to the user. This can be useful to help prepare information that will need to be associated with a form but doesn't necessarily need to be seen or filled out by the user.")]),t._v(" "),s("p",[t._v("The Hidden Field does display the value that you set in the templates so an enterprising user could view the code on your page and see the value you have prepared, and if they truly desire, even modify it directly in the code on the page. If you want to predefine a value that your user will never see and can never modify, see the "),s("router-link",{attrs:{to:"/forms/invisible-field.html"}},[t._v("Invisible Field")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),s("h3",{attrs:{id:"hidden-field-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hidden-field-value"}},[t._v("#")]),t._v(" Hidden Field Value")]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("This setting let's you predefine the value you want to see in your Hidden Field. It can parse Twig and any values provided via the "),s("code",[t._v("addFieldVariables")]),t._v(" template tag. See the Field Variables section below for more info.")])]),s("h3",{attrs:{id:"allow-edits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allow-edits"}},[t._v("#")]),t._v(" Allow edits")]),t._v(" "),s("p",[t._v("Enable this setting if you wish to allow users in the Control Panel to edit this Hidden Field value. By default, the field will display the value but not allow any edits.")]),t._v(" "),s("h2",{attrs:{id:"field-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field-variables"}},[t._v("#")]),t._v(" Field Variables")]),t._v(" "),s("p",[t._v("When using the default Form Templates, the Hidden Field has access to several common variables that are also available as Craft Global Variables. The default variables include:")]),t._v(" "),s("ul",[s("li",[t._v("craft")]),t._v(" "),s("li",[t._v("currentSite")]),t._v(" "),s("li",[t._v("currentUser")]),t._v(" "),s("li",[t._v("now")]),t._v(" "),s("li",[t._v("siteName")]),t._v(" "),s("li",[t._v("siteUrl")]),t._v(" "),s("li",[t._v("systemName")])]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("These default values can be customized when using "),s("router-link",{pre:!0,attrs:{to:"/forms/template-overrides.html"}},[t._v("Template Overrides")]),t._v(" and additional variables can be made available using the "),s("code",[t._v("addFieldVariables")]),t._v(" tag. To add additional variables, pass those variables to the "),s("code",[t._v("addFieldVariables")]),t._v(" tag in your templates before the "),s("code",[t._v("displayForm")]),t._v(" tag.")],1)]),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("addFieldVariables")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("category"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("category")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("hiddenEmail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("email@website.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("sproutForms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),s("div",{pre:!0},[s("p",[t._v("The Hidden Field Value setting is processed like a Twig Template and you can target the available variables are all made available to the field using the "),s("code",[t._v("object")]),t._v(" variable. The variables can be accessed using standard Twig syntax or shorthand object syntax:")])]),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("craft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("getRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("getAbsoluteUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("customField")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("customField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("first")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("hiddenEmail")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),s("p",[t._v("And shorthand syntax:")]),t._v(" "),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token other"}},[t._v("{craft.app.getRequest().getAbsoluteUrl()}\n{entry.title}\n{entry.customField}\n{entry.customField.first().id}\n{hiddenEmail}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);