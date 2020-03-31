(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{297:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("Form Fields")]),t._v(" "),a("p",[t._v("Form Fields enable you to add new Fields to the Form Builder and manage its field settings and front-end output.")]),t._v(" "),a("p",[t._v("See the following plugins for examples:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-forms-range-slider",target:"_blank",rel:"noopener noreferrer"}},[t._v("Range Slider Field for Sprout Forms"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/barrelstrength/craft-sprout-forms-us-states",target:"_blank",rel:"noopener noreferrer"}},[t._v("US States Field for Sprout Forms"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"register-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-event"}},[t._v("#")]),t._v(" Register Event")]),t._v(" "),a("p",[t._v("Once you have created your Custom Form Field, register your Form Field class with Sprout Forms to display your Form Field in the Form Builder.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutformsrangeslider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutforms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutforms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RegisterFieldsEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutformsrangeslider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("integrations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutforms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RangeSlider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("craft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("yii"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SproutFormsRangeSlider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Plugin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EVENT_REGISTER_FIELDS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RegisterFieldsEvent "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RangeSlider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"custom-front-end-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-front-end-fields"}},[t._v("#")]),t._v(" Custom Front-End Fields")]),t._v(" "),a("p",[t._v("To create a field that extends the Sprout Forms Front-end Field API, you'll need to do the following:")]),t._v(" "),a("div",{pre:!0},[a("ol",[a("li",[t._v("Create a "),a("strong",[t._v("field class")]),t._v(" that extends "),a("code",[t._v("SproutFormsBaseField")])]),t._v(" "),a("li",[t._v("Add the "),a("code",[t._v("getInputHtml()")]),t._v(" method to your "),a("strong",[t._v("field class")])]),t._v(" "),a("li",[t._v("Add the "),a("code",[t._v("registerSproutFormsFields()")]),t._v(" in your "),a("strong",[t._v("plugin class")])])])]),a("h3",{attrs:{id:"field-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#field-class"}},[t._v("#")]),t._v(" Field Class")]),t._v(" "),a("div",{staticClass:"split"},[a("div",{staticClass:"left"},[a("div",{pre:!0},[a("p",[t._v("The "),a("em",[t._v("field")]),t._v(" class naming convention we recommend is: "),a("code",[t._v("{PluginHandle}{FieldType}{Field}")]),t._v(".")])]),a("h4",[t._v("getInputHtml()")]),t._v(" "),a("p",[t._v("Like a back-end "),a("em",[t._v("field type")]),t._v(", your front end "),a("em",[t._v("field")]),t._v(" gets to decide what "),a("strong",[t._v("html")]),t._v(" to render to capture user input.")]),t._v(" "),a("h4",[t._v("Signature")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputHtml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$settings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$renderingOptions")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$field            > The FieldModel we're providing front end rending for\n$value            > The value associated with that field type\n$settings         > The settings associated with that field type\n$renderingOptions > Options available to displayForm(), displayTab(), displayField() tags\n")])])]),a("div",{pre:!0},[a("p",[t._v("In addition to the arguments, you should make sure to return a "),a("code",[t._v("\\Twig_Markup")]),t._v(" object from this method so that your HTML is not escaped.")])]),a("h4",[t._v("beginRendering()")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("This method should be called just before your render your front end field template inside of "),a("code",[t._v("getInputHtml()")])])]),a("div",{pre:!0},[a("p",[t._v("This is due to how we're allowing the user to override "),a("code",[t._v("form")]),t._v(", "),a("code",[t._v("tab")]),t._v(", and "),a("code",[t._v("field")]),t._v(" templates for style customization.")])]),a("div",{pre:!0},[a("p",[t._v("Not calling "),a("code",[t._v("beginRendering()")]),t._v(" could cause your template to not be found.")])]),a("h4",[t._v("endRendering()")]),t._v(" "),a("p",[t._v("This method should be called just after you finish rendering your front end field template.")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("Not calling "),a("code",[t._v("endRendering()")]),t._v(" could cause your template or Sprout Forms' own templates to not be found.")])]),a("h4",[t._v("getTemplatesPath()")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("Because Sprout Forms allows the user to customize/override the default templates ("),a("code",[t._v("form.html")]),t._v(", "),a("code",[t._v("tab.html")]),t._v(", "),a("code",[t._v("field.html")]),t._v(", "),a("code",[t._v("errors.html")]),t._v("), we need to switch the template path a few times during rendering of all fields.")])]),a("p",[t._v("This method is your chance to make sure your templates are found when your field is rendered.")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("From this method, you should return the absolute path to your templates folder so that we can switch to it if you're rendering a template via "),a("code",[t._v("getInputHtml()")])])])]),t._v(" "),a("div",{staticClass:"right"},[a("div",{pre:!0},[a("p",[t._v("If we follow the instructions above, our "),a("code",[t._v("getInputHtml()")]),t._v(" and "),a("code",[t._v("getTemplatesPath()")]),t._v(" might look something like this:")])]),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputHtml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$settings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$renderingOptions")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginRendering")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rendered")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("craft")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("templates")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'plaintext/input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'field'")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'settings'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$settings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'renderingOptions'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$renderingOptions")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("endRendering")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" TemplateHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRaw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rendered")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTemplatesPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/myplugin/templates/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"accessing-variables-in-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-variables-in-templates"}},[t._v("#")]),t._v(" Accessing variables in templates")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("If your field to be able to access variables within the template where your field is being rendered, a user can use the "),a("code",[t._v("craft.sproutForms.addFieldVariables()")]),t._v(" method to make those variables available to your field.")])]),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{pre:!0},[a("p",[t._v("If you'd like to take a peek at how we're using this API, you can look in the "),a("code",[t._v("craft/plugins/sproutforms/integrations")]),t._v(" folder.")])]),a("p",[t._v("All the default fields that we provide front end rendering for, are using this very API!")])])}),[],!1,null,null,null);s.default=n.exports}}]);