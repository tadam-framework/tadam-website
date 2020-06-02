The views are used to include the logic of each route.

In this example, an HTML template is rendered.

``` clojure
(defn index
  ;; View HTML
  [req]
    (render-HTML req "public/welcome.html" {}))
```

In the following example, a simple JSON is printed.

``` clojure
(defn api
  ;; View JSON
  [req]
    (render-JSON req {:result true}))

;; { "result": true }
```

You can see more in [Responses](#responses).
