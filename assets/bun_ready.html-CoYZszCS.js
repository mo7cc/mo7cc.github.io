import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as s,o as n}from"./app-VA79AvKS.js";const a="/assets/Bun%E5%91%BD%E4%BB%A4-Cx61Kg6o.png",l={};function r(o,e){return n(),t("div",null,e[0]||(e[0]=[s('<h1 id="bun-学习笔记" tabindex="-1"><a class="header-anchor" href="#bun-学习笔记"><span>Bun 学习笔记</span></a></h1><p>Bun 和 NodeJs 都是 JavaScript 运行时。Bun 支持 TypeScript 直接运行。而且具有更快的运行速度。<br> 并且官方文档声称其和 NodeJs 完全兼容，并且同时支持 <code>CommonJS</code> 和 <code>ESModule</code> 。</p><p>好吧，更快的执行和启动速度，完全兼容旧模组，听起来很是完美。<br> 并且， Vue 、 Vite 、 VitePress 官方文档已经出现了 Bun 命令启动示例。也就是说，Vue 生态已经全面拥抱 Bun 。</p><p>并且，Bun 没有历史负担，社区和 Github 非常活跃。我们没有任何理由拒绝学习这么一个全新的，可以投入生产的，优先的 JavaScript RunTime 。</p><p>官方文档: <a href="https://bun.sh" target="_blank" rel="noopener noreferrer">https://bun.sh</a><br> 中文文档: <a href="https://bun.dev.org.tw" target="_blank" rel="noopener noreferrer">https://bun.dev.org.tw</a></p><p><strong>下面是 Vue、Vite、VitePress 最新的安装文档，可以看到全部支持了 Bun，并且可用于生产</strong></p><p>Vue: <a href="https://cn.vuejs.org/guide/quick-start.html" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/guide/quick-start.html</a><br> Vite: <a href="https://cn.vitejs.dev/guide" target="_blank" rel="noopener noreferrer">https://cn.vitejs.dev/guide</a><br> VitePress: <a href="https://vitepress.dev/zh/guide/getting-started" target="_blank" rel="noopener noreferrer">https://vitepress.dev/zh/guide/getting-started</a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p><strong>macOS and Linux</strong></p><blockquote><p>Linux 内核版本 &gt;= 5.6 , 并且需要 <code>unzip</code> 套件</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://bun.sh/install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Windows( &gt;=Win10 )</strong></p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">powershell </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">c </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;irm bun.sh/install.ps1|iex&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bun</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>一般推荐使用 npm 安装，因为现阶段是无法完全脱离 NodeJs 环境的。需要学习 Bun 的人，设备上一定会有 NodeJs</p></blockquote><p>官方安装文档 <a href="https://bun.dev.org.tw/docs/installation" target="_blank" rel="noopener noreferrer">https://bun.dev.org.tw/docs/installation</a></p><h2 id="cli-命令详解" tabindex="-1"><a class="header-anchor" href="#cli-命令详解"><span>Cli 命令详解</span></a></h2><p>命令行输入 run 可以看到常用命令</p><p><img src="'+a+`" alt="Bun命令"></p><p>我们可以发现， bun 不需要用到 npm yarn 或者是 pnpm 这些 包管理器，它直接使用<br><code>bun run</code>, <code>bun install</code>, <code>bun add</code> 等命令来管理项目依赖。</p><p>而且可以直接使用 <code>bun xxx.ts</code> 来解析和执行 Typescript 文件，不需要安装其它依赖。</p><p>使用 <code>bun x</code> 或者 <code>bunx</code> 来替代 <code>npx</code> 命令。 <a href="https://bun.dev.org.tw/docs/cli/bunx" target="_blank" rel="noopener noreferrer">bunx</a></p><p>而且内置 <code>bun test</code> 命令来执行单元测试，不需要安装<code>Jest</code>等模块 。<a href="https://bun.dev.org.tw/docs/cli/test" target="_blank" rel="noopener noreferrer">bun test</a></p><p>还有 <code>bun build</code> 命令，可以直接将一整个 js 项目进行离线打包，不需要安装<code>webpack</code>、<code>rollup</code> 等模块。</p><p>更多的 cli 命令和文档可以参照: <a href="https://juejin.cn/post/7327479054952398887" target="_blank" rel="noopener noreferrer">超越 Node.js：Bun 的创新与突破</a></p><blockquote><p>在学习 Bun 的 Cli 命令过程中，它给我一种非常熟悉的感觉，那就是 Go 语言。<br> 众所周知，Go 现在是一门非常成熟的编程语言，它的设计者更是大名鼎鼎，没有任何一门语言比 Go 语言更简单易学。<br> 之前一直在使用 NodeJs ，自它诞生以来出现了形形色色的补丁和工具以及生态，天下苦 Js 久已，于是 TypeScript 大火。<br> 但是 Bun 的问世和设计让我觉得，这才是一个真正的 Js 运行时该有的样子。</p></blockquote><h2 id="bun-使用国内镜像" tabindex="-1"><a class="header-anchor" href="#bun-使用国内镜像"><span>Bun 使用国内镜像：</span></a></h2><p><code>~/.bunfig.toml</code> 文件中写入如下内容：</p><div class="language-toml line-numbers-mode" data-highlighter="shiki" data-ext="toml" data-title="toml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">install</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">registry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://registry.npmmirror.com&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>实测，使用翻墙工具进行代理比使用 国内镜像 要流畅很多。</p></blockquote><h2 id="将-bun-用于生产环境" tabindex="-1"><a class="header-anchor" href="#将-bun-用于生产环境"><span>将 Bun 用于生产环境</span></a></h2><p>2023 年 9 月，bun 发布 1.0<br> 2024 年 3 月发布 1.1 支持 Windows<br> 直到 2024 年 12 月 17 日，Bun 的最新版本号为 1.1.38 ，<a href="https://github.com/oven-sh/bun/releases" target="_blank" rel="noopener noreferrer">bun-releases</a>上显示它几乎是一个月发布一个新版本，每次更新都会修复大量的已知 BUG，而且会有多位开源贡献大佬参与其中，社区也非常跃度。<br> 主分支的代码几乎是每天都在提交和更新。</p><p>再加上 Vue 生态对 bun 的全面拥抱，以及 1.1 之后的 近一年时间的迭代与修复，我觉得当下就是使用 bun 最好的时机。</p><p>我自己试了一下，将手头现有的两个 Vue 项目换成了 Bun。几乎是无缝切换，目前没出现啥问题。</p><p>具体做法如下:</p><ol><li>删除 node_modules 和 pnpm-lock.yaml</li><li><code>pnpm install</code> 换成 <code>bun install</code></li><li><code>pnpm add &lt;package&gt;</code> 换成 <code>bun add &lt;package&gt;</code></li><li><code>pnpm run dev/build</code> 换成 <code>bun run dev/build</code></li><li><code>pnpm dlx &lt;package&gt;</code> 换成 <code>bunx &lt;package&gt;</code></li></ol><blockquote><p>我想吐槽一下子，这里第一次执行 <code>bun install</code> 时感觉比 <code>pnpm install</code> 慢很多，直到我开启了代理后 速度直接秒杀 <code>pnpm install</code><br> 而且 dev/build 的速度明显提升了非常多。</p></blockquote><p>如果在遇到 <code>bun install</code> 和 <code>bun add</code> 命令卡住的时候，可以加上 <code>--no-cache</code> 参数。(我觉得这是一个官方 BUG)</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bun</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --no-cache</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bun</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">packag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--no-cache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 也可以选择清除缓存</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bun</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>遇到异常可以直接手动删除 <code>~/.bun/install/cache</code> 目录，这是 <code>bun install &lt;package&gt;</code> 的全局缓存目录。</p></blockquote>`,41)]))}const h=i(l,[["render",r],["__file","bun_ready.html.vue"]]),c=JSON.parse('{"path":"/developer/front_end_web/bun_ready.html","title":"Bun 学习笔记","lang":"zh-CN","frontmatter":{"icon":"bun","date":"2024-12-16T00:00:00.000Z","isOriginal":true,"order":4,"description":"Bun 学习笔记","category":["前端","Bun"],"tags":["工具","Bun"],"cover":"/img/node-to-bun.jpg","permalink":"/developer/front_end_web/bun_ready.html","head":[["meta",{"property":"og:url","content":"https://mo7.cc/developer/front_end_web/bun_ready.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"Bun 学习笔记"}],["meta",{"property":"og:description","content":"Bun 学习笔记"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mo7.cc/img/node-to-bun.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-19T02:03:35.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mo7.cc/img/node-to-bun.jpg"}],["meta",{"name":"twitter:image:alt","content":"Bun 学习笔记"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:tag","content":"Bun"}],["meta",{"property":"article:published_time","content":"2024-12-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-19T02:03:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bun 学习笔记\\",\\"image\\":[\\"https://mo7.cc/img/node-to-bun.jpg\\"],\\"datePublished\\":\\"2024-12-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-19T02:03:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mo7.cc/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mo7.cc/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mo7.cc/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"Cli 命令详解","slug":"cli-命令详解","link":"#cli-命令详解","children":[]},{"level":2,"title":"Bun 使用国内镜像：","slug":"bun-使用国内镜像","link":"#bun-使用国内镜像","children":[]},{"level":2,"title":"将 Bun 用于生产环境","slug":"将-bun-用于生产环境","link":"#将-bun-用于生产环境","children":[]}],"git":{"createdTime":1734345867000,"updatedTime":1734573815000,"contributors":[{"name":"墨七","username":"墨七","email":"meichangliang@outlook.com","commits":9,"url":"https://github.com/墨七"}]},"readingTime":{"minutes":3.73,"words":1119},"filePathRelative":"developer/front_end_web/4.Bun学习笔记.md","localizedDate":"2024年12月16日","excerpt":"\\n<p>Bun 和 NodeJs 都是 JavaScript 运行时。Bun 支持 TypeScript 直接运行。而且具有更快的运行速度。<br>\\n并且官方文档声称其和 NodeJs 完全兼容，并且同时支持 <code>CommonJS</code> 和 <code>ESModule</code> 。</p>\\n<p>好吧，更快的执行和启动速度，完全兼容旧模组，听起来很是完美。<br>\\n并且， Vue 、 Vite 、 VitePress 官方文档已经出现了 Bun 命令启动示例。也就是说，Vue 生态已经全面拥抱 Bun 。</p>\\n<p>并且，Bun 没有历史负担，社区和 Github 非常活跃。我们没有任何理由拒绝学习这么一个全新的，可以投入生产的，优先的 JavaScript RunTime 。</p>"}');export{h as comp,c as data};