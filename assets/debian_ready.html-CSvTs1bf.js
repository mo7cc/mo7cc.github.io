import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-CDcD9CqU.js";const l={};function t(c,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="debian-准备工作" tabindex="-1"><a class="header-anchor" href="#debian-准备工作"><span>Debian 准备工作</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该文档有待补充和完善</p></div><p><a href="https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html" target="_blank" rel="noopener noreferrer">https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html</a></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment">#修改登录账户密码</span></span>
<span class="line"><span class="token function">passwd</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看 Shell</span></span>
<span class="line"><span class="token function">cat</span> /etc/shells</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#改为使用 bash</span></span>
<span class="line">chsh <span class="token parameter variable">-s</span> /bin/bash</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看linux 版本</span></span>
<span class="line">lsb_release <span class="token parameter variable">-a</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改  hostname  添加</span></span>
<span class="line"><span class="token function">vim</span> /etc/hostname</span>
<span class="line"><span class="token function">vim</span> /etc/hosts</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-ssh-配置" tabindex="-1"><a class="header-anchor" href="#修改-ssh-配置"><span>修改 ssh 配置</span></a></h2><p>vim /etc/ssh/sshd_config</p><div class="language-YML line-numbers-mode" data-highlighter="prismjs" data-ext="YML"><pre><code class="language-YML"><span class="line"></span>
<span class="line">PermitRootLogin yes</span>
<span class="line"></span>
<span class="line">StrictModes no</span>
<span class="line"></span>
<span class="line">PubkeyAuthentication yes</span>
<span class="line"></span>
<span class="line">PasswordAuthentication yes</span>
<span class="line"></span>
<span class="line">UsePAM yes</span>
<span class="line"></span>
<span class="line">TCPKeepAlive yes</span>
<span class="line"></span>
<span class="line">ClientAliveInterval 60</span>
<span class="line"></span>
<span class="line">ClientAliveCountMax 3</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启 ssh</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">service</span> <span class="token function">ssh</span> restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="保持系统最新" tabindex="-1"><a class="header-anchor" href="#保持系统最新"><span>保持系统最新</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> upgrade</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="换源" tabindex="-1"><a class="header-anchor" href="#换源"><span>换源</span></a></h2><p><a href="https://mirrors.tuna.tsinghua.edu.cn/help/debian/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/help/debian/</a></p><h2 id="查看文件数量限制" tabindex="-1"><a class="header-anchor" href="#查看文件数量限制"><span>查看文件数量限制</span></a></h2><p>ulimit -Hn</p><h2 id="修改时区" tabindex="-1"><a class="header-anchor" href="#修改时区"><span>修改时区</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line">timedatectl set-timezone Asia/Shanghai</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装一些必要软件" tabindex="-1"><a class="header-anchor" href="#安装一些必要软件"><span>安装一些必要软件</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 安装 配置 git</span></span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 安装 配置 nginx</span></span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment">## 安装 screenfetch</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> screenfetch</span>
<span class="line"></span>
<span class="line"><span class="token comment">## 安装 nvm</span></span>
<span class="line"></span>
<span class="line">https://github.com/nvm-sh/nvm</span>
<span class="line"></span>
<span class="line"><span class="token comment">## 安装 golang</span></span>
<span class="line"></span>
<span class="line">https://studygolang.com/dl</span>
<span class="line"></span>
<span class="line"><span class="token comment">## 安装 mongodb</span></span>
<span class="line"></span>
<span class="line">https://www.mongodb.com/docs/mongodb-shell/install/</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令行上色" tabindex="-1"><a class="header-anchor" href="#命令行上色"><span>命令行上色</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token function">vim</span> ~/.bashrc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 取消对应的注释就好了</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重启" tabindex="-1"><a class="header-anchor" href="#重启"><span>重启</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">reboot</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装证书" tabindex="-1"><a class="header-anchor" href="#安装证书"><span>安装证书</span></a></h2><p><a href="https://www.gingerdoc.com/tutorials/how-to-set-up-and-configure-a-certificate-authority-ca-on-debian-10" target="_blank" rel="noopener noreferrer">https://www.gingerdoc.com/tutorials/how-to-set-up-and-configure-a-certificate-authority-ca-on-debian-10</a></p>`,25)])])}const r=s(l,[["render",t]]),o=JSON.parse('{"path":"/coder/operations/debian/debian_ready.html","title":"Debian 准备工作","lang":"zh-CN","frontmatter":{"permalink":"/coder/operations/debian/debian_ready.html","description":"Debian 准备工作 注意 该文档有待补充和完善 https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html 修改 ssh 配置 vim /etc/ssh/sshd_config 然后重启 ssh 保持系统最新 换源 https://mirrors.tuna.tsin...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Debian 准备工作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-04T14:04:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["meta",{"property":"og:url","content":"https://mo7.cc/coder/operations/debian/debian_ready.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"Debian 准备工作"}],["meta",{"property":"og:description","content":"Debian 准备工作 注意 该文档有待补充和完善 https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html 修改 ssh 配置 vim /etc/ssh/sshd_config 然后重启 ssh 保持系统最新 换源 https://mirrors.tuna.tsin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-04T14:04:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-07-04T14:04:00.000Z"}]]},"git":{"createdTime":1732683764000,"updatedTime":1751637840000,"contributors":[{"name":"墨七","username":"","email":"meichangliang@outlook.com","commits":7}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"coder/operations/debian/准备工作.md","excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>该文档有待补充和完善</p>\\n</div>\\n<p><a href=\\"https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.debian.org/doc/manuals/debian-faq/getting-debian.zh-cn.html</a></p>","autoDesc":true}');export{r as comp,o as data};
