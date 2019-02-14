(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{228:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",[t._v("Coding Guidelines")]),s("p",[t._v("A central principle of the Sprout Plugin Suite is to create an experience – for both users and developers – that looks and feels like the native experience with Craft CMS. Toward that end, wherever possible, Sprout adopts conventions set forth by Craft CMS. These conventions include")]),s("div",{staticClass:"table"},[s("table",[t._m(0),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://github.com/craftcms/cms",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft CMS codebase"),s("OutboundLink")],1)]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Use the Craft APIs in the same way that Craft uses them")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://docs.craftcms.com/v3/extend/coding-guidelines.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coding Guidelines"),s("OutboundLink")],1)]),s("td",{staticStyle:{"text-align":"left"}})]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://github.com/craftcms/phpstorm-settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft Code Style"),s("OutboundLink")],1)]),s("td",{staticStyle:{"text-align":"left"}},[t._v("PhpStorm Craft Code Style settings")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://github.com/craftcms/phpstorm-settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft Inspections"),s("OutboundLink")],1)]),s("td",{staticStyle:{"text-align":"left"}},[t._v("PhpStorm Craft Code Style settings")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Php Inspections (EA Extended)"),s("OutboundLink")],1)]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Help monitor and adhere to conventions in PhpStorm.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yii Inspections"),s("OutboundLink")],1)]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Adds some Yii 2 and Craft-specific inspections in PhpStorm.")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://github.com/craftcms/sass",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass Mixins for Craft CMS"),s("OutboundLink")],1)]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Extend Control Panel templates with Craft conventions")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"https://www.npmjs.com/package/@pixelandtonic/craftui",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft UI"),s("OutboundLink")],1)]),s("td",{staticStyle:{"text-align":"left"}},[t._v("A collection of Vue.js components and styles for Craft CMS apps.")])])])])]),t._m(1),s("p",[t._v("We also have several conventions that are specific to our Sprout plugins. Where we can, we try to align these with conventions in the Craft community.")]),t._m(2),s("p",[t._v("We largely follow the "),s("a",{attrs:{href:"http://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git branching model"),s("OutboundLink")],1),t._v(" popularized by Vincent Driessen with a few updates to better fit our workflow.")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),s("p",[t._v("Many Sprout plugins share functionality and this code is managed in shared Yii Modules.")]),t._m(19),s("p",[t._v("Link to Sprout Base Documentation. Normalize plugin behavior where we can.")]),t._m(20),t._m(21),s("p",[t._v("Use the default Craft conventions for translations. This allows us to benefit from the Yii Inspections that allow us to bulk add and remove translations.")]),t._m(22),s("p",[t._v("Each plugin or module maintains it's own translation file. As some plugins depend on multiple modules for their functionality, this may mean that someone translating a plugin will also have to translate translation files in other modules. For example, to completely translate Sprout Forms one would need to translate the files in Sprout Forms, Sprout Base Fields, and Sprout Base.")]),t._m(23),t._m(24),t._m(25),s("p",[t._v("Due to our application structure using shared modules, in some cases migrations may need to be run by multiple plugins and it may not be predictable which order they get run in. To address this, we use the following conventions:")]),t._m(26),t._m(27),s("h4",[t._v("Order")]),s("p",[t._v("Migration naming will use the date in the first segment and the second segment will just represent the order that they should be run in for a particular release. The following migrations are all be part of a release on the same day, and are ordered 1, 2, 3 in the order they should run:")]),t._m(28),s("h4",[t._v("Migrations used by multiple plugins")]),s("p",[t._v("Any migration instance that is just running a migration in base module should use the same name as the base migration and append the plugin name that it is being run from.")]),t._m(29),t._m(30),t._m(31),s("p",[t._v("To include Sprout Base, in your plugins init() method:")]),t._m(32),t._m(33),s("p",[t._v("Include Base Sprout Trait to simplify logging Errors, Warnings, and Info. Requires setting the $pluginHandle variable.")]),t._m(34),t._m(35),s("p",[t._v("In many of our plugins, we setup a component named app. We do this in the plugin's primary module class")]),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Convention")]),e("th",{staticStyle:{"text-align":"left"}},[this._v("Notes")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sprout-guidelines"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sprout-guidelines","aria-hidden":"true"}},[this._v("#")]),this._v(" Sprout Guidelines")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-workflow-and-branching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-workflow-and-branching","aria-hidden":"true"}},[this._v("#")]),this._v(" Git Workflow and Branching")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{pre:!0},[s("p",[t._v("As we have to maintain multiple master copies of our plugins, instead of a "),s("code",[t._v("master")]),t._v(" branch, we maintain multiple master version branches. These branches are named using the format "),s("code",[t._v("v[Version Number]")]),t._v(" where "),s("code",[t._v("v2")]),t._v(" would represent all releases for the "),s("code",[t._v("v2.x.x")]),t._v(" branch of the software. These version numbers correlate with the plugin version numbers, not the Craft version number, as we may have multiple major releases of a plugin for a single release of Craft.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("develop")]),e("li",[this._v("feature/feature-name")]),e("li",[this._v("bugfix/bugfix-name")]),e("li",[this._v("v1")]),e("li",[this._v("v2")]),e("li",[this._v("v3")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"naming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming","aria-hidden":"true"}},[this._v("#")]),this._v(" Naming")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table"},[s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Use Case")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Naming Convention")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("GitHub repo")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("craft-sprout-forms")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Composer require")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/craft-sprout-forms")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Plugin folder")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("sprout-forms")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Namespace")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sproutforms")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"folder-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Folder Structure")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"the-top-level"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-top-level","aria-hidden":"true"}},[this._v("#")]),this._v(" The top level")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("plugin-handle/lib - any third-party libraries")]),e("li",[this._v("plugin-handle/src - the plugin application")]),e("li",[this._v("plugin-handle/.gitignore - standard .gitignore")]),e("li",[this._v("plugin-handle/CHANGELOG.md - Follow Craft CHANGELOG docs")]),e("li",[this._v("plugin-handle/README.md - Very basic overview that points to main documentation. See format for both commercial and free plugins.")]),e("li",[this._v("plugin-handle/LICENSE.md - Craft License or MIT License")]),e("li",[this._v("plugin-handle/composer.json - See Craft composer.json docs. We keep this file light. Two things to note. Don't add schemaVersion, hasCpSection, hasCpSettings to this file. They should go in the primary plugin module class. Also, this file should set the 'extra->class' setting to define the Plugin.php as a file with the name of the plugin itself.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"the-src-folder-craft-conventions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-src-folder-craft-conventions","aria-hidden":"true"}},[this._v("#")]),this._v(" The src folder - Craft Conventions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("ul",[e("li",[this._v("plugin-handle/src/Plugin.php - This file will usually be renamed to a class with the same name as the plugin. i.e. SproutForms.php. If necessary, we also set schemaVersion, hasCpSection, hasCpSettings in this file as it's easier to toggle those settings in development as Craft doesn't cache them in Craft's plugins.php file.")]),e("li",[this._v("plugin-handle/src/translations/en - We prepare a single translation file in English that others can use to translate a plugin.")]),e("li",[this._v("plugin-handle/src/templates/_components - Any template partials needed for Craft or the plugin itself.")]),e("li",[this._v("plugin-handle/src/templates/_components/componenttype/ComponentClassName/template.html - All components should follow this general structure if possible. Third-party plugin integrations will use a similar structure in the "),e("code",[this._v("_integrations")]),this._v(" folder.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"the-src-folder-unique-plugin-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-src-folder-unique-plugin-components","aria-hidden":"true"}},[this._v("#")]),this._v(" The src folder - Unique Plugin Components")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("plugin-handle/src/base/ComponentType.php - The base class for new components we add to the ecosystem")]),e("li",[this._v("plugin-handle/src/componenttype - If a plugin adds a custom component we include in a folder at the top level that references the name of the component type.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"front-end-resources-in-the-src-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#front-end-resources-in-the-src-folder","aria-hidden":"true"}},[this._v("#")]),this._v(" Front-end resources in the src folder")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("plugin-handle/src/web - all things relating to Assets or Twig")]),e("li",[this._v("plugin-handle/src/web/assets/assetbundlename/AssetBundleName.php")]),e("li",[this._v("plugin-handle/src/web/twig/ - Twig things Extensions, Nodes, etc.")]),e("li",[this._v("plugin-handle/src/web/variables/VariableName.php - Variable classes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"integrations-with-other-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrations-with-other-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrations with other plugins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("ul",[e("li",[this._v("plugin-handle/src/integrations/pluginname/componenttype/ComponentClassName.php")]),e("li",[this._v("plugin-handle/src/integrations/pluginname/componenttype/componentsubtype/ComponentClassName.php - for some components, we need an additional folder for a subtype")]),e("li",[this._v("plugin-handle/src/templates/_components/pluginname/componenttype/ComponentClassName/template.html - Integrations are structured like components but exist in a subfolder that namespaces them by the plugin they relate to "),e("code",[this._v("_components/pluginname/...")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"common-functionality"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-functionality","aria-hidden":"true"}},[this._v("#")]),this._v(" Common Functionality")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table"},[s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Module")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Common settings and UI components")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-email")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Common email functionality")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-reports")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Common reporting functionality")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-import")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Common import functionality")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-fields")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Common field functionality")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-lists")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Common list functionality")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Macros (manage in Sprout Base)")]),s("li",[t._v("Helpers")]),s("li",[t._v("Use Sprout Core for settings management")]),s("li",[t._v("Use Sprout Core for all plugin icons")]),s("li",[t._v("Fields, and Fields in the UI")]),s("li",[t._v("Email, Import, Reports")]),s("li",[t._v("Add Plugin Name Override setting if CP section exists")]),s("li",[t._v("All custom fields should be managed in Sprout Fields")]),s("li",[t._v("Add CHANGELOG file to all plugins (only update this when preparing release)")]),s("li",[t._v("Event naming conventions should follow Craft conventions\nEVENT_AFTER_ELEMENT_SAVE\nEVENT_BEFORE_CREATE_BACKUP\nEVENT_REGISTER_WIDGET_TYPES\nEVENT_REGISTER_CP_TEMPLATE_ROOTS\nEVENT_REGISTER_IMPORTER\nEVENT_REGISTER_IMPORTER_TYPES\nEVENT_REGISTER_THEME_TYPES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#translations","aria-hidden":"true"}},[this._v("#")]),this._v(" Translations")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"table"}},[s("table",[s("thead",[s("tr",[s("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Context")]),s("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Translation Convention")])])]),s("tbody",[s("tr",[s("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("PHP")]),s("td",{pre:!0,attrs:{style:"text-align:left"}},[s("code",[t._v("Craft::t('sprout-forms', 'Message');")])])]),s("tr",[s("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Twig")]),s("td",{pre:!0,attrs:{style:"text-align:left"}},[s("code",[t._v('{{ "Message"|t(\'sprout-forms) }}')])])]),s("tr",[s("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("CP Javascript")]),s("td",{pre:!0,attrs:{style:"text-align:left"}},[s("code",[t._v("Craft:t('sprout-forms');")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"database-queries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-queries","aria-hidden":"true"}},[this._v("#")]),this._v(" Database Queries")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Make sure columns are wrapped with double brackets: [[columnname]]\nhttps://www.yiiframework.com/doc/guide/2.0/en/db-dao#quoting-table-and-column-names")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"migrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrations","aria-hidden":"true"}},[this._v("#")]),this._v(" Migrations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Make sure every migration can be run twice, without throwing errors if it has already been run once.")]),e("li",[this._v("All migrations that affect a plugin with a shared module should be placed in the base module and instances of those migrations should be created in each respective plugin where they are needed.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"naming-migrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming-migrations","aria-hidden":"true"}},[this._v("#")]),this._v(" Naming migrations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("m190101_000001_migration_description")]),e("li",[this._v("m190101_000002_migration_description")]),e("li",[this._v("m190101_000003_migration_description")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table"},[s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Migration Name")]),s("th",{staticStyle:{"text-align":"left"}},[t._v("Plugin/Module Name")])])]),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("m190101_000001_migration_description")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Sprout Base Email")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("m190101_000001_migration_description_sproutemail")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Sprout Email")])]),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("m190101_000001_migration_description_sproutforms")]),s("td",{staticStyle:{"text-align":"left"}},[t._v("Sprout Forms")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"the-plugin-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-plugin-class","aria-hidden":"true"}},[this._v("#")]),this._v(" The Plugin Class")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"using-sprout-base"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-sprout-base","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Sprout Base")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    SproutBaseHelper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"including-base-sprout-trait"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#including-base-sprout-trait","aria-hidden":"true"}},[this._v("#")]),this._v(" Including Base Sprout Trait")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SproutForms")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Plugin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("BaseSproutTrait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pluginHandle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sprout-forms'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"registering-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registering-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Registering components")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutforms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setComponents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"console-requests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#console-requests","aria-hidden":"true"}},[this._v("#")]),this._v(" Console Requests")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"split"},[s("div",{staticClass:"left"},[s("p",[t._v("Any actions that are run via console, the queue, or might be used in a third-party plugin via a queue are considered console requests and we should support them by avoiding to use any Web-only methods.")]),s("div",{pre:!0},[s("p",[t._v("Web-only Application methods can be seen in "),s("code",[t._v("craftcms/cms/src/config/app.web.php")]),t._v(" and should only be used in Web Controllers. Logic in Models and the Service Layer should depend only on classes that are supported by both Web and Console requests.")])]),s("div",{pre:!0},[s("p",[t._v("Web-only Application classes include classes loaded as components in the "),s("code",[t._v("app.web.php")]),t._v(" file:")])]),s("ul",[s("li",[t._v("craft\\web\\AssetManager")]),s("li",[t._v("craft\\web\\Request")]),s("li",[t._v("craft\\web\\Response")]),s("li",[t._v("craft\\web\\Session")]),s("li",[t._v("craft\\web\\UrlManager")]),s("li",[t._v("craft\\web\\User")]),s("li",[t._v("craft\\web\\ErrorHandler")])]),s("div",{pre:!0},[s("p",[t._v("And any other classes found in the "),s("code",[t._v("craftcms/cms/src/web")]),t._v(" folder:")])]),s("ul",[s("li",[t._v("craft\\web\\AssetBundle")]),s("li",[t._v("craft\\web\\Controller")]),s("li",[t._v("craft\\web\\ServiceUnavailableHttpException")]),s("li",[t._v("craft\\web\\UploadedFile")]),s("li",[t._v("craft\\web\\UrlRule")]),s("li",[t._v("craft\\web\\View")])]),s("p",[t._v("Don't use Web-only methods outside of Web Controllers. Ways to test for this? Search for ann Craft::$app->getRequest methods outside of Web controllers. Run ./craft help and see if you get any errors.")])]),s("div",{staticClass:"right"},[s("p",[t._v("Exclude vendor folder from repos. Add vendor to standard gitignore.")]),s("p",[t._v("Devs should run composer update locally and Craft will install this for us at the application level.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pre-release-checklist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pre-release-checklist","aria-hidden":"true"}},[this._v("#")]),this._v(" Pre-Release Checklist")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v('Run "yarn outdated" to test before releases and on projects to determine what needs updated.')]),s("li",[t._v("Run PHPStorm Inspections (Craft Inspections, general PHP inspections) and make sure there are no errors we need to fix")]),s("li",[t._v("Run PHPStorm Reformat Code (Command+Option L) on all files (PHP, Twig, Javascript, CSS). Ensure all code has proper formatting.")]),s("li",[t._v("Confirm all @todo flags in the codebase are still relevant or removed")]),s("li",[t._v("Confirm all @deprecated flags in the codebase are still relevant or removed")]),s("li",[t._v("Ensure all methods have proper comment blocks")]),s("li",[t._v("Run any tests we can programmatically")]),s("li",[t._v("After database updates, ensure db schema for a fresh install and after an update are the same")]),s("li",[t._v("Make sure all text has translation categories in PHP and Twig and JS: t('sprout-forms-countries')")]),s("li",[t._v("Update any translations in the default en translation file using Craft::t and the PhpStorm inspection. Run various checks to make sure we are passing text through the necessary translate filters for PHP, HTML, and JS.")]),s("li",[t._v("Make sure all database queries are compatible with MySQL and PostgreSQL")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Note: where we can, we want to automate these tasks and incorporate them into our workflow")])])}],!1,null,null,null);e.default=n.exports}}]);