HTML templates can be rendered **raw**, **using parameters** or in different **layouts**. It is also possible to return **Markdown** or **JSON**.

All templates should be in **/resources/templates/**.

The syntax is inspired by Django. It is created by [Selmer](https://github.com/yogthos/Selmer), you can refer to its documentation on more advanced topics like loops or filters.

## HTML

Let's say you have an HTML template at **/resources/templates/theater.html**.

``` django
<!DOCTYPE html>
<html>
    <body>
        Olympia Theatre
    </body>
</html>
```

In this case, you just need to use the **render-HTML** function.

``` clojure
(render-HTML [request] [path] [args]))
```

Example:

``` clojure
;;;; View web
(ns myproject.views.my-view
  (:require
    [tadam.templates :refer [render-HTML]]))

(defn index
  ;; View HTML
  [req]
  (render-HTML req "theatre.html" {}))
```

## HTML with params

Now, suppose you have an HTML template at **/resources/templates/theater.html**.

``` django
<!DOCTYPE html>
<html>
    <body>
         <p>The {{ name }} Theatre was founded in {{ opened }} and currently has {{ surface }} seats.</p> 
    </body>
</html>
```

The View will be similar to the previous example, but with the indication of its parameters.

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.templates :refer [render-HTML]]))

(defn index
    ;; View HTML
    [req]
    (render-HTML req "theatre.html" {
    :name "Olympia"
    :opened 1915
    :surface 500
    }))
```

As a result, the request is returned.

``` django
<!DOCTYPE html>
<html>
    <body>
         <p>The Olympia Theatre was founded in 1915 and currently has 500 seats.</p> 
    </body>
</html>
```

## HTML in layout

If you need to **repeat the same HTML structure**, you can **extend the template** or define which part will change on each HTML page in the layout.

Let's create a template at **/resources/templates/layouts/base.html**, which will be our reference for generating new ones. It will contain all the repeating parts like header, footer, navigation, etc. Then we define where **blocks** should be added, which will be different on every page.

``` django
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/css/main.css">
    <script src="/js/main.js"> </script>
    <title>{% block title %}{% endblock %} | Olympia Theatre</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Welcome</a></li>
                <li><a href="/programme">Programme</a></li>
            </ul>
        </nav>
    </header>
    <main>
        {% block content %}{% endblock %}
    </main>
    <footer>
        More information in our newsletter
    </footer>
</body>
</html>
```

Now it's time to define a page that will extend **base.html** as a new template **/resources/templates/public/welcome.html**.

``` django
{% extends "layouts/base.html" %}

{% block title %}
Welcome
{% endblock %}

{% block content %}
<h1 class="title-welcome">Welcome to Olympia Theatre</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. Qui bonum omne in virtute ponit, is potest dicere perfici beatam vitam perfectione virtutis; Ecce aliud simile dissimile. </p>
{% endblock %}
```

The result:

``` django
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/css/main.css">
    <script src="/js/main.js"> </script>
    <title>Welcome | Olympia Theatre</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Welcome</a></li>
                <li><a href="/programme">Programme</a></li>
            </ul>
        </nav>
    </header>
    <main>
      <h1 class="title-welcome">Welcome to Olympia Theatre</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. Qui bonum omne in virtute ponit, is potest dicere perfici beatam vitam perfectione virtutis; Ecce aliud simile dissimile. </p>
    </main>
    <footer>
        More information in our newsletter
    </footer>
</body>
</html>
```

## Markdown

You can use Markdown files to convert to HTML.

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.templates :refer [render-markdown]]))

(render-markdown req "theatre.md" {})
```

## JSON

A function to convert collections to JSON is also available.

``` clojure
(render-JSON [request] [collection]))
```

Example

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.templates :refer [render-JSON]]))


(render-JSON req {:name "Olympia" :surface 500 :opened 1915})
```

It returns neat JSON with the correct header.

``` json
{
  "name": "Olympia",
  "surface": 500,
  "opened": 1915
}
```

## Render templates to string

In certain circumstances, it is necessary to **render HTML templates to obtain a string**, for example when we want to prepare content to send an [email](#email) or save it to a file.

``` clojure
(render-template [path template] [collection])
```

Example

``` clojure
(ns myproject.views.my-view
  (:require
   [tadam.templates :refer [render-template]]))

(render-template "public/template.html" {:name "Olympia" :surface 500 :opened 1915})
```
