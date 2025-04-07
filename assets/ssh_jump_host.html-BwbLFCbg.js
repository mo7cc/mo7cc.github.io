import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as n,a as p,e as a,d as i,w as l,r,o as c}from"./app-LVGRbcoX.js";const d={};function u(m,s){const e=r("RouteLink");return c(),o("div",null,[s[7]||(s[7]=n("h1",{id:"_4-ssh-跳板机",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-ssh-跳板机"},[n("span",null,"4.ssh 跳板机")])],-1)),n("p",null,[s[1]||(s[1]=a("前面讲过 ")),i(e,{to:"/misc/proxy_wall_ready.html"},{default:l(()=>s[0]||(s[0]=[a("科学上网与本地代理")])),_:1}),s[2]||(s[2]=a("，但是那只是在配置 ")),s[3]||(s[3]=n("code",null,"http_proxy",-1)),s[4]||(s[4]=a(" ，只适用于 ")),s[5]||(s[5]=n("code",null,"http",-1)),s[6]||(s[6]=a(" 请求。"))]),s[8]||(s[8]=p(`<p><code>http</code> 请求并非网络的全部，有的时候可能还会用到 <code>ssh 协议</code>，比如 Github，但是 Github 的访问又不那么流畅，怎么办呢？</p><h2 id="什么是-ssh" tabindex="-1"><a class="header-anchor" href="#什么是-ssh"><span>什么是 <code>SSH</code></span></a></h2><p>什么是 SSH：<br><a href="https://info.support.huawei.com/info-finder/encyclopedia/zh/SSH.html" target="_blank" rel="noopener noreferrer">https://info.support.huawei.com/info-finder/encyclopedia/zh/SSH.html</a></p><h2 id="什么是-ssh跳板机" tabindex="-1"><a class="header-anchor" href="#什么是-ssh跳板机"><span>什么是 <code>SSH跳板机</code></span></a></h2><p>在公司开发中，为了安全起见，生产环境跟开发环境是相互隔离开来的。也就是说在开发环境网络中无法直接 ssh 登录到生产环境的机器， 如果需要登录生产环境的机器，通常会需要借助跳板机，先登录到跳板机，然后通过跳板机登录到生产环境。</p><ul><li>大致的过程如下面的图示：</li></ul><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code><span class="line">+-------------+       +-----------+       +--------------+</span>
<span class="line">| 开发环境机器 | &lt;---&gt; | 跳板服务器 | &lt;---&gt; |  生产环境机器 |</span>
<span class="line">+-------------+       +-----------+       +--------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>换成 shell 命令就是：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">ssh</span> foo@jump_host  -----<span class="token operator">&gt;</span>  <span class="token function">ssh</span> bar@production_host</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>两步操作变成一步</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-tt</span> foo@jump_host <span class="token function">ssh</span> <span class="token parameter variable">-tt</span> bar@production_host</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="通过设置-proxycommand-把配置写到配置文件里面" tabindex="-1"><a class="header-anchor" href="#通过设置-proxycommand-把配置写到配置文件里面"><span>通过设置 ProxyCommand 把配置写到配置文件里面</span></a></h2><p>文件:<code>~/.ssh/config</code></p><blockquote><p>如果没有就自己新建一个</p></blockquote><p>比如我的机器一般是这么配置的:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">Host www<span class="token punctuation">.</span>mo7<span class="token punctuation">.</span>cc</span>
<span class="line">  HostName www<span class="token punctuation">.</span>mo7<span class="token punctuation">.</span>cc</span>
<span class="line">  User root</span>
<span class="line"></span>
<span class="line">Host github<span class="token punctuation">.</span>com</span>
<span class="line">  HostName github<span class="token punctuation">.</span>com</span>
<span class="line">  User git</span>
<span class="line">  ProxyCommand ssh <span class="token operator">-</span><span class="token constant">W</span> <span class="token operator">%</span>h<span class="token operator">:</span><span class="token operator">%</span>p www<span class="token punctuation">.</span>mo7<span class="token punctuation">.</span>cc</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这样 在执行 <code>git clone git@github.com:xxxx/xxxx.git</code> 的时候会通过 <code>www.mo7.cc</code> 的网络了</p></blockquote><p>语法示例如下</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">Host <span class="token constant">B</span></span>
<span class="line">    HostName <span class="token operator">%</span>h</span>
<span class="line">    User dsl</span>
<span class="line">    Port <span class="token number">1046</span></span>
<span class="line">    IdentityFile <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_dsa</span>
<span class="line"></span>
<span class="line">Host <span class="token constant">C</span></span>
<span class="line">    HostName <span class="token operator">%</span>h</span>
<span class="line">    User dsl</span>
<span class="line">    Port <span class="token number">1046</span></span>
<span class="line">    IdentityFile <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa</span>
<span class="line">    ProxyCommand ssh <span class="token operator">-</span><span class="token constant">W</span> <span class="token operator">%</span>h<span class="token operator">:</span><span class="token operator">%</span>p <span class="token constant">B</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>记得添加 ssh 私钥</p></blockquote>`,20))])}const b=t(d,[["render",u]]),k=JSON.parse('{"path":"/coder/operations/ssh_jump_host.html","title":"4.ssh 跳板机","lang":"zh-CN","frontmatter":{"comment":false,"permalink":"/coder/operations/ssh_jump_host.html","description":"4.ssh 跳板机 前面讲过 ，但是那只是在配置 http_proxy ，只适用于 http 请求。 http 请求并非网络的全部，有的时候可能还会用到 ssh 协议，比如 Github，但是 Github 的访问又不那么流畅，怎么办呢？ 什么是 SSH 什么是 SSH： https://info.support.huawei.com/info-fin...","head":[["meta",{"property":"og:url","content":"https://mo7.cc/coder/operations/ssh_jump_host.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"4.ssh 跳板机"}],["meta",{"property":"og:description","content":"4.ssh 跳板机 前面讲过 ，但是那只是在配置 http_proxy ，只适用于 http 请求。 http 请求并非网络的全部，有的时候可能还会用到 ssh 协议，比如 Github，但是 Github 的访问又不那么流畅，怎么办呢？ 什么是 SSH 什么是 SSH： https://info.support.huawei.com/info-fin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-04T15:38:33.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-04T15:38:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.ssh 跳板机\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-04T15:38:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"]]},"git":{"createdTime":1732683764000,"updatedTime":1743781113000,"contributors":[{"name":"墨七","username":"","email":"meichangliang@outlook.com","commits":5}]},"readingTime":{"minutes":1.26,"words":377},"filePathRelative":"coder/operations/4.ssh跳板机.md","localizedDate":"2024年11月27日","excerpt":"\\n<p>前面讲过 <a href=\\"/misc/proxy_wall_ready.html\\" target=\\"_blank\\">科学上网与本地代理</a>，但是那只是在配置 <code>http_proxy</code> ，只适用于 <code>http</code> 请求。</p>\\n<p><code>http</code> 请求并非网络的全部，有的时候可能还会用到 <code>ssh 协议</code>，比如 Github，但是 Github 的访问又不那么流畅，怎么办呢？</p>\\n<h2>什么是 <code>SSH</code></h2>\\n<p>什么是 SSH：<br>\\n<a href=\\"https://info.support.huawei.com/info-finder/encyclopedia/zh/SSH.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://info.support.huawei.com/info-finder/encyclopedia/zh/SSH.html</a></p>","autoDesc":true}');export{b as comp,k as data};
