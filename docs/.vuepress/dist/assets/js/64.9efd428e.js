(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{357:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",[t._v("Form Fields")]),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("Form Fields enable you to add new Fields to the Form Builder and manage its field settings and front-end output.")]),t._v(" "),e("p",[t._v("See the following plugins for examples:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-forms-range-slider",target:"_blank",rel:"noopener noreferrer"}},[t._v("Range Slider Field for Sprout Forms"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-forms-us-states",target:"_blank",rel:"noopener noreferrer"}},[t._v("US States Field for Sprout Forms"),e("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Once you have created your Custom Form Field, register your Form Field class with Sprout Forms to display your Form Field in the Form Builder.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("Creating a custom front-end field for Sprout Forms is as easy as creating a custom field type in Craft.")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("While Craft can require users to use certain browsers to get the full benefits of the platform (and ignore browsers like IE8 and IE9), many client-facing websites must address broader compatibility issues to meet their goals.")]),t._v(" "),e("p",[t._v("Due to the variety and complexities of front-end user interface design and cross-browser and cross-device support, Sprout Forms does not support the complete list of native Craft fields itself, but does allow you to add support for these fields in your forms using custom HTML or adding support for additional fields via a plugin.")]),t._v(" "),e("p",[t._v("Sprout Forms provides a comprehensive API to add dynamic front-end field support for additional Craft and third-party field types.")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("To create a field that extends the Sprout Forms Front-end Field API, you'll need to do the following:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("All the default fields that we provide front end rendering for, are using this very API!")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"craft-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#craft-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 3")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"register-event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-event","aria-hidden":"true"}},[this._v("#")]),this._v(" Register Event")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutformsrangeslider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutforms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("services"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fields")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutforms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("events"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RegisterFieldsEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutformsrangeslider"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("integrations"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutforms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RangeSlider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Craft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("craft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("yii"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SproutFormsRangeSlider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Plugin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Fields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EVENT_REGISTER_FIELDS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RegisterFieldsEvent "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("fields")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RangeSlider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"craft-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#craft-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Craft 2")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("Sprout Fields adds several additional Field Types to Sprout Forms in Craft 2. In Craft 3, all Sprout Fields have been included directly in Sprout Forms.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Sprout Forms for Craft 2 supports all fields in Craft but only supports a subset of those fields for dynamic front-end output. Fields with dynamic front-end support are referred to as "),s("em",[this._v("Standard Fields")]),this._v(". Fields that require custom HTML or development are referred to as "),s("em",[this._v("Advanced Fields")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"custom-front-end-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-front-end-fields","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Front-End Fields")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{pre:!0},[e("ol",[e("li",[t._v("Create a "),e("strong",[t._v("field class")]),t._v(" that extends "),e("code",[t._v("SproutFormsBaseField")])]),t._v(" "),e("li",[t._v("Add the "),e("code",[t._v("getInputHtml()")]),t._v(" method to your "),e("strong",[t._v("field class")])]),t._v(" "),e("li",[t._v("Add the "),e("code",[t._v("registerSproutFormsFields()")]),t._v(" in your "),e("strong",[t._v("plugin class")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"field-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field-class","aria-hidden":"true"}},[this._v("#")]),this._v(" Field Class")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"split"},[e("div",{staticClass:"left"},[e("div",{pre:!0},[e("p",[t._v("The "),e("em",[t._v("field")]),t._v(" class naming convention we recommend is: "),e("code",[t._v("{PluginHandle}{FieldType}{Field}")]),t._v(".")])]),t._v(" "),e("h4",[t._v("getInputHtml()")]),t._v(" "),e("p",[t._v("Like a back-end "),e("em",[t._v("field type")]),t._v(", your front end "),e("em",[t._v("field")]),t._v(" gets to decide what "),e("strong",[t._v("html")]),t._v(" to render to capture user input.")]),t._v(" "),e("h4",[t._v("Signature")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputHtml")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$settings")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$renderingOptions")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$field            > The FieldModel we're providing front end rending for\n$value            > The value associated with that field type\n$settings         > The settings associated with that field type\n$renderingOptions > Options available to displayForm(), displayTab(), displayField() tags\n")])])]),e("div",{pre:!0},[e("p",[t._v("In addition to the arguments, you should make sure to return a "),e("code",[t._v("\\Twig_Markup")]),t._v(" object from this method so that your HTML is not escaped.")])]),t._v(" "),e("h4",[t._v("beginRendering()")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("This method should be called just before your render your front end field template inside of "),e("code",[t._v("getInputHtml()")])])]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("This is due to how we're allowing the user to override "),e("code",[t._v("form")]),t._v(", "),e("code",[t._v("tab")]),t._v(", and "),e("code",[t._v("field")]),t._v(" templates for style customization.")])]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("Not calling "),e("code",[t._v("beginRendering()")]),t._v(" could cause your template to not be found.")])]),t._v(" "),e("h4",[t._v("endRendering()")]),t._v(" "),e("p",[t._v("This method should be called just after you finish rendering your front end field template.")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("Not calling "),e("code",[t._v("endRendering()")]),t._v(" could cause your template or Sprout Forms' own templates to not be found.")])]),t._v(" "),e("h4",[t._v("getTemplatesPath()")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("Because Sprout Forms allows the user to customize/override the default templates ("),e("code",[t._v("form.html")]),t._v(", "),e("code",[t._v("tab.html")]),t._v(", "),e("code",[t._v("field.html")]),t._v(", "),e("code",[t._v("errors.html")]),t._v("), we need to switch the template path a few times during rendering of all fields.")])]),t._v(" "),e("p",[t._v("This method is your chance to make sure your templates are found when your field is rendered.")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("From this method, you should return the absolute path to your templates folder so that we can switch to it if you're rendering a template via "),e("code",[t._v("getInputHtml()")])])])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{pre:!0},[e("p",[t._v("If we follow the instructions above, our "),e("code",[t._v("getInputHtml()")]),t._v(" and "),e("code",[t._v("getTemplatesPath()")]),t._v(" might look something like this:")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputHtml")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$settings")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$renderingOptions")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginRendering")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rendered")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("craft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("templates")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'plaintext/input'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("             "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("handle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v("            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'field'")]),t._v("            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'settings'")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$settings")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'renderingOptions'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$renderingOptions")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("endRendering")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" TemplateHelper"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRaw")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rendered")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTemplatesPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/myplugin/templates/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"accessing-variables-in-templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-variables-in-templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing variables in templates")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("If your field to be able to access variables within the template where your field is being rendered, a user can use the "),s("code",[this._v("craft.sproutForms.addFieldVariables()")]),this._v(" method to make those variables available to your field.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("If you'd like to take a peek at how we're using this API, you can look in the "),s("code",[this._v("craft/plugins/sproutforms/integrations")]),this._v(" folder.")])])}],!1,null,null,null);s.default=n.exports}}]);