(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{622:function(v,_,t){"use strict";t.r(_);var e=t(4),s=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"什么是线性表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是线性表"}},[v._v("#")]),v._v(" 什么是线性表")]),v._v(" "),_("blockquote",[_("p",[v._v("前言")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("1、同一个问题可以有不同的表示（存储）方法\n2、有一类共性问题：有序线性序列的组织和管理\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("定义（仅供理解）")]),v._v(" "),_("p",[_("strong",[v._v("定义一")]),v._v("："),_("code",[v._v("线性表(Linear List)")]),v._v("：由同类型数据元素构成有序序列的线性结构\n"),_("strong",[v._v("定义二")]),v._v("："),_("code",[v._v("线性表(Linear List)")]),v._v(":是一种基本的数据结构，用于存储一组有序的元素。线性表中的元素具有线性关系，即每个元素都有唯一的前驱和后继（除了第一个元素没有前驱和最后一个元素没有后继）。线性表可以通过顺序存储（数组）或链式存储（链表）来实现。")]),v._v(" "),_("p",[_("strong",[v._v("线性表初识")])]),v._v(" "),_("ul",[_("li",[v._v("表中元素个数称为线性表的"),_("code",[v._v("长度")]),v._v(";")]),v._v(" "),_("li",[v._v("线性表没有元素时，称为"),_("code",[v._v("空表")]),v._v(";")]),v._v(" "),_("li",[v._v("表起始位置称"),_("code",[v._v("表头")]),v._v("，表结束位置称"),_("code",[v._v("表尾")]),v._v(";")])]),v._v(" "),_("p",[_("strong",[v._v("线性表的特点")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("有序性")]),v._v("：元素按线性顺序排列。")]),v._v(" "),_("li",[_("code",[v._v("唯一性")]),v._v("：每个元素都有唯一的前驱和后继。")]),v._v(" "),_("li",[_("code",[v._v("动态性")]),v._v("：元素的个数可以动态变化。")])])]),v._v(" "),_("h2",{attrs:{id:"线性表的抽象数据类型描述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线性表的抽象数据类型描述"}},[v._v("#")]),v._v(" 线性表的抽象数据类型描述")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("类型名称")]),v._v("：线性表（"),_("strong",[v._v("List")]),v._v("）")]),v._v(" "),_("li",[_("code",[v._v("数据对象集")]),v._v("：线性表是 **n (≥0)**个元素构成的有序序列 "),_("strong",[v._v("( a1, a2, ...,an )")])]),v._v(" "),_("li",[_("code",[v._v("操作集")]),v._v("：线性表"),_("strong",[v._v("L ∈ List")]),v._v("，整数i表示位置，元素"),_("strong",[v._v("X ∈ ElementType")]),v._v("，线性表基本操作主要有：")])]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("线性表的方法")])])]),v._v(" "),_("ol",[_("li",[_("code",[v._v("List MakeEmpty()")]),v._v("：初始化一个空线性表"),_("strong",[v._v("L")]),v._v("；")]),v._v(" "),_("li",[_("code",[v._v("ElementType FindKth( int K, List L )")]),v._v("：根据位序"),_("strong",[v._v("K")]),v._v("，返回相应元素 ；")]),v._v(" "),_("li",[_("code",[v._v("int Find( ElementType X, List L )")]),v._v("：在线性表"),_("strong",[v._v("L")]),v._v("中查找"),_("strong",[v._v("X")]),v._v("的第一次出现位置；")]),v._v(" "),_("li",[_("code",[v._v("void Insert( ElementType X, int i, List L)")]),v._v("：在位序"),_("strong",[v._v("i")]),v._v("前插入一个新元素"),_("strong",[v._v("X")]),v._v("；")]),v._v(" "),_("li",[_("code",[v._v("void Delete( int i, List L )")]),v._v("：删除指定位序"),_("strong",[v._v("i")]),v._v("的元素；")]),v._v(" "),_("li",[_("code",[v._v("int Length( List L )")]),v._v("：返回线性表L的长度"),_("strong",[v._v("n")]),v._v("。")])]),v._v(" "),_("h2",{attrs:{id:"线性表的链式存储实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线性表的链式存储实现"}},[v._v("#")]),v._v(" 线性表的链式存储实现")]),v._v(" "),_("p",[_("strong",[_("code",[v._v("不要求逻辑上相邻的两个元素物理上也相邻")]),v._v("；通过“链”建立起数据元素之间的逻辑关系。")])]),v._v(" "),_("ul",[_("li",[v._v("插入、删除不需要移动数据元素，只需要修改“链”。")])]),v._v(" "),_("h2",{attrs:{id:"多重链表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多重链表"}},[v._v("#")]),v._v(" 多重链表")]),v._v(" "),_("blockquote",[_("p",[v._v("定义及属性\n"),_("code",[v._v("多重链表")]),v._v("：链表中的节点可能同时隶属于多个链")])]),v._v(" "),_("ul",[_("li",[v._v("多重链表中结点的指针域会有多个，如前面例子包含了Next和SubList两个指针域；")]),v._v(" "),_("li",[v._v("但包含两个指针域的链表并不一定是多重链表，比如"),_("code",[v._v("在双向链表不是多重链表")]),v._v("。")])]),v._v(" "),_("blockquote",[_("p",[v._v("多重链表有广泛的用途：\n基本上如"),_("code",[v._v("树")]),v._v("、"),_("code",[v._v("图")]),v._v("这样相对复杂的数据结构都"),_("code",[v._v("可以采用多重链表")]),v._v("方式实现存储。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);