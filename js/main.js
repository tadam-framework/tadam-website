// Imports
import hljs from 'highlight.js/lib/core';
import shell from 'highlight.js/lib/languages/shell';
import clojure from 'highlight.js/lib/languages/clojure';

// Load languages highlight
hljs.initHighlightingOnLoad();
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('clojure', clojure);
hljs.registerLanguage('yaml', clojure);
