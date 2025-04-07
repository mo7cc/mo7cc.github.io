import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as o,d as c,a,f as p,e as t,w as l,r as n,o as m}from"./app-LVGRbcoX.js";const h="/assets/%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86%E5%99%A8-D7nNTSpe.png",g="/assets/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE-CZhc_JWU.png",f={},b={class:"hint-container warning"};function u(x,e){const s=n("RouteLink"),i=n("BiliBili");return m(),r("div",null,[e[4]||(e[4]=o("h1",{id:"_2-路径和文件",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2-路径和文件"},[o("span",null,"2.路径和文件")])],-1)),o("div",b,[e[3]||(e[3]=o("p",{class:"hint-container-title"},"注意",-1)),o("p",null,[e[1]||(e[1]=t("注意：本文中的一些超链接你可能会打不开，那很可能是因为需要 ")),c(s,{to:"/coder/basic/proxy_to_net.html"},{default:l(()=>e[0]||(e[0]=[t("科学上网")])),_:1}),e[2]||(e[2]=t("。"))])]),e[5]||(e[5]=o("p",null,[o("a",{href:"https://zh.wikipedia.org/wiki/%E8%B7%AF%E5%BE%84_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)",target:"_blank",rel:"noopener noreferrer"},"路径-维基百科")],-1)),e[6]||(e[6]=o("p",null,"文件路径是用于描述文件系统资源的一个文本标识。 文件系统是对文件存储设备的空间进行组织和分配，负责文件存储并对存入的文件进行保护和检索的系统。 文件存放在外部存储器中的某些位置上，经由文件系统管理后，被系统以文件路径标识，系统可以通过文件路径检索到对应文件。",-1)),e[7]||(e[7]=o("p",null,"放一段视频：",-1)),c(i,{bvid:"BV12V41197fC"}),e[8]||(e[8]=a(`<h2 id="文件、文件名、文件后缀名、文件拓展名" tabindex="-1"><a class="header-anchor" href="#文件、文件名、文件后缀名、文件拓展名"><span>文件、文件名、文件后缀名、文件拓展名</span></a></h2><p>这里放上一篇解释的比较清楚的文章<br><a href="https://www.ecdove.com/p/245.html" target="_blank" rel="noopener noreferrer">https://www.ecdove.com/p/245.html</a></p><p>文件名就是文件的名称，是为了方便人们区分计算机中的不同文件，而给每个文件设定一个指定的名称。<br> 文件名不能包含控制字符: <code>&lt; &gt; / \\ | : &quot; \\* ?</code></p><p><a href="https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E6%89%A9%E5%B1%95%E5%90%8D" target="_blank" rel="noopener noreferrer">文件扩展名</a> 也称为文件的延伸文件名、后缀名，是操作系统用来标记文件类型的一种机制。通常来说，一个扩展名是跟在主文件名后面的，由一个分隔符分隔。</p><p>文件扩展名其更重要的作用是让系统决定当用户想打开这个文件的时候用哪种软件运行，如 Windows 系统中 <code>.exe</code> 文件是可执行文件，<code>.doc</code> 文件默认用 <code>Microsoft Word</code> 打开的 Word 文件。</p><div class="hint-container tip"><p class="hint-container-title">误区</p><ol><li><p>文件扩展名是一个文件的必要构成部分。❌<br> 任何一个文件都可以没有扩展名。没有扩展名的文件需要选择程序去打开它，有扩展名的文件会自动用设置好的默认程序去打开。文件扩展名是一个常规文件的构成部分，但一个文件并不一定需要一个扩展名。</p></li><li><p>文件扩展名表明了该文件是何种类型。❌<br> 文件扩展名可以人为设定，扩展名为 TXT 的文件有可能是一张图片，同样，扩展名为 MP3 的文件，依然可能是一个视频。</p></li></ol><p>ps:凡是可以人为随意修改的东西，都是不可信的</p></div><p>你可以试试 在桌面新建一个 <code>demo.txt</code> 文件，在里面写上一句话，然后修改后缀名为 <code>demo.html</code>，然后刷新桌面看看。它的内容都没有变，只是解析这个文件的默认程序和方法变了。</p><h2 id="绝对路径与相对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径与相对路径"><span>绝对路径与相对路径</span></a></h2><p><strong>绝对路径例子：</strong></p><p><code>c:\\user\\www\\index.html</code><br><code>/user/www/index.html</code><br><code>/Users/mo7cc</code></p><p>也就是说，路径的起始符号为路径分隔符 <code>/</code> 或者 <code>\\</code> 或者盘符 <code>c:</code> , 该路径就表示为绝对路径，其中 <code>类Unix系统</code> 的路径分隔符都为 <code>/</code> , 只有 windows 系为 <code>\\</code>, 这一点要注意。<br> 绝对路径指向一个文件路径的固定位置，不会因为当前工作目录的变化而变化，所以为了准确描述，它必须包含根目录。</p><p><strong>相对路径例子：</strong></p><p><code>./www/index.html</code><br><code>../index.html</code><br><code>www/index.html</code></p><p>也就是说，路径起始符号为 <code>./</code> <code>../</code> 或者是 <code>www/</code> 这样的目录名 的就是相对路径。也就是以当前工作目录或文件所在目录为起点表示的相对位置。<br> 其中 <code>./</code> 表示当前目录。 <code>../</code> 表示上一层目录。<br> 其中 <code>./www</code> 和 <code>www</code> 是等价的，都表示当前目录下的 <code>www</code> 目录。<br> 同理 <code>./www/index.html</code> 和 <code>www/index.html</code> 也是等价的，都表示当前目录下的 <code>www</code>目录下的 <code>index.html</code> 文件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过相对路径和绝对路径，我们就可以在系统中准确的表示和定位一个文件或者目录了。<br> 一般在项目开发中，一般都是基于于项目所在的目录为基准点使用相对路径来描述项目中文件和文件之间的关系。</p></div><h2 id="绝对路径和相对路径的应用" tabindex="-1"><a class="header-anchor" href="#绝对路径和相对路径的应用"><span>绝对路径和相对路径的应用</span></a></h2><p>比如说，我们要在 main.js 文件中引入另一个 tools.js 文件。</p><p>main.js 文件在 <code>/user/mo7cc/my-project/main.js</code><br> tools.js 文件在 <code>/user/mo7cc/my-project/tools.js</code></p><p>绝对路径引用:</p><div class="code-block-title"><div class="code-block-title-bar"><span class="title" data-title="main.js">main.js</span></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> tools <span class="token keyword">from</span> <span class="token string">&#39;/user/mo7cc/my-project/tools.js&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><p>相对路径引用:</p><div class="code-block-title"><div class="code-block-title-bar"><span class="title" data-title="main.js">main.js</span></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> tools <span class="token keyword">from</span> <span class="token string">&#39;./tools.js&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><p>此时，这两种引用方式都是正确的，代码都可以顺利运行。因为两个文件都在 <code>mo7cc/my-project</code> 下。</p><p>这个时候，如果另一个人下载了项目，他的工作目录不是 <code>mo7cc</code> ， 是 <code>mo8cc</code>，那么文件的的路径就变成了:</p><p>main.js 文件会变成 <code>/user/mo8cc/my-project/main.js</code><br> tools.js 文件会变成 <code>/user/mo8cc/my-project/tools.js</code></p><p>那么绝对路径引用就必须得修改成下面这样:</p><div class="code-block-title"><div class="code-block-title-bar"><span class="title" data-title="main.js">main.js</span></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> tools <span class="token keyword">from</span> <span class="token string">&#39;/user/mo8cc/my-project/tools.js&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><p>而此时，相对路径不需要修改，因为两个文件依然在 <code>my-project</code> 下面。如果一个项目有上百个文件，那么移动项目的位置将会是一场灾难。</p><h2 id="统一资源定位符" tabindex="-1"><a class="header-anchor" href="#统一资源定位符"><span>统一资源定位符</span></a></h2><p>windows 下一般定位资源必须得带上盘符，比如 <code>c:\\user\\mo7cc\\image</code><br> Linux 系统则是 <code>/home/mo7cc/image</code><br> 而一般的网络资源则是 <code>https://file.mo7.cc/static/lxh_gif/lxh_71.gif</code></p><p>他们之间的区别是什么呢?</p><p>一般 windows 会存在很多磁盘，<code>c:\\</code>、<code>d:\\</code>、<code>e:\\</code>，没有盘符则无法在系统中准确描述一个文件所在位置的。<br> 而 Linux 一般会把拓展的硬盘分区放在 <code>/mnt/c</code>、<code>/mnt/d</code>、<code>/mnt/e</code>，下。所以 Linux 下表示根目录有且只有一种方式： <code>/</code>。</p><p>你自己本地的一个文件例如 <code>c:\\user\\mo7cc\\my-project\\index.html</code> 要怎么才能共享给别人，让别人都能访问到呢？不太可能把电脑搬到人家里去吧？</p><p>这个时候，如果你的机器有一个公网的 ip 地址，这个时候就可以使用 <a href="https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%AC%A6" target="_blank" rel="noopener noreferrer">统一资源定位符</a> 来表示该文件了。这个时候这个文件又叫做<code>网络资源</code>或者<code>公网资源</code>。</p><p>统一资源定位符的标准格式如下：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code><span class="line">[协议类型]://[服务器地址]:[端口号]/[资源层级Unix文件路径][文件名]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如 <a href="http://123.123.123.1234:8080/static/lxh_gif/lxh_71.gif" target="_blank" rel="noopener noreferrer">http://123.123.123.1234:8080/static/lxh_gif/lxh_71.gif</a></p><p>协议类型为 <code>http</code><br> 服务器地址为 <code>123.123.123.1234</code><br> 端口号为 <code>8080</code><br> 资源层级文件路径为 <code>static/lxh_gif/lxh_71.gif</code></p><p>如果你注册了一个域名<code>file.mo7.cc</code> 并指向了你的服务器 IP ，然后资源服务器的端口设定为 <code>80</code>，那么地址就变成了</p><p><a href="http://file.mo7.cc/static/lxh_gif/lxh_71.gif" target="_blank" rel="noopener noreferrer">http://file.mo7.cc/static/lxh_gif/lxh_71.gif</a></p><p>如果设定端口为 <code>443</code>，那么资源地址就会是</p><p><a href="https://file.mo7.cc/static/lxh_gif/lxh_71.gif" target="_blank" rel="noopener noreferrer">https://file.mo7.cc/static/lxh_gif/lxh_71.gif</a></p><div class="hint-container tip"><p class="hint-container-title">翻译成白话文就是</p><p>使用 HTTP 协议的方式(如浏览器)，去访问 ip 地址为 <code>123.123.123.1234</code> 的服务器，因为公网的 ip 地址都是唯一的，所以一定可以定位到该服务器。然后端口也有了，那么就可以准确定位到这个服务器上的这个服务了。然后就可以尝试去和这个服务索要 <code>static/lxh_gif/lxh_71.gif</code> 文件了。</p><p>这个就是，<code>统一资源定位符</code> 的唯一性。而且是全世界唯一，所以任何人都可以通过这个 <strong>唯一性</strong> 去定位和访问这个文件了。</p><p>路径，则是在这台机器上(也就是<code>本地</code>)具有 <code>唯一性</code>，所以<code>本地用户</code>就可以准确的定位这个文件并访问。</p></div><p>一个文件的路径必须具备 <code>本地唯一性</code>，一个公网资源路径则必须具备<code>世界唯一性</code>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>统一资源定位符</code> 中的域名一般是不区分大小写的<br><a href="https://file.mo7.cc/static/lxh_gif/lxh_71.gif" target="_blank" rel="noopener noreferrer">https://file.mo7.cc/static/lxh_gif/lxh_71.gif</a><br> 和<br><a href="HTTPS://FILE.MO7.CC/static/lxh_gif/lxh_71.gif">HTTPS://FILE.MO7.CC/static/lxh_gif/lxh_71.gif</a><br> 是一样的</p><hr><p>windows 中的路径也不区分大小写</p><p><code>c:\\user\\mo7cc\\my-project\\index.html</code></p><p>和</p><p><code>C:\\User\\Mo7cc\\my-project\\index.html</code></p><p>表示同一个路径</p><hr><p>但是 Linux 是区分的大小写的！大小写不一样的会被认为是两个不同的路径。</p><p>为了格式统一和降低心智负担，所以路径和文件名一般避免使用特殊符号和空格，并尽量使用小写，单词和单词之间使用 <code>_</code> 或 <code>-</code> 进行连接。</p></div><p>参考文章: <a href="https://developer.aliyun.com/article/909794" target="_blank" rel="noopener noreferrer">Linux 文件（目录）命名规则</a></p><h2 id="路径别名" tabindex="-1"><a class="header-anchor" href="#路径别名"><span>路径别名</span></a></h2><p>比如，在 Linux 系统中 <code>~</code> 代表当前登录的用户主目录，<br> 比如:<br> 当前用户身份为 <code>root</code> 用户，则 <code>~/</code> 等价于 <code>/root/</code><br> 当前用户为一般用户且用户名为 <code>mo7cc</code> 用户，则 <code>~/</code> 等价于 <code>/home/mo7cc/</code></p><p>如下图，使用命令 <code>cd ~</code> 进入 <code>~</code> 目录之后，打印绝对路径结果为 <code>/root</code>,<br><code>cd ~/handy-golang</code> 等价于 <code>cd /root/handy-golang</code></p>`,49)),p(" ![用户目录演示](../front_end_web/image/linux_path_alias.png) "),e[9]||(e[9]=a(`<h2 id="显示文件后缀名" tabindex="-1"><a class="header-anchor" href="#显示文件后缀名"><span>显示文件后缀名</span></a></h2><p><strong>macOS</strong></p><p><a href="https://support.apple.com/zh-cn/guide/mac-help/mchlp2304/mac" target="_blank" rel="noopener noreferrer">在 Mac 上显示或隐藏文件扩展名</a></p><p><strong>Linux</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">ls</span> <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>windows</strong></p><figure><img src="`+h+'" alt="方法一：通过资源管理器设置" tabindex="0" loading="lazy"><figcaption>方法一：通过资源管理器设置</figcaption></figure><figure><img src="'+g+'" alt=" 方法二：在开发者选项中设置" tabindex="0" loading="lazy"><figcaption> 方法二：在开发者选项中设置</figcaption></figure>',8))])}const _=d(f,[["render",u]]),k=JSON.parse('{"path":"/coder/basic/file_and_path.html","title":"2.路径和文件","lang":"zh-CN","frontmatter":{"order":2,"permalink":"/coder/basic/file_and_path.html","description":"2.路径和文件 注意 注意：本文中的一些超链接你可能会打不开，那很可能是因为需要 。 路径-维基百科 文件路径是用于描述文件系统资源的一个文本标识。 文件系统是对文件存储设备的空间进行组织和分配，负责文件存储并对存入的文件进行保护和检索的系统。 文件存放在外部存储器中的某些位置上，经由文件系统管理后，被系统以文件路径标识，系统可以通过文件路径检索到对应...","head":[["meta",{"property":"og:url","content":"https://mo7.cc/coder/basic/file_and_path.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"2.路径和文件"}],["meta",{"property":"og:description","content":"2.路径和文件 注意 注意：本文中的一些超链接你可能会打不开，那很可能是因为需要 。 路径-维基百科 文件路径是用于描述文件系统资源的一个文本标识。 文件系统是对文件存储设备的空间进行组织和分配，负责文件存储并对存入的文件进行保护和检索的系统。 文件存放在外部存储器中的某些位置上，经由文件系统管理后，被系统以文件路径标识，系统可以通过文件路径检索到对应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-04T14:49:21.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-04T14:49:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.路径和文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-04T14:49:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"]]},"git":{"createdTime":1732683764000,"updatedTime":1743778161000,"contributors":[{"name":"墨七","username":"","email":"meichangliang@outlook.com","commits":4}]},"readingTime":{"minutes":7.39,"words":2217},"filePathRelative":"coder/basic/2.路径和文件.md","localizedDate":"2024年11月27日","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>注意：本文中的一些超链接你可能会打不开，那很可能是因为需要 <a href=\\"/coder/basic/proxy_to_net.html\\" target=\\"_blank\\">科学上网</a>。</p>\\n</div>\\n<p><a href=\\"https://zh.wikipedia.org/wiki/%E8%B7%AF%E5%BE%84_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">路径-维基百科</a></p>","autoDesc":true}');export{_ as comp,k as data};
