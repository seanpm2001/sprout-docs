(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{583:function(t,s,a){"use strict";a.r(s);var e=a(34),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("Subscribers")]),t._v(" "),a("p",[t._v("A Subscriber is the person that subscribes to a list. A subscriber can be an existing User in Craft or an anonymous user. In either case, the Subscriber is identified by their email address.")]),t._v(" "),a("p",[t._v("A Subscriber can be added to multiple Lists but a Subscriber can only be added to a specific list once. A Subscriber can subscribe to any Element in Craft – Entries, Categories, Products, Users, Lists, etc.")]),t._v(" "),a("p",[t._v("When an "),a("em",[t._v("email address")]),t._v(" is added to a Subscriber List, if the "),a("em",[t._v("email address")]),t._v(" matches the address of a known User in Craft, a link can be created between the two.")]),t._v(" "),a("p",[t._v("See the "),a("RouterLink",{attrs:{to:"/lists/settings.html"}},[t._v("Enable User Sync")]),t._v(" setting for more info.")],1),t._v(" "),a("h2",{attrs:{id:"templating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templating"}},[t._v("#")]),t._v(" Templating")]),t._v(" "),a("h3",{attrs:{id:"get-all-lists-belonging-to-a-specific-subscriber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-all-lists-belonging-to-a-specific-subscriber"}},[t._v("#")]),t._v(" Get all Lists belonging to a specific Subscriber")]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("set")]),t._v(" subscriber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sprout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subscribers\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("ben@barrelstrengthdesign.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("for")]),t._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" subscriber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getLists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("endfor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n")])])]),a("h3",{attrs:{id:"get-all-subscribers-on-a-given-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-all-subscribers-on-a-given-list"}},[t._v("#")]),t._v(" Get all Subscribers on a given List")]),t._v(" "),a("p",[t._v("The List ID can be found in the sidebar of the List edit page in the control panel.")]),t._v(" "),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("set")]),t._v(" subscribers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sprout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subscribers\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("for")]),t._v(" subscriber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" subscribers "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" subscriber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token twig language-twig"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag-name keyword"}},[t._v("endfor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("%}")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);