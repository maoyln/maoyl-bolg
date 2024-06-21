(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{589:function(s,e,a){"use strict";a.r(e);var n=a(4),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"包罗万键-vspacecode-插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包罗万键-vspacecode-插件"}},[s._v("#")]),s._v(" 包罗万键：VSpaceCode 插件")]),s._v(" "),e("p",[s._v("训练进行到这里，大部分日常的使用场景和功能我们基本都配置了对应的一些快捷键，或者知道如何不通过鼠标去达到目的；而今天我们来了解学习 VSpaceCode 插件，通过它，可以让我们的组合键覆盖得更广阔全面。至于怎么个覆盖，装完插件再慢慢道来。")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("VSpaceCode 与 Whichkey")]),s._v(" "),e("p",[s._v("二者是同一家出品，而且功能上基本一致；VSpaceCode 插件主要面向 Vim 使用者；而 Whichkey 更适用于普通用户;\n而且他们的"),e("a",{attrs:{href:"https://vspacecode.github.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),e("OutboundLink")],1),s._v("也已经合并在一起。")])]),s._v(" "),e("h2",{attrs:{id:"安装及初始配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装及初始配置"}},[s._v("#")]),s._v(" 安装及初始配置")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=VSpaceCode.vspacecode",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击直达下载"),e("OutboundLink")],1),s._v("或在 vscode 的拓展中搜索 "),e("code",[s._v("VSpaceCode")]),s._v(" 安装；")]),s._v(" "),e("p",[s._v("安装完后，查看"),e("a",{attrs:{href:"https://vspacecode.github.io/docs/#manual-configuration-optional",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),e("OutboundLink")],1),s._v("，可以发现文档中提到了两个配置文件 "),e("a",{attrs:{href:"https://github.com/VSpaceCode/VSpaceCode/blob/master/src/configuration/settings.jsonc",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("setting.jsonc")]),e("OutboundLink")],1),s._v(" 与 "),e("a",{attrs:{href:"https://github.com/VSpaceCode/VSpaceCode/blob/master/src/configuration/keybindings.jsonc",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("keybindings.jsonc")]),e("OutboundLink")],1),s._v("；分别对应了 vim 中绑定 VSpaceCode 的激活命令以及在 vscode 中编辑窗之外的其他窗口 VSpaceCode 的激活命令；当然除了激活命令之外，我们还可以看到文档的这两个文件里面都配置了很多命令，其实都是一些扩展了其他功能的命令，我们暂时不需要，所以可以先不配置；而可以看到，两个文件中默认的激活命令是：")]),s._v(" "),e("div",{staticClass:"language-jsonc line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// keybinds.jsonc\n{\n  "key": "space",\n  "command": "vspacecode.space",\n  "when": "activeEditorGroupEmpty && focusedView == \'\' && !whichkeyActive && !inputFocus"\n},\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"language-jsonc line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// setting.jsonc\n"vim.normalModeKeyBindingsNonRecursive": [\n  {\n    "before": ["<space>"],\n    "commands": ["vspacecode.space"]\n  },\n],\n"vim.visualModeKeyBindingsNonRecursive": [\n  {\n    "before": ["<space>"],\n    "commands": ["vspacecode.space"]\n  },\n]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("可以看到，默认的配置是使用空格激活；但是我们配置的 vim 的 "),e("code",[s._v("<Leader>")]),s._v(" 也是 "),e("code",[s._v("space")]),s._v(" 键（如果你和我一样的配置，如果不是则无需接下来的改键），这时候我们就要重新配置激活按键，而我改成了 "),e("code",[s._v("space")]),s._v(" + "),e("code",[s._v(";")]),s._v("，这样的按起来也比较顺手。如下：")]),s._v(" "),e("div",{staticClass:"language-jsonc line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// keybinds.jsonc\n{\n  "key": "space+;",\n  "command": "vspacecode.space",\n  "when": "activeEditorGroupEmpty && focusedView == \'\' && !whichkeyActive && !inputFocus"\n},\n// Trigger vspacecode when sidebar is in focus\n{\n  "key": "space+;",\n  "command": "vspacecode.space",\n  "when": "sideBarFocus && !inputFocus && !whichkeyActive"\n},\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("div",{staticClass:"language-jsonc line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// setting.jsonc\n"vim.normalModeKeyBindingsNonRecursive": [\n  {\n    "before": ["<space>", ";"],\n    "commands": ["vspacecode.space"]\n  },\n],\n"vim.visualModeKeyBindingsNonRecursive": [\n  {\n    "before": ["<space>", ";"],\n    "commands": ["vspacecode.space"]\n  },\n]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("这样我们就可以愉快地使用 VSpaceCode 了。")]),s._v(" "),e("p",[s._v("现在我们激活它，会在 vscode 上面弹出输入框，并且在待选列表中有很多功能，每条记录都有一个符号前缀，在键盘上输入该前缀，就可进入该功能；比如激活插件后我们输入 "),e("code",[s._v("g")]),s._v("，则进入了 "),e("code",[s._v("git")]),s._v(" 的功能模块中，则会列出可执行的操作，继续点击对应操作的前缀，则可以执行该操作；这就是 VSpaceCode 的使用逻辑。简单来说就是我们可以通过所见即所点的模式进行纯键盘的操作（和 chrome 的 vim 插件 vimium-c 一样的思想）。")]),s._v(" "),e("h2",{attrs:{id:"修改原有配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改原有配置"}},[s._v("#")]),s._v(" 修改原有配置")]),s._v(" "),e("h2",{attrs:{id:"自定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义"}},[s._v("#")]),s._v(" 自定义")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("拓展")])])])}),[],!1,null,null,null);e.default=t.exports}}]);