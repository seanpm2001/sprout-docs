(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{270:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("Personalization")]),t._v(" "),a("p",[t._v("In many cases, when you trigger an event there may be some custom data you want to use in your notification.  For example, when an Entry is saved you might want to know who the author was and where you can view the entry, when a form is submitted you may want to include the data from the Form submission in your notification, and when a product is purchased you might want to know which product and by whom.")]),t._v(" "),a("p",[t._v("Sprout Email allows you to personalize your email in several places including:")]),t._v(" "),a("ul",[a("li",[t._v("Subject line")]),t._v(" "),a("li",[t._v("From Name")]),t._v(" "),a("li",[t._v("From Email (you probably don't want to use this)")]),t._v(" "),a("li",[t._v("Reply To Email")]),t._v(" "),a("li",[t._v("Recipients")]),t._v(" "),a("li",[t._v("Custom Fields")]),t._v(" "),a("li",[t._v("Templates (HTML and Text)")])]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("You can personalize your Notification Email with data from an event's "),a("code",[t._v("object")]),t._v(" variable which is uniquely defined by each Notification Event.")])]),a("h2",{attrs:{id:"the-object-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-object-variable"}},[t._v("#")]),t._v(" The Object Variable")]),t._v(" "),a("p",[t._v("To understand what values are available to use for personalization you will need to understand which Object variable is available when a Notification Email is triggered. The available Object variable will depend on the Notification Event, however, it will always be accessed in a similar way.")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("We use the variable name "),a("code",[t._v("object")]),t._v(" because we want a single variable name for all Notification Events, even though it may refer to many different types of data. When an Entry Notification Event is triggered, the "),a("code",[t._v("object")]),t._v(" variable may refer to the Entry Element. When a Commerce Product Notification Event is triggered, the "),a("code",[t._v("object")]),t._v(" variable may refer to the Product Element.")])]),a("div",{pre:!0},[a("p",[t._v("As we use the "),a("code",[t._v("object")]),t._v(" variable in our settings, we can think of each of our settings like a mini Twig template that only has our "),a("code",[t._v("object")]),t._v(" variable available to it.")])]),a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Template")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Variables")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Output")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Subject Line (Notification Email)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Subject Line (Message)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("From Name (Notification Email)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("From Name (Message)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("From Email (Notification Email)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("From Email (Message)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Reply To (Notification Email)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Reply To Email (Message)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Recipients (Notification Email)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Recipients (Message)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Custom Fields (Notification Email)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Custom Fields (Message Body)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Email Templates (Email Templates)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("email, object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Email HTML & Text (Message Body)")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If the idea of an "),a("code",[t._v("object")]),t._v(" variable doesn't make sense yet, read more about "),a("RouterLink",{attrs:{to:"/email/object-syntax.html"}},[t._v("Object Syntax")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"object-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-variables"}},[t._v("#")]),t._v(" Object Variables")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("The table below outlines the default Notification Events and the value you can expect when interacting with the Notification Event's "),a("code",[t._v("object")]),t._v(" variable.")])]),a("div",{staticClass:"table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Event")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Model")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a new entry is created")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Entry")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When an existing entry is updated")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Entry")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a new user is created")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a existing user is updated")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a user is activated")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a user is deleted")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a user logs in")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a Craft Commerce order is completed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("–")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a Craft Commerce transaction is saved")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("–")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a Craft Commerce order status is changed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("–")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("When a Sprout Form Entry is submitted")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Form")])])])])]),t._v(" "),a("h3",{attrs:{id:"craft-commerce-order-status-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#craft-commerce-order-status-event"}},[t._v("#")]),t._v(" Craft Commerce Order Status Event")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("When a Craft Commerce order status is changed")]),t._v(" event provides two objects, so the syntax is slightly different.")]),t._v(" "),a("h4",[t._v("Example variable syntax for the Commerce_OrderModel")]),t._v(" "),a("div",{pre:!0},[a("ul",[a("li",[a("code",[t._v("{order.number}")])]),t._v(" "),a("li",[a("code",[t._v("{{ object.order.number }}")])])])]),a("h4",[t._v("Example variable syntax for the Commerce_OrderHistoryModel")]),t._v(" "),a("div",{pre:!0},[a("ul",[a("li",[a("code",[t._v("{orderHistory.newStatus.name}")])]),t._v(" "),a("li",[a("code",[t._v("{orderHistory.prevStatus.name}")])]),t._v(" "),a("li",[a("code",[t._v("{{ object.orderHistory.newStatus.name }}")])]),t._v(" "),a("li",[a("code",[t._v("{{ object.orderHistory.prevStatus.name }}")])])])]),a("h2",{attrs:{id:"templating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templating"}},[t._v("#")]),t._v(" Templating")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("In your notification templates you can use any Twig code that you would use elsewhere in your templates. Additionally, Sprout Email Notifications give you access to the Notification Email Element ("),a("code",[t._v("email")]),t._v(") and any Notification Event Object variable ("),a("code",[t._v("object")]),t._v("):")])]),a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# Notification Default Fields #}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("subjectLine")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("slug")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fromName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fromEmail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("replyTo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# Notification Custom Fields \n   These examples may not work in your project. You will need to\n   update these examples to reference custom fields you are using.\n------------------------------------------------------------ #}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("emailBody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("emailBanner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("first")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("getUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("emailFooter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# Dynamic Data\n   These examples may not work in your project. The available dynamic\n   values depend on the event you have triggered.\n------------------------------------------------------------ #}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("applicantEmail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),a("h2",{attrs:{id:"processing-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#processing-order"}},[t._v("#")]),t._v(" Processing Order")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("Using shorthand syntax in your Custom Fields and the Control Panel reduces the chance for errors. Some fields, such as the Rich Text field may add spaces between your tags using object syntax (i.e. "),a("code",[t._v("{{ object.email }}")]),t._v(") and cause errors during processing. Also, adding more complex Object Syntax in Twig code can create trickier situations to debug when sending email.")])]),a("p",[t._v("The order that your fields are processed is as follows:")]),t._v(" "),a("ol",[a("li",[t._v("Subject, From Name, From Email, and Reply To fields are processed for Object variables.")]),t._v(" "),a("li",[t._v("Templates are rendered. All Twig markup and Object variables in your templates are processed. Any Object variables in custom fields get treated as placeholders.")]),t._v(" "),a("li",[t._v("Templates are processed once more to render Object variables within custom fields.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("While most of the time the order will not matter, if you need to use Twig syntax anywhere in your custom fields you can run into situations where it causes conflicts as you output it to the templates. For example, if you have a custom field with Twig code and output that field using a Twig filter in your templates, you will trigger an error. Keep it simple. Stick to the rules of thumb above. Test your emails. And check your logs for more details if you run into any issues.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);