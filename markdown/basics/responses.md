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
