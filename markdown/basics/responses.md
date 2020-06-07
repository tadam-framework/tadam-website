When used in a View the **(render-HTML)** function, or any other [template](#templates) element, it is not necessary to **specify the request**. In case you need to customize it you have a helper.

``` clojure
(response [req] [body] [status] [content-type]))
```

At least the **request** and the **body** must be indicated.

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.responses :refer [response]]))

(defn index
  ;; View HTML
  [req]
  (response req "Hi Tadam"))
```

Return to browser.

``` shell
HTTP/1.1 200 OK
Content-Type: text/html;charset=utf-8

Hi Tadam
```

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

Return to browser.

``` shell
HTTP/1.1 201 OK
Content-Type: text/xml;charset=utf-8

<?xml version="1.0"?> <Name> Tadam </Name>
```

## Redirect

To make a redirect in your View you have within **responses** the utility **redirect**.

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

If he's not told otherwise, he'll use **status 303** (See Other).

If you **need another** one, such as 301, you can customize the **argument status**.

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.responses :refer [redirect]]))

(defn index
  ;; View HTML
  [req]
  (redirect req "/blog/tadam-is-magic/" 301))
```

Also **redirect-permanent** in case you want to use the **308 state directly**, although it can also be done like the previous examples.

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
