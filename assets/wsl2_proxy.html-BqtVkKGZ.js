import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as n,o as t}from"./app-LVGRbcoX.js";const o="/assets/wsl_proxy-Dn5N_p0Q.png",p={};function i(c,s){return t(),e("div",null,s[0]||(s[0]=[n(`<h1 id="_3-wsl-配置系统代理" tabindex="-1"><a class="header-anchor" href="#_3-wsl-配置系统代理"><span>3.WSL 配置系统代理</span></a></h1><p>一般情况下，WSL2 的 IP 地址每次启动时都会改变，如果想要在 wsl2 中使用 Windows 系统的代理来进行<code>科学上网</code>，可以使用如下代码。</p><p>进入 WSL 在 <code>~/.bashrc</code> 文件中添加如下指令</p><div class="code-block-title"><div class="code-block-title-bar"><span class="title" data-title="~/.bashrc">~/.bashrc</span></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token assign-left variable">host_ip</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/resolv.conf <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;nameserver&quot;</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">2</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span><span class="token string">&quot;http://<span class="token variable">$host_ip</span>:10809&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>这里的原理就是:<br><code>/etc/resolv.conf</code> 文件中始终会更新当前 <code>WSL2</code> 在 <code>Windows</code> 系统中的局域网 IP，所以就写一行指令动态获取该 IP。</p><p>这里的 <code>:10809</code> 是 windows 的系统代理端口</p></div><p>效果如下：</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本地代理客户端必须要勾选 <code>允许来自局域网的连接</code>，也就是说，如果关闭代理客户端，<code>WSL2</code> 就等于处在断网状态。</p></div><figure><img src="`+o+'" alt="WSL代理设置" tabindex="0" loading="lazy"><figcaption>WSL代理设置</figcaption></figure><p>简单来说是以下几步</p><ol><li>打开本地的代理工具，设置好 windows 端口如 10809</li><li>在 wsl 中设置好动态的 ip 脚本</li><li>查看 Windows 的系统代理是否 OK</li><li>在 WSL 中测试一下是否可以访问 <a href="http://google.com" target="_blank" rel="noopener noreferrer">google.com</a></li><li>如果不行就试着重新安装 <code>WSL</code> 或者重启 windows 系统</li></ol><hr>',11)]))}const d=a(p,[["render",i]]),m=JSON.parse('{"path":"/coder/operations/wsl2_proxy.html","title":"3.WSL 配置系统代理","lang":"zh-CN","frontmatter":{"comment":false,"permalink":"/coder/operations/wsl2_proxy.html","description":"3.WSL 配置系统代理 一般情况下，WSL2 的 IP 地址每次启动时都会改变，如果想要在 wsl2 中使用 Windows 系统的代理来进行科学上网，可以使用如下代码。 进入 WSL 在 ~/.bashrc 文件中添加如下指令 ~/.bashrc 相关信息 这里的原理就是: /etc/resolv.conf 文件中始终会更新当前 WSL2 在 Wi...","head":[["meta",{"property":"og:url","content":"https://mo7.cc/coder/operations/wsl2_proxy.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"3.WSL 配置系统代理"}],["meta",{"property":"og:description","content":"3.WSL 配置系统代理 一般情况下，WSL2 的 IP 地址每次启动时都会改变，如果想要在 wsl2 中使用 Windows 系统的代理来进行科学上网，可以使用如下代码。 进入 WSL 在 ~/.bashrc 文件中添加如下指令 ~/.bashrc 相关信息 这里的原理就是: /etc/resolv.conf 文件中始终会更新当前 WSL2 在 Wi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-04T15:38:33.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-04T15:38:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.WSL 配置系统代理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-04T15:38:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"]]},"git":{"createdTime":1732683764000,"updatedTime":1743781113000,"contributors":[{"name":"墨七","username":"","email":"meichangliang@outlook.com","commits":5}]},"readingTime":{"minutes":0.97,"words":292},"filePathRelative":"coder/operations/3.WSL配置系统代理.md","localizedDate":"2024年11月27日","excerpt":"\\n<p>一般情况下，WSL2 的 IP 地址每次启动时都会改变，如果想要在 wsl2 中使用 Windows 系统的代理来进行<code>科学上网</code>，可以使用如下代码。</p>\\n<p>进入 WSL 在 <code>~/.bashrc</code> 文件中添加如下指令</p>\\n<div class=\\"code-block-title\\">\\n  <div class=\\"code-block-title-bar\\">\\n    <span class=\\"title\\" data-title=\\"~/.bashrc\\">~/.bashrc</span>\\n  </div>\\n  <div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\"><pre><code><span class=\\"line\\"><span class=\\"token assign-left variable\\">host_ip</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">cat</span> /etc/resolv.conf <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> <span class=\\"token string\\">\\"nameserver\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">cut</span> <span class=\\"token parameter variable\\">-f</span> <span class=\\"token number\\">2</span> <span class=\\"token parameter variable\\">-d</span> <span class=\\"token string\\">\\" \\"</span><span class=\\"token variable\\">)</span></span></span>\\n<span class=\\"line\\"><span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">ALL_PROXY</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"http://<span class=\\"token variable\\">$host_ip</span>:10809\\"</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>\\n</div>","autoDesc":true}');export{d as comp,m as data};
