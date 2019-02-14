(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{300:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",[t._v("FAQ")]),r("p",[t._v("Frequently asked questions about Sprout Forms.")]),t._m(0),t._m(1),r("p",[t._v("Sprout Forms for Craft 3 comes with Email, Phone, and URL fields.")]),t._m(2),r("p",[t._v("Install "),r("router-link",{attrs:{to:"./../fields/"}},[t._v("Sprout Fields")]),t._v("!  Sprout Fields provides you several additional field types to help ensure you're collecting clean and accurate data.")],1),t._m(3),t._m(4),r("p",[t._v("Sprout Forms for Craft 3 includes a native Sprout Reports integration to create and export reports for Sprout Forms Data Sources without ever needing to install Sprout Reports. Visit the Sprout Forms -> Reports tab in Sprout Forms to create reports and export CSVs.")]),t._m(5),r("p",[t._v("You can use "),r("router-link",{attrs:{to:"./../reports/"}},[t._v("Sprout Reports")]),t._v(" to export your Form Entries to CSV.")],1),r("p",[t._v("To export all entries from a particular form, you can create a custom SQL query to target that form. Each form uses a different table in the database.")]),t._m(6),t._m(7),r("p",[t._v("You will need to update your query to match your Craft database prefix and your form handle. Here is a generic example template of what this query should be using variables that you will need to update for your use case:")]),t._m(8),t._m(9),r("p",[t._v("When form submissions never make it to the database, usually something else is blocking them.")]),r("p",[t._v("Do you have any spam plugins installed? Try disabling them or making their settings less strict.")]),r("p",[t._v("Are your forms triggering any other events that may be causing errors? Spam filters or email notifications that are failing could affect your form entries from reaching the database.")]),r("p",[t._v("Check your logs and see if there are any errors:")]),r("p",[t._v("In your files (Craft 3):")]),t._m(10),r("p",[t._v("In your files (Craft 2):")]),t._m(11),r("p",[t._v("Or in your Control Panel:")]),t._m(12),t._m(13),r("p",[t._v("The most frequent issue that causes notification emails to not be sent or behave erratically is the selected Email Protocol.  By default, this is usually set to PHP Mail.  PHP Mail and Sendmail are often misconfigured on local computers and may be configured in a variety of different ways by hosting providers.  They also do not provide much information to help troubleshoot what might be going wrong.")]),r("p",[t._v("The first step necessary to better troubleshoot why notifications are not behaving as expected is to update your settings to a proper SMTP Protocol. "),r("a",{attrs:{href:"https://mandrill.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mandrill"),r("OutboundLink")],1),t._v(" or "),r("a",{attrs:{href:"https://www.mailgun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MailGun"),r("OutboundLink")],1),t._v(" are good options and MailGun has a free plan which allows you to send up to 10,000 emails a month, if cost is a concern.  Once you are sending email via Mandrill and MailGun, they also can provide more information on what is happening to your email after it is being sent.")]),r("p",[t._v("Another decent option to troubleshoot with is Gmail. While Gmail doesn't provide as much information on how emails are behaving after they are sent, and can sometimes behave in unintuitive ways if you are sending and receiving from the same Gmail address, it is more reliable than PHP Mail and Sendmail and most people have a Gmail account.")]),t._m(14),t._m(15),t._m(16)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-do-i-validate-an-email-address-phone-number-or-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-validate-an-email-address-phone-number-or-url","aria-hidden":"true"}},[this._v("#")]),this._v(" How do I validate an Email Address, Phone Number, or URL?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 3")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-do-i-export-my-form-entries-to-csv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-export-my-form-entries-to-csv","aria-hidden":"true"}},[this._v("#")]),this._v(" How do I export my form Entries to CSV?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-3-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-3-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 3")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-2-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-2-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("For example, to export all data for a form with the handle "),e("code",[this._v("contact")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("SELECT")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("FROM")]),this._v(" craft_sproutformscontent_contact\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("SELECT")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("FROM")]),this._v(" {databasePrefix}_sproutformscontent_{formHandle}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"my-form-submissions-are-not-working-my-submitted-form-entries-never-appear-in-my-database-what-is-broken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#my-form-submissions-are-not-working-my-submitted-form-entries-never-appear-in-my-database-what-is-broken","aria-hidden":"true"}},[this._v("#")]),this._v(" My form submissions are not working. My submitted form entries never appear in my database. What is broken?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("storage/runtime/logs/web.log")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("craft/storage/runtime/logs/sproutforms.log")]),e("li",[this._v("craft/storage/runtime/logs/craft.log")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("/admin/utils/logs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"my-form-notification-emails-are-not-being-sent-or-my-form-notification-emails-are-sometimes-being-sent-but-behaving-erratically"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#my-form-notification-emails-are-not-being-sent-or-my-form-notification-emails-are-sometimes-being-sent-but-behaving-erratically","aria-hidden":"true"}},[this._v("#")]),this._v(" My form notification emails are not being sent. Or, my form notification emails are sometimes being sent but behaving erratically.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"where-can-i-install-example-forms-after-sprout-forms-is-installed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-install-example-forms-after-sprout-forms-is-installed","aria-hidden":"true"}},[this._v("#")]),this._v(" Where can I install example forms after Sprout Forms is installed?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"craft-2-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#craft-2-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 2")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("You can install the default example forms in the Control Panel at "),e("code",[this._v("admin/sproutforms/examples")]),this._v(" or find a link to install the Example Forms in the Sprout Forms Settings area.")])])}],!1,null,null,null);e.default=s.exports}}]);