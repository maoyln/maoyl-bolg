(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{568:function(t,s,a){"use strict";a.r(s);var v=a(4),e=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"小试牛刀-行相关命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小试牛刀-行相关命令"}},[t._v("#")]),t._v(" 小试牛刀：行相关命令")]),t._v(" "),s("p",[t._v("经过第一天的小试牛刀，这时候的你估计已经可以大概地操控光标了（可能还是不太习惯上下左右），但是不用担心，在接下来的每一天的训练里，你都会不断地重复巩固他们，直到它们变成你不假思索的动作。")]),t._v(" "),s("p",[t._v("今天，我们将更进一步，去学习更多更有用的操作；但在这之前，我想问你一个问题：")]),t._v(" "),s("ul",[s("li",[t._v("昨天的训练中，你是否发现，"),s("code",[t._v("h")]),t._v(" "),s("code",[t._v("j")]),t._v(" "),s("code",[t._v("k")]),t._v(" "),s("code",[t._v("l")]),t._v(" 固然可以移动光标，但是在很多时候，他们移动的效率实在是太慢了...；想想，当光标实在一行中的末尾，你却要修改行首的字符时，这就要一顿好按才行。而今天，我们就来尝试解决这个问题")])]),t._v(" "),s("h2",{attrs:{id:"移动光标到行首"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动光标到行首"}},[t._v("#")]),t._v(" 移动光标到行首")]),t._v(" "),s("ol",[s("li",[t._v("移动到光标所在行的第一个字符："),s("code",[t._v("0")])]),t._v(" "),s("li",[t._v("移动到光标所在行的除 "),s("code",[t._v("blank")]),t._v(" 字符外的第一个字符："),s("code",[t._v("^")])])]),t._v(" "),s("h2",{attrs:{id:"移动光标到行尾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动光标到行尾"}},[t._v("#")]),t._v(" 移动光标到行尾")]),t._v(" "),s("ol",[s("li",[t._v("移动到光标所在行的最后一个字符："),s("code",[t._v("$")])]),t._v(" "),s("li",[t._v("移动到光标所在行的除 "),s("code",[t._v("blank")]),t._v(" 字符外的最后一个字符："),s("code",[t._v("g _")])])]),t._v(" "),s("h2",{attrs:{id:"化繁为简"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#化繁为简"}},[t._v("#")]),t._v(" 化繁为简")]),t._v(" "),s("p",[t._v("通过上面的四个操作，你就可以让你的光标快速去到行首行尾了；但是这时新的问题也随之而来，这四个操作，三个是需要击键两次，一个是需要那笨拙的右小拇指费劲按的键，光标的移动速度也一样是慢。这时我们就可以在 vscode 中对 vim 插件进行新键位映射，以简单化我们的使用；其中，"),s("code",[t._v("^")]),t._v(" 和 "),s("code",[t._v("g _")]),t._v(" 在开发中是很常用的，我们就对这两个操作进行重新映射。")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("setting.json")]),t._v(" 中添加设置：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vim.normalModeKeyBindings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"before"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"H"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"after"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"before"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"after"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("通过这样设置，我们就可以使用 "),s("code",[t._v("H")]),t._v(" "),s("code",[t._v("L")]),t._v(" 来达到和 "),s("code",[t._v("^")]),t._v(" "),s("code",[t._v("g _")]),t._v(" 一样的效果了；其中，这里的 "),s("code",[t._v("vim.normalModeKeyBindings")]),t._v(" 是指在 vim Normal 模式即命令模式下的键映射，对于其他模式（如插入模式及后面会学到的可视化模式）是不起作用的。对于往后我们有其他的操作觉得比较复杂但是又常用的，也可以通过这种方式来添加自己的配置。")]),t._v(" "),s("h2",{attrs:{id:"一简再简"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一简再简"}},[t._v("#")]),t._v(" 一简再简")]),t._v(" "),s("p",[t._v("通过键位的重新映射，总算是可以愉快地行首行尾快速输入了...吗？")]),t._v(" "),s("p",[t._v("并没有的。想想：光标跳到行首或行尾后，要输入字符的话，我们还是要再使用如 "),s("code",[t._v("i")]),t._v(" "),s("code",[t._v("a")]),t._v(" 这些操作指令，才能从命令模式进入输入模式；这时，我们就要请出新的操作命令了：")]),t._v(" "),s("ol",[s("li",[t._v("在光标所在行行首插入(并进入输入模式)："),s("code",[t._v("I")])]),t._v(" "),s("li",[t._v("在光标所在行行尾插入(并进入输入模式)："),s("code",[t._v("A")])]),t._v(" "),s("li",[t._v("在光标所在行的上方插入空白行插入(并进入输入模式)："),s("code",[t._v("O")])]),t._v(" "),s("li",[t._v("在光标所在行的下方插入空白行插入(并进入输入模式)："),s("code",[t._v("o")])])]),t._v(" "),s("p",[t._v("通过这几个命令，我们就可以让光标快速跳到对应的位置并进入输入模式。")]),t._v(" "),s("h2",{attrs:{id:"three-more-thing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#three-more-thing"}},[t._v("#")]),t._v(" three more thing")]),t._v(" "),s("ol",[s("li",[t._v("复制光标所在行："),s("code",[t._v("yy")]),t._v("；与系统的 "),s("code",[t._v("command + c")]),t._v(" 不冲突，即如果先通过 "),s("code",[t._v("cmd + c")]),t._v(" 复制一些内容，再通过 "),s("code",[t._v("yy")]),t._v(" 复制一些内容，此时 "),s("code",[t._v("command + v")]),t._v(" 快捷键粘贴出来的内容是 "),s("code",[t._v("command + c")]),t._v(" 复制的内容而非 "),s("code",[t._v("yy")]),t._v(" 复制的内容;")]),t._v(" "),s("li",[t._v("粘贴："),s("code",[t._v("p")]),t._v("；在 vim 中，有一个叫寄存器的概念，无论是 "),s("code",[t._v("y")]),t._v("（复制指令），还是 "),s("code",[t._v("d")]),t._v("（删除指令），"),s("code",[t._v("c")]),t._v("（删除并进入输入模式指令），被操作后的内容都会暂存在寄存器中，通过 "),s("code",[t._v("p")]),t._v(" 指令则会把寄存器中的内容重新输出，从而达到粘贴的功能")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("v")]),t._v(" 可以选中内容，"),s("code",[t._v("h")]),t._v(" "),s("code",[t._v("j")]),t._v(" "),s("code",[t._v("k")]),t._v(" "),s("code",[t._v("l")]),t._v(" 调整选中区域，选中后通过 "),s("code",[t._v("y")]),t._v(" 复制内容")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("用完中文输入法后尽快切回英文模式")])])])}),[],!1,null,null,null);s.default=e.exports}}]);