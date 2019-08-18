(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{338:function(t,e,n){"use strict";n.r(e);var s=n(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",[t._v("Coding Guidelines")]),t._v(" "),n("p",[t._v("A central principle of the Sprout Plugin Suite is to create an experience – for both users and developers – that looks and feels like the native experience with Craft CMS. Toward that end, wherever possible, Sprout adopts conventions set forth by Craft CMS. General conventions include:")]),t._v(" "),n("div",{staticClass:"table"},[n("table",[t._m(0),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://github.com/craftcms/cms",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft CMS codebase"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Use Craft's APIs in the same way that Craft uses them")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://docs.craftcms.com/v3/extend/coding-guidelines.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coding Guidelines"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Follow conventions outlined in Craft's Coding Guidelines")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://github.com/craftcms/phpstorm-settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft Code Style"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Craft Code Style settings for PhpStorm")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://github.com/craftcms/phpstorm-settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft Inspections"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Craft Inspections for PhpStorm")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Php Inspections (EA Extended)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("More code conventions for PhpStorm")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yii Inspections"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Yii 2 and Craft-specific inspections in PhpStorm")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://github.com/craftcms/sass",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass Mixins for Craft CMS"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Use Craft's Control Panel style conventions")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://www.npmjs.com/package/@pixelandtonic/craftui",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft UI"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Vue.js components and styles for Craft CMS apps")])])])])]),t._v(" "),n("p",[t._v("Where there are no clear Craft conventions for our codebase or workflows we endeavor to establish our own conventions that align with the Craft User Experience and are consistent with cultural conventions in the Craft community. An incomplete list of these conventions are outlined below.")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("We use a git workflow in the spirit of the "),n("a",{attrs:{href:"http://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git branching model"),n("OutboundLink")],1),t._v(" with a few updates to better fit our workflow.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),n("p",[t._v("The name of a plugin will be used in several different contexts. We use the following conventions:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("When possible, we follow conventions in Craft's folder architecture in our plugins.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),n("p",[t._v("We manage various types of components within our plugins. The structure above illustrates how we organize three classes of components. We use the example of a Custom Field as how we would organize extending Craft component within our plugins.")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),n("p",[t._v("Community templates should link to our pages in our documentation with more comprehensive information wherever possible.")]),t._v(" "),t._m(21),t._v(" "),n("p",[t._v("Many Sprout plugins share functionality and this code is managed in shared Yii Modules.")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),n("p",[t._v("Use the default Craft conventions for translations. This allows us to benefit from the Yii Inspections that allow us to bulk add and remove translations.")]),t._v(" "),t._m(24),t._v(" "),n("p",[t._v("Each plugin or module maintains it's own translation file. As some plugins depend on multiple modules for their functionality, this may mean that someone translating a plugin will also have to translate translation files in other modules. For example, to completely translate Sprout Forms one would need to translate the files in Sprout Forms, Sprout Base Fields, and Sprout Base.")]),t._v(" "),t._m(25),t._v(" "),n("p",[t._v("Exceptions are for developers, not for users. Exception messages should not be translated:")]),t._v(" "),t._m(26),t._m(27),t._v(" "),n("p",[t._v("Due to our application structure using shared modules, in some cases migrations may need to be run by multiple plugins and we cannot know which order they will get run in. To address this, we use the following conventions:")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),n("h4",[t._v("Order")]),t._v(" "),n("p",[t._v("Migration naming will use the date in the first segment and the second segment will just represent the order that they should be run in for a particular release. The following migrations are all be part of a release on the same day, and are ordered 1, 2, 3 in the order they should run:")]),t._v(" "),t._m(30),n("h4",[t._v("Migrations used by multiple plugins")]),t._v(" "),n("p",[t._v("Any migration instance that is just running a migration in base module should use the same name as the base migration and append the plugin name that it is being run from.")]),t._v(" "),t._m(31),t._m(32),t._v(" "),n("p",[t._v("To test one or more plugins and modules under development on real websites before releases, changes can be pushed to a development branch and pulled into any appropriate project for testing.")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),n("p",[t._v("For additional troubleshooting, consider some of the following steps:")]),t._v(" "),t._m(37)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Convention")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Notes")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-workflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-workflow","aria-hidden":"true"}},[this._v("#")]),this._v(" Git Workflow")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{pre:!0},[n("p",[t._v("As we have to maintain multiple master copies of our plugins, instead of a "),n("code",[t._v("master")]),t._v(" branch, we maintain multiple master version branches. These branches are named using the format "),n("code",[t._v("v#")]),t._v(" where "),n("code",[t._v("v2")]),t._v(" would represent all releases for the "),n("code",[t._v("v2.x")]),t._v(" branch of the software. These version numbers correlate with the plugin version numbers, not the Craft version number, as we may have multiple major releases of a plugin for a single release of Craft.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Example plugin branches\n- develop\n- feature/feature-name\n- bugfix/bugfix-name\n- v1\n- v2\n- v3\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"naming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming","aria-hidden":"true"}},[this._v("#")]),this._v(" Naming")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Context")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Naming Convention")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("GitHub repo")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/craft-sprout-forms")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Composer/Packagist")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-forms")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Plugin folder")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-forms")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("Namespace")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sproutforms")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"folder-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Folder Structure")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"root-directory-and-key-src-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#root-directory-and-key-src-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Root directory and key src files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── .github\n├── .gitignore\n├── CHANGELOG.md\n├── composer.json\n├── lib\n├── LICENSE.md\n├── README.md\n└── src\n    ├── Plugin.php\n    └── translations\n        └── en\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("References within "),e("code",[this._v("README.md")]),this._v(" and any other general information files should be kept to a minimum and point users toward our docs, where we maintain more comprehensive documentation. As we maintain several plugins, it gets tedious to update references in numerous general information files and our documentation serves as a centralized place for this type of information about our plugins.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{pre:!0},[n("p",[t._v("Similarly, we aim to keep the "),n("code",[t._v("composer.json")]),t._v(" file as simple as possible. Don't add "),n("code",[t._v("schemaVersion")]),t._v(", "),n("code",[t._v("hasCpSection")]),t._v(", or "),n("code",[t._v("hasCpSettings")]),t._v(" to this file. They should go in the primary plugin module class to more easily toggle the settings without running into issues with cached values in Craft's "),n("code",[t._v("plugins.php")]),t._v(" file.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{pre:!0},[n("p",[t._v("We rename the primary module class "),n("code",[t._v("Plugin.php")]),t._v(" to use the name of the plugin (i.e. "),n("code",[t._v("SproutForms.php")]),t._v("). This update requires that we set the "),n("code",[t._v("composer.json")]),t._v(" "),n("em",[t._v("extra->class")]),t._v(" setting to define the Plugin.php as a file with the name of the plugin itself.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Third-party libraries are added to the "),e("code",[this._v("lib")]),this._v(" folder.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"resources-and-templating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resources-and-templating","aria-hidden":"true"}},[this._v("#")]),this._v(" Resources and templating")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("└── src\n    └── web\n        └── assets\n            └── [assetbundle]\n                ├── dist\n                └── [CustomAssetBundle].php    \n        └── twig\n            └── variables\n                └── [CustomVariable.php]\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("All asset bundles are managed in the "),e("code",[this._v("src/web/assets")]),this._v(" folder and all things Twig (variables, filters, nodes, etc.) are managed in the "),e("code",[this._v("src/web/twig")]),this._v(" folder.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"components-and-integrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#components-and-integrations","aria-hidden":"true"}},[this._v("#")]),this._v(" Components and Integrations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("└── src\n    └── base\n        └── [BaseCustomComponentType].php\n    └── [customcomponenttype]\n        ├── [CustomComponentType1].php\n        └── [CustomComponentType2].php\n    └── fields\n        ├── [CustomField1].php\n        └── [CustomField2].php\n    └── integrations\n        └── [pluginname]\n            └── [integrationcustomcomponenttype]\n                ├── [IntegrationCustomComponentType1].php\n                └── [IntegrationCustomComponentType2].php\n    └── templates \n        └── _components\n            └── [customcomponenttype]\n                ├── [customcomponenttype1]\n                └── [customcomponenttype2]\n            └── fields\n                ├── [customfield1]\n                └── [customfield2]\n        └── _integrations\n            └── [pluginname]\n                └── [integrationcustomcomponenttype]\n                    ├── [integrationcustomcomponenttype1]\n                    └── [integrationcustomcomponenttype2]\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"table"}},[n("table",[n("thead",[n("tr",[n("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Component Type")]),t._v(" "),n("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Name")]),t._v(" "),n("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Notes")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Craft Components")]),t._v(" "),n("td",{pre:!0,attrs:{style:"text-align:left"}},[n("code",[t._v("fields")])]),t._v(" "),n("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Craft component classes get placed in a folder named after the component type in the "),n("code",[t._v("src")]),t._v(" folder")])]),t._v(" "),n("tr",[n("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Custom Components")]),t._v(" "),n("td",{pre:!0,attrs:{style:"text-align:left"}},[n("code",[t._v("[customcomponenttype]")])]),t._v(" "),n("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Custom Component classes get placed in a folder named after the component type in the "),n("code",[t._v("src")]),t._v(" folder")])]),t._v(" "),n("tr",[n("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Integration Components")]),t._v(" "),n("td",{pre:!0,attrs:{style:"text-align:left"}},[n("code",[t._v("[integrationcustomcomponenttype]")])]),t._v(" "),n("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Integration Component classes get placed in a folder named after the component type in the "),n("code",[t._v("integrations/pluginname")]),t._v(" folder")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"github-community-templates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-community-templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Github community templates")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("└── .github\n    ├── CODE_OF_CONDUCT.md\n    ├── CONTRIBUTING.md\n    └── ISSUE_TEMPLATE\n        bug-report.md\n        feature-request.md\n    ├── SECURITY.md\n    └── SUPPORT.md\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"common-modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" Common Modules")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Module")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Common settings and UI components")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-email")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Common email functionality")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-reports")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Common reporting functionality")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-import")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Common import functionality")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-fields")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Common field functionality")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-lists")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Common list functionality")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-redirects")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Common sitemap functionality")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-sitemaps")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Common redirects functionality")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("barrelstrength/sprout-base-uris")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("Common URL-enabled Section functionality")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"translations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#translations","aria-hidden":"true"}},[this._v("#")]),this._v(" Translations")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"table"}},[n("table",[n("thead",[n("tr",[n("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Context")]),t._v(" "),n("th",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Translation Convention")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("PHP")]),t._v(" "),n("td",{pre:!0,attrs:{style:"text-align:left"}},[n("code",[t._v("Craft::t('sprout-forms', 'Message');")])])]),t._v(" "),n("tr",[n("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("Twig")]),t._v(" "),n("td",{pre:!0,attrs:{style:"text-align:left"}},[n("code",[t._v("{{ \"Message\"|t('sprout-forms') }}")])])]),t._v(" "),n("tr",[n("td",{pre:!0,attrs:{style:"text-align:left"}},[t._v("CP Javascript")]),t._v(" "),n("td",{pre:!0,attrs:{style:"text-align:left"}},[n("code",[t._v("Craft:t('sprout-forms');")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"exceptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exceptions","aria-hidden":"true"}},[this._v("#")]),this._v(" Exceptions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("BAD:\nthrow new Exception(Craft::t('sprout-forms, 'Something happened'));\n\nGOOD:\nthrow new Exception('Something happened');\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"migrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrations","aria-hidden":"true"}},[this._v("#")]),this._v(" Migrations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Make sure every migration can be run twice, without throwing errors if it has already been run once.")]),this._v(" "),e("li",[this._v("All migrations that affect a plugin with a shared module should be placed in the base module and instances of those migrations should be created in each respective plugin where they are needed.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"naming-migrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming-migrations","aria-hidden":"true"}},[this._v("#")]),this._v(" Naming migrations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("m190101_000001_migration_description.php\nm190101_000002_migration_description.php\nm190101_000003_migration_description.php\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("m190101_000001_migration_description.php              // Sprout Base Email\nm190101_000001_migration_description_sproutemail.php  // Sprout Email\nm190101_000001_migration_description_sproutforms      // Sprout Forms\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"testing-prior-to-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing-prior-to-release","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing Prior to Release")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("In this example, we grab the latest on the "),e("code",[this._v("develop")]),this._v(" branch for the Sprout SEO plugin and the Sprout Base Redirects module. To ensure composer things it's working with the release numbers we're using in our "),e("code",[this._v("composer.json")]),this._v(" we can tell composer what version number to use for the code we are testing:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('composer require barrelstrength/sprout-seo:"dev-develop as 4.2.0" barrelstrength/sprout-base-redirects:"dev-develop as 1.1.1"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Requiring "),e("code",[this._v("dev-develop")]),this._v(" should pull in the latest commit on the "),e("code",[this._v("develop")]),this._v(" branch. For more specific tests, you can also target a specific commit hash:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('composer require barrelstrength/sprout-seo:"dev-develop as 4.2.0" barrelstrength/sprout-base-redirects:"dev-develop#dfae1a922cdb5dd32fd8a813839fddc26ff412b0 as 1.1.1"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("rm composer.lock      # Remove the composer.lock file\ncomposer clear-cache  # Clear composers cache\ncomposer remove ...   # Try removing the package you are testing before installing it\nrm -r ./vendor        # Remove the entire ./vendor directory and rebuild it with `composer update`\n")])])])}],!1,null,null,null);e.default=r.exports}}]);