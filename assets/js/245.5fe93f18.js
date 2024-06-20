(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{569:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"快如闪电-快速移动s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快如闪电-快速移动s"}},[s._v("#")]),s._v(" 快如闪电：快速移动s")]),s._v(" "),t("p",[s._v("前面几天学到了光标一些的“快捷”移动方式，如 "),t("code",[s._v("hjkl")]),s._v(" "),t("code",[s._v("b")]),s._v(" "),t("code",[s._v("w")]),s._v(" "),t("code",[s._v("e")]),s._v(" 等等，但是在真实的使用中，他们的快捷确实是需要打上双引号，因为等我们打开动则上千行的 "),t("s",[s._v("屎山")]),s._v(" 代码时，这些移动光标的方法就捉襟见肘了；这一节，我们就要祭出 vim 的一个大杀器，让我们的光标移动飞速起来！")]),s._v(" "),t("h2",{attrs:{id:"给我滚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给我滚"}},[s._v("#")]),s._v(" 给我滚！")]),s._v(" "),t("p",[s._v("先来看看让页面滚动起来的指令：")]),s._v(" "),t("ul",[t("li",[s._v("向下滚动一屏："),t("code",[s._v("ctrl + b")])]),s._v(" "),t("li",[s._v("向上滚动一屏："),t("code",[s._v("ctrl + f")])]),s._v(" "),t("li",[s._v("向下滚动半屏："),t("code",[s._v("ctrl + d")])]),s._v(" "),t("li",[s._v("向上滚动半屏："),t("code",[s._v("ctrl + u")])]),s._v(" "),t("li",[s._v("向下滚动一行："),t("code",[s._v("ctrl + e")]),s._v(" , 光标不会移动，只是屏幕滚动")]),s._v(" "),t("li",[s._v("向上滚动一行："),t("code",[s._v("ctrl + y")]),s._v(" , 光标不会移动，只是屏幕滚动")])]),s._v(" "),t("p",[s._v("这时候，我们就可以愉快地在 "),t("s",[s._v("屎山")]),s._v(" 代码中快速移动了。可是问题又来了，这几个指令动则半个屏幕移动，要不就一行行移，有没有在这些范围内的更适合平时使用的呢？")]),s._v(" "),t("p",[s._v("答案是：没有。")]),s._v(" "),t("p",[s._v("但不代表不可以，这时我们就要用老办法 -- 修改配置来达成需求了。")]),s._v(" "),t("p",[s._v("打开 vscode "),t("code",[s._v("setting.json")]),s._v("，在 "),t("code",[s._v("vim.visualModeKeyBindings")]),s._v(" 和 "),t("code",[s._v("vim.normalModeKeyBindings")]),s._v(" 中添加如下设置：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vim.normalModeKeyBindings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      ...\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"before"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"J"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"after"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"j"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"before"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"K"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"after"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"k"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      ...\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vim.visualModeKeyBindings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      ...\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"before"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"J"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"after"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"j"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"before"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"K"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"after"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"k"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      ...\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("这里的配置是把 "),t("code",[s._v("J")]),s._v(" "),t("code",[s._v("K")]),s._v(" 映射成每次跳五行的效果，当然，如果你觉得不合适也可以根据自己的需求更改。配置完后，就可以在方便地跳转了。")]),s._v(" "),t("h2",{attrs:{id:"光标位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#光标位置"}},[s._v("#")]),s._v(" 光标位置")]),s._v(" "),t("p",[s._v("有时候在我们的光标移动到要编辑的行时，可能刚好这一行在屏幕的顶部或底部，或者需要跳转到文件的头或尾，这里有更快捷的指令：")]),s._v(" "),t("ul",[t("li",[s._v("将当前行置于屏幕中央："),t("code",[s._v("zz")])]),s._v(" "),t("li",[s._v("将当前行置于屏幕顶部："),t("code",[s._v("zt")]),s._v("，t 即 top")]),s._v(" "),t("li",[s._v("将当前行置于屏幕底部："),t("code",[s._v("zb")]),s._v("，b 即 bottom")]),s._v(" "),t("li",[s._v("跳到文件首："),t("code",[s._v("gg")])]),s._v(" "),t("li",[s._v("跳到文件尾："),t("code",[s._v("G")])])]),s._v(" "),t("p",[s._v("如果是以上所有的命令都无法让你快速跳到要去的行，这时候就有一个终极方法：")]),s._v(" "),t("ul",[t("li",[s._v("行数 + "),t("code",[s._v("gg")]),s._v(" / "),t("code",[s._v("G")]),s._v("：跳到指定行；只要你知道行数，就可以准确无误地跳到那一行，在调试或查看报错位置时特别有用。比如跳到 1024 行，输入 "),t("code",[s._v("1024 gg")]),s._v("，这时候再搭配 "),t("code",[s._v("zz")]),s._v("，让当前行置于屏幕中间，然后就可以愉快 coding 了~")])]),s._v(" "),t("h2",{attrs:{id:"小练习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小练习"}},[s._v("#")]),s._v(" 小练习")]),s._v(" "),t("p",[s._v("这一天没有练习，去屎山里跳动吧！go and get it！")])])}),[],!1,null,null,null);t.default=r.exports}}]);