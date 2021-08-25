When using the **(render-HTML)** function or any other [template](#templates) element in a view, there is no need to **specify a request**. Provided you need to customize it, you have an assistant.

``` clojure
(response [req] [body] [status] [content-type]))
```

At least, **request** and **body** must be specified.

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.responses :refer [response]]))

(defn index
  ;; View HTML
  [req]
  (response req "Hi Tadam"))
```

Back to the browser.

``` shell
HTTP/1.1 200 OK
Content-Type: text/html;charset=utf-8

Hi Tadam
```
>>>It can also be customized with **status** and **content-type **.
Although it can be customized with **status** and **content-type**.

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.responses :refer [response]]))

(defn index
  ;; View HTML
  [req]
  (response req "<?xml version="1.0"?>
    <Name>
        Tadam
    </Name>" 201 "text/xml;charset=utf-8"))
```

Back to the browser.

``` shell
HTTP/1.1 201 OK
Content-Type: text/xml;charset=utf-8

<?xml version="1.0"?> <Name> Tadam </Name>
```

## Redirect

To make a redirect in your view, you have a **redirect** utility inside **responses**.

``` clojure
(redirect [req] [url] [status]))
```

Example:

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.responses :refer [redirect]]))

(defn index
  ;; View HTML
  [req]
  (redirect req "/contact/"))
```

Unless otherwise specified, **status 303** will be used (see "Other").

If you **need a different status** like 301, you can customize the **argument status**.

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.responses :refer [redirect]]))

(defn index
  ;; View HTML
  [req]
  (redirect req "/blog/tadam-is-magic/" 301))
```

You can also use **redirect-permanent** if you want to get the **308 status directly**, although this can be done in the same way as in the previous examples.

``` clojure
(redirect-permanent [req] [url]))
```

Example:

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.responses :refer [redirect-permanent]]))

(defn index
  ;; View HTML
  [req]
  (redirect-permanent req "/blog/tadam-is-magic/"))
```
