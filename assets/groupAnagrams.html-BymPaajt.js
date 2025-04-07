import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as p,o as t}from"./app-LVGRbcoX.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="字母异位词分组-groupanagrams" tabindex="-1"><a class="header-anchor" href="#字母异位词分组-groupanagrams"><span>字母异位词分组 (groupAnagrams)</span></a></h1><p><a href="https://leetcode.cn/problems/group-anagrams" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/group-anagrams</a></p><hr><h2 id="解法思路" tabindex="-1"><a class="header-anchor" href="#解法思路"><span>解法思路</span></a></h2><h2 id="golang" tabindex="-1"><a class="header-anchor" href="#golang"><span>Golang</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;fmt&quot;</span></span>
<span class="line">	<span class="token string">&quot;sort&quot;</span></span>
<span class="line">	<span class="token string">&quot;strings&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	strs <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;eat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tea&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tan&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ate&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bat&quot;</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	results <span class="token operator">:=</span> <span class="token function">groupAnagrams</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;results&quot;</span><span class="token punctuation">,</span> results<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暴力求解</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">groupAnagrams</span><span class="token punctuation">(</span>strs <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span></span>
<span class="line">	hasMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> strs <span class="token punctuation">{</span></span>
<span class="line">		splitStr <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span></span>
<span class="line">		sort<span class="token punctuation">.</span><span class="token function">Strings</span><span class="token punctuation">(</span>splitStr<span class="token punctuation">)</span></span>
<span class="line">		sortStr <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>splitStr<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span></span>
<span class="line">		hasMap<span class="token punctuation">[</span>sortStr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>hasMap<span class="token punctuation">[</span>sortStr<span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	returnVal <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> hasMap <span class="token punctuation">{</span></span>
<span class="line">		returnVal <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>returnVal<span class="token punctuation">,</span> v<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">return</span> returnVal</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>JavaScript</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">var</span> <span class="token function-variable function">groupAnagrams</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> hasMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> el <span class="token operator">=</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> splitStr <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    splitStr <span class="token operator">=</span> splitStr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> sortStr <span class="token operator">=</span> splitStr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasMap<span class="token punctuation">[</span>sortStr<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      hasMap<span class="token punctuation">[</span>sortStr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      hasMap<span class="token punctuation">[</span>sortStr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>el<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">let</span> returnVal <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> hasMap<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>hasMap<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> el <span class="token operator">=</span> hasMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      returnVal<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> returnVal<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 代码执行块</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> strs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;eat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tea&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;nat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bat&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">groupAnagrams</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const u=s(e,[["render",o]]),r=JSON.parse('{"path":"/coder/leetcode/groupAnagrams.html","title":"字母异位词分组 (groupAnagrams)","lang":"zh-CN","frontmatter":{"permalink":"/coder/leetcode/groupAnagrams.html","description":"字母异位词分组 (groupAnagrams) https://leetcode.cn/problems/group-anagrams 解法思路 Golang JavaScript","head":[["meta",{"property":"og:url","content":"https://mo7.cc/coder/leetcode/groupAnagrams.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"字母异位词分组 (groupAnagrams)"}],["meta",{"property":"og:description","content":"字母异位词分组 (groupAnagrams) https://leetcode.cn/problems/group-anagrams 解法思路 Golang JavaScript"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-04T16:26:27.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-04T16:26:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字母异位词分组 (groupAnagrams)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-04T16:26:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"]]},"git":{"createdTime":1732683764000,"updatedTime":1743783987000,"contributors":[{"name":"墨七","username":"","email":"meichangliang@outlook.com","commits":6}]},"readingTime":{"minutes":0.08,"words":25},"filePathRelative":"coder/leetcode/字母异位词分组/README.md","localizedDate":"2024年11月27日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/group-anagrams\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://leetcode.cn/problems/group-anagrams</a></p>\\n<hr>\\n<h2>解法思路</h2>\\n<h2>Golang</h2>\\n<div class=\\"language-go line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"go\\"><pre><code><span class=\\"line\\"><span class=\\"token keyword\\">package</span> main</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">(</span></span>\\n<span class=\\"line\\">\\t<span class=\\"token string\\">\\"fmt\\"</span></span>\\n<span class=\\"line\\">\\t<span class=\\"token string\\">\\"sort\\"</span></span>\\n<span class=\\"line\\">\\t<span class=\\"token string\\">\\"strings\\"</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">\\tstrs <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">\\"eat\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"tea\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"tan\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"ate\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"nat\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"bat\\"</span><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">\\tresults <span class=\\"token operator\\">:=</span> <span class=\\"token function\\">groupAnagrams</span><span class=\\"token punctuation\\">(</span>strs<span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"results\\"</span><span class=\\"token punctuation\\">,</span> results<span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">// 暴力求解</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">groupAnagrams</span><span class=\\"token punctuation\\">(</span>strs <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">\\thasMap <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">map</span><span class=\\"token punctuation\\">[</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">\\t<span class=\\"token keyword\\">for</span> <span class=\\"token boolean\\">_</span><span class=\\"token punctuation\\">,</span> v <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">range</span> strs <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">\\t\\tsplitStr <span class=\\"token operator\\">:=</span> strings<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Split</span><span class=\\"token punctuation\\">(</span>v<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">\\t\\tsort<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Strings</span><span class=\\"token punctuation\\">(</span>splitStr<span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">\\t\\tsortStr <span class=\\"token operator\\">:=</span> strings<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Join</span><span class=\\"token punctuation\\">(</span>splitStr<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">\\t\\thasMap<span class=\\"token punctuation\\">[</span>sortStr<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">append</span><span class=\\"token punctuation\\">(</span>hasMap<span class=\\"token punctuation\\">[</span>sortStr<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> v<span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">\\t<span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">\\treturnVal <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">\\t<span class=\\"token keyword\\">for</span> <span class=\\"token boolean\\">_</span><span class=\\"token punctuation\\">,</span> v <span class=\\"token operator\\">:=</span> <span class=\\"token keyword\\">range</span> hasMap <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">\\t\\treturnVal <span class=\\"token operator\\">=</span> <span class=\\"token function\\">append</span><span class=\\"token punctuation\\">(</span>returnVal<span class=\\"token punctuation\\">,</span> v<span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">\\t<span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">\\t<span class=\\"token keyword\\">return</span> returnVal</span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{u as comp,r as data};
