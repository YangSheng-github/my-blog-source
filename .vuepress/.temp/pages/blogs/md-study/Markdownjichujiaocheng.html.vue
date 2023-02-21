<template><div><h1 id="markdown基础教程-全" tabindex="-1"><a class="header-anchor" href="#markdown基础教程-全" aria-hidden="true">#</a> Markdown基础教程(全)</h1>
<blockquote>
<p>提到Markdown，很多人首先想到的是简单、Easy等等。的确，Markdown为简单而生。Markdown是由一个叫 JOHN GRUBER 的哥们发明的，它的语法用一篇文章就可以说完。让我们来试试看...</p>
</blockquote>
<h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h2>
<h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h3>
<p>Markdown支持6种级别的标题，对应html标签 h1 ~ h6</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># h1
## h2
### h3
#### h4
##### h5
###### h6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上标记效果如下：</p>
<h1 id="h1" tabindex="-1"><a class="header-anchor" href="#h1" aria-hidden="true">#</a> h1</h1>
<h2 id="h2" tabindex="-1"><a class="header-anchor" href="#h2" aria-hidden="true">#</a> h2</h2>
<h3 id="h3" tabindex="-1"><a class="header-anchor" href="#h3" aria-hidden="true">#</a> h3</h3>
<h4 id="h4" tabindex="-1"><a class="header-anchor" href="#h4" aria-hidden="true">#</a> h4</h4>
<h5 id="h5" tabindex="-1"><a class="header-anchor" href="#h5" aria-hidden="true">#</a> h5</h5>
<h6 id="h6" tabindex="-1"><a class="header-anchor" href="#h6" aria-hidden="true">#</a> h6</h6>
<h3 id="段落及区块引用" tabindex="-1"><a class="header-anchor" href="#段落及区块引用" aria-hidden="true">#</a> 段落及区块引用</h3>
<p>需要记住的是，Markdown其实就是一种易于编写的普通文本，只不过加入了部分渲染文本的标签而已。其最终依然会转换为html标签，因此使用Markdown分段非常简单，前后至少保留一个空行即可。</p>
<p>而另外一个比较常见的需求就是，我们可能希望对某段文字进行强调处理。Markdown提供了一个特殊符号&gt;用于段首进行强调，被强调的文字部分将会高亮显示</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>> 这段文字将被高亮显示...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上标记显示效果如下：</p>
<blockquote>
<p>这段文字将被高亮显示...</p>
</blockquote>
<h3 id="插入链接或图片" tabindex="-1"><a class="header-anchor" href="#插入链接或图片" aria-hidden="true">#</a> 插入链接或图片</h3>
<p>Markdown针对链接和图片的处理也比较简单，可以使用下面的语法进行标记</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[点击跳转至Myblog](https://yangsheng-gitee.gitee.io/)
![图片](/asstes/index-img/logo.gif)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上标记显示效果如下：
<a href="https://yangsheng-gitee.gitee.io/" target="_blank" rel="noopener noreferrer">点击跳转至Myblog<ExternalLinkIcon/></a>
<img src="/asstes/index-img/logo.gif" alt="图片"></p>
<blockquote>
<p>注： 引用图片和链接的唯一区别就是在最前方添加一个感叹号。</p>
</blockquote>
<h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3>
<p>Markdown支持有序列表和无序列表两种形式：</p>
<ul>
<li>无序列表使用*或+或-标识</li>
<li>有序列表使用数字加.标识，例如：1.</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>* 黄瓜
* 玉米
* 茄子

+ 黄瓜
+ 玉米
+ 茄子

- 黄瓜
- 玉米
- 茄子

1. 黄瓜
2. 玉米
3. 茄子
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上标记显示效果如下：</p>
<ul>
<li>黄瓜</li>
<li>玉米</li>
<li>茄子</li>
</ul>
<ul>
<li>黄瓜</li>
<li>玉米</li>
<li>茄子</li>
</ul>
<ul>
<li>黄瓜</li>
<li>玉米</li>
<li>茄子</li>
</ul>
<ol>
<li>黄瓜</li>
<li>玉米</li>
<li>茄子</li>
</ol>
<blockquote>
<p>注：这里比较有趣的地方是，对于有序列表，Markdown将只关注你的第一个项目的数字编号。例如：如果第一个项目编号是3，以此类推，第二个项目应该是4，最终将显示为3、4、5。而如果你指定了第一个编号，后面的编号指定错误也没有关系，Markdown将只在乎你的第一个项目编号。</p>
</blockquote>
<h3 id="使用列表的一些注意事项" tabindex="-1"><a class="header-anchor" href="#使用列表的一些注意事项" aria-hidden="true">#</a> 使用列表的一些注意事项</h3>
<p>如果在单一列表项中包含了多个段落，为了保证渲染正常，*与段落首字母之间必须保留四个空格</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>*    段落一

     小段一
*    段落二

     小段二
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>段落一</p>
<p>小段一</p>
</li>
<li>
<p>段落二</p>
<p>小段二
另外，如果在列表中加入了区块引用，区域引用标记符也需要缩进4个空格</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>* 段落一
    > 区块标记一
* 段落二
    > 区块标记二
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>段落一
<blockquote>
<p>区块标记一</p>
</blockquote>
</li>
<li>段落二
<blockquote>
<p>区块标记二</p>
</blockquote>
</li>
</ul>
<p>注：记住一个原则，如果在和列表配合使用的时候出现了问题，就缩进一次，四个空格或者一个制表符代表一次缩进。如果一次缩进没有解决问题，那就两次。</p>
<h3 id="分隔线" tabindex="-1"><a class="header-anchor" href="#分隔线" aria-hidden="true">#</a> 分隔线</h3>
<p>有时候，为了排版漂亮，可能会加入分隔线。Markdown加入分隔线非常简单，使用下面任意一种形式都可以</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>***
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>产生分隔线的语法要求比较松，符号之间添加空格也可以。</p>
<hr>
<hr>
<h3 id="强调" tabindex="-1"><a class="header-anchor" href="#强调" aria-hidden="true">#</a> 强调</h3>
<p>有时候，我们希望对某一部分文字进行强调，使用*或_包裹即可。使用单一符号标记的效果是斜体，使用两个符号标记的效果是加粗</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>*这里是斜体*
_这里是斜体_

**这里是加粗**
__这里是加粗__

***这里是斜体加粗***
___这里是斜体加粗___

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>这里是斜体</em>
<em>这里是斜体</em></p>
<p><strong>这里是加粗</strong>
<strong>这里是加粗</strong></p>
<p><em><strong>这里是斜体加粗</strong></em>
<em><strong>这里是斜体加粗</strong></em></p>
<h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h2>
<h3 id="插入代码块" tabindex="-1"><a class="header-anchor" href="#插入代码块" aria-hidden="true">#</a> 插入代码块</h3>
<p>Markdown在IT圈子里面比较流行的一个重要原因是，它能够轻松漂亮地插入代码。</p>
<p>方法是，使用反引号`进行包裹即可。如果是行内代码引用，使用单个反引号进行包裹</p>
<p>这是一段var x = 3行内代码</p>
<p>如果插入一整段代码，需要至少使用两个以上反引号进行包裹， 看效果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>使用: ``` value ```
fun (x: Int, y: Int): Int {
  return x + y
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：很多人不知道怎么输入反引号。在英文模式下，找到键盘最左侧esc键下面的第一个键点击即可。</p>
<h3 id="插入表格" tabindex="-1"><a class="header-anchor" href="#插入表格" aria-hidden="true">#</a> 插入表格</h3>
<p>表格是Markdown语法中比较复杂的一个，其语法如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>表头|条目一|条目二
:---:|:---:|:---:
项目|项目一|项目二
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上标记显示效果如下：</p>
<table>
<thead>
<tr>
<th style="text-align:center">表头</th>
<th style="text-align:center">条目一</th>
<th style="text-align:center">条目二</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">项目</td>
<td style="text-align:center">项目一</td>
<td style="text-align:center">项目二</td>
</tr>
</tbody>
</table>
<p>注：三个短斜杠左右的冒号用于控制对齐方式，只放置左边冒号表示文字居左，只放置右边冒号表示文字居右，如果两边都放置冒号表示文字居中。</p>
<h2 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> other</h2>
<h3 id="特殊符号处理" tabindex="-1"><a class="header-anchor" href="#特殊符号处理" aria-hidden="true">#</a> 特殊符号处理</h3>
<p>Markdown使用反斜杠\插入语法中用到的特殊符号。在Markdown中，主要有以下几种特殊符号需要处理：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>\   反斜线
`   反引号
*   星号
_   底线
{}  花括号
[]  方括号
()  括弧
#   井字号
+   加号
-   减号
.   英文句点
!   惊叹号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，如果你需要插入反斜杠，就连续输入两个反斜杠即可：\ =&gt; \ 。</p>
<p>注：在内容中输入以上特殊符号的时候一定要注意转义，否则将导致内容显示不全，甚至排版混乱。</p>
<h3 id="如何给文字上色" tabindex="-1"><a class="header-anchor" href="#如何给文字上色" aria-hidden="true">#</a> 如何给文字上色</h3>
<p>使用Markdown的同学最郁闷的地方恐怕就是不能给文字添加颜色了。事实上，Markdown的最初目标就是为纯写作而生的。因此，它并没有考虑文字颜色这一点。所以，单纯使用Markdown设置文字颜色已经做不到了。但你可以这样做：</p>
<ol>
<li>先用Markdown编辑完成</li>
<li>导出为html，在需要上色的部分手动添加标签<code v-pre>&lt;font color='#ff0000'&gt;&lt;/font&gt;</code>保存即可。</li>
</ol>
<h2 id="done-想说的话" tabindex="-1"><a class="header-anchor" href="#done-想说的话" aria-hidden="true">#</a> Done_想说的话</h2>
<blockquote>
<p>Markdown是一门比html更简单的标记语言，其主要用于日常写作。最终通过相应的编辑器或者脚本转换成html用于页面渲染。如果你是一个作家，或者是一个程序员，Markdown对你来说是一门必备的技能。</p>
</blockquote>
</div></template>


