Views are used to include the logic of each route.

This example renderes an HTML template.

``` clojure
(defn index
  ;; View HTML
  [req]
    (render-HTML req "public/welcome.html" {}))
```

The following example prints simple JSON.

``` clojure
(defn api
  ;; View JSON
  [req]
    (render-JSON req {:result true}))

;; { "result": true }
```

You can see more in [Responses](#responses).
