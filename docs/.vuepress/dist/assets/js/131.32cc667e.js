(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{205:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",[t._v("Custom SQL Queries")]),s("p",[t._v("One reason Craft is powerful is because it allows users to build complex relational content from a very user-friendly UI. While that is nice for users, it can make certain queries very complex when retrieving your data.  Sprout Reports is designed to help make it easy for clients to run queries and get back the data they need. It is not designed to write those queries for you.")]),s("p",[t._v("The examples below are not meant to be comprehensive or accurate for every situation. They are meant to be used as a starting point and the responsibility is on you to update the queries to meet your needs or find someone who can.")]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("If you need help building a specific query, feel free to reach out.  We're happy to consider adding another example for common use cases or help out in a consulting relationship to help you meet your projects reporting needs.")]),s("p",[t._v("Contact us: "),s("a",{attrs:{href:"mailto:sprout@barrelstrengthdesign.com"}},[t._v("sprout@barrelstrengthdesign.com")])])]),s("h2",{attrs:{id:"relations-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relations-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Relations Fields")]),s("p",[t._v("Relation Fields (Entries, Categories, Users, Assets, and Tag fields) store their data via a related ID. This means a basic query will not return any information about the Relations Fields in an Entry.")]),s("div",{pre:!0},[s("p",[t._v("In this example, we create two queries: the first returning the data about our content from a particular section without the relation data and the second returning the data about all of the content related to our section.  We then use a "),s("code",[t._v("UNION")]),t._v(" to combine the results of our two queries.")])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n       content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Related IDs (comma-separated)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Related Titles (comma-separated)"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" craft_content "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" content\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" craft_entries "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" entries\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" entries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementId\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" craft_relations "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" relations\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" entries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" relations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceId\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" entries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sectionId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNION")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" relations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("targetId "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" relatedElementId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t   content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" relatedContentTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t   GROUP_CONCAT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementId separator "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Related IDs (comma-separated)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t   GROUP_CONCAT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title separator "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Related Titles (comma-separated)"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" craft_relations "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" relations\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" craft_entries "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" entries\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" entries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" relations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceId\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" craft_content "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" content\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" relations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("targetId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementId\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" relations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" entries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sectionId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" relations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceId\n")])])])])}],!1,null,null,null);e.default=n.exports}}]);