(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{385:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",[e._v("Console Commands")]),e._v(" "),r("p",[e._v("Import or seed data from the command line with Sprout Import's console commands.")]),e._v(" "),r("div",{pre:!0},[r("p",[e._v("From the root of your Craft project, run the "),r("code",[e._v("./craft")]),e._v(" command to see a list of all available commands. For more details on a specific command, run: "),r("code",[e._v("craft help <command-name>")]),e._v(".")])]),r("div",{pre:!0},[r("p",[e._v("If you do not trigger your queue automatically, be sure to run the "),r("code",[e._v("./craft queue/run")]),e._v(" command after you have added new items to the queue.")])]),r("h2",{attrs:{id:"sprout-import-import-run"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sprout-import-import-run"}},[e._v("#")]),e._v(" sprout-import/import/run")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('./craft sprout-import/import/run --file="@root/import.json" --seed=true\n./craft sprout-import/import/run --file="path/to/import.json path/to/import2.json path/to/import3.json" --seed=true\n')])])]),r("div",{pre:!0},[r("p",[e._v("The "),r("code",[e._v("sprout/import/run")]),e._v(" command allows you to queue one or more file imports.")])]),r("h2",{attrs:{id:"sprout-import-seed-generate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sprout-import-seed-generate"}},[e._v("#")]),e._v(" sprout-import/seed/generate")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('./craft sprout-import/seed/generate --element="craft\\elements\\Entry" --settings="channel=news" --quantity="3"\n./craft sprout-import/seed/generate --element="barrelstrength\\sproutbase\\app\\import\\importers\\elements\\Entry" --settings="channel=news" --quantity="3"\n')])])]),r("div",{pre:!0},[r("p",[e._v("The "),r("code",[e._v("sprout-import/seed/generate")]),e._v(" command allows you to seed data to supported Elements.")])]),r("p",[e._v("Settings may be required to seed an element and can be provided as a string that will get processed into key value pairs. A key and value must be separated by an equals sign:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('--settings="channel=news"\n')])])]),r("p",[e._v("Multiple settings can be separated by a comma:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('--settings="channel=news,entryType=post"\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);