// Imports
import hljs from 'highlight.js/lib/core';
import shell from 'highlight.js/lib/languages/shell';
import clojure from 'highlight.js/lib/languages/clojure';
import yaml from 'highlight.js/lib/languages/yaml';
import django from 'highlight.js/lib/languages/django';

// Load languages highlight
hljs.initHighlightingOnLoad();
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('clojure', clojure);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('django', django);
