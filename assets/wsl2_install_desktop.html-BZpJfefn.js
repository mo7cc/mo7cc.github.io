import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as t}from"./app-LVGRbcoX.js";const l={};function i(p,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="wsl2-安装远程桌面" tabindex="-1"><a class="header-anchor" href="#wsl2-安装远程桌面"><span>WSL2 安装远程桌面</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> xfce4-terminal</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> xfce4</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-vcxsrv" tabindex="-1"><a class="header-anchor" href="#安装-vcxsrv"><span>安装 VcXsrv</span></a></h2><p><a href="https://sourceforge.net/projects/vcxsrv/" target="_blank" rel="noopener noreferrer">https://sourceforge.net/projects/vcxsrv/</a></p><h2 id="添加配置文件" tabindex="-1"><a class="header-anchor" href="#添加配置文件"><span>添加配置文件</span></a></h2><p>~/.bashrc</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token assign-left variable">host_ip</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/resolv.conf <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;nameserver&quot;</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-f</span> <span class="token number">2</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span><span class="token string">&quot;socks5://<span class="token variable">$host_ip</span>:10809&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">DISPLAY</span></span><span class="token operator">=</span>localhost:0.0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动桌面" tabindex="-1"><a class="header-anchor" href="#启动桌面"><span>启动桌面</span></a></h2><p>启动 XLaunch 可以无脑下一步，然后是个黑屏。</p><p>然后在 WSL2 中输入</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"></span>
<span class="line"> <span class="token function">sudo</span>  startxfce4</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><p><a href="https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/gui-apps" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/gui-apps</a></p><p><a href="https://blog.csdn.net/sy95122/article/details/125143100" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/sy95122/article/details/125143100</a></p><p><a href="https://blog.csdn.net/weixin_45934869/article/details/131963546" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_45934869/article/details/131963546</a></p>`,15)]))}const o=n(l,[["render",i]]),d=JSON.parse('{"path":"/coder/operations/linux/wsl2_install_desktop.html","title":"WSL2 安装远程桌面","lang":"zh-CN","frontmatter":{"comment":false,"permalink":"/coder/operations/linux/wsl2_install_desktop.html","description":"WSL2 安装远程桌面 安装 VcXsrv https://sourceforge.net/projects/vcxsrv/ 添加配置文件 ~/.bashrc 启动桌面 启动 XLaunch 可以无脑下一步，然后是个黑屏。 然后在 WSL2 中输入 参考资料 https://learn.microsoft.com/zh-cn/windows/wsl/t...","head":[["meta",{"property":"og:url","content":"https://mo7.cc/coder/operations/linux/wsl2_install_desktop.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"WSL2 安装远程桌面"}],["meta",{"property":"og:description","content":"WSL2 安装远程桌面 安装 VcXsrv https://sourceforge.net/projects/vcxsrv/ 添加配置文件 ~/.bashrc 启动桌面 启动 XLaunch 可以无脑下一步，然后是个黑屏。 然后在 WSL2 中输入 参考资料 https://learn.microsoft.com/zh-cn/windows/wsl/t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-04T15:28:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-04T15:28:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WSL2 安装远程桌面\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-04T15:28:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"]]},"git":{"createdTime":1732683764000,"updatedTime":1743780530000,"contributors":[{"name":"墨七","username":"","email":"meichangliang@outlook.com","commits":5}]},"readingTime":{"minutes":0.32,"words":97},"filePathRelative":"coder/operations/linux/wsl安装桌面.md","localizedDate":"2024年11月27日","excerpt":"\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\"><pre><code><span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> <span class=\\"token function\\">install</span> xfce4-terminal</span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> <span class=\\"token function\\">install</span> xfce4</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{o as comp,d as data};
