## Simple

``` clojure
(response req body status content-type))
```

Example

``` clojure
(ns myproject.views.my-view
  (:require
    [tadam.responses :refer [response]]))

)
(defn index
  ;; View HTML
  [req]
  (response req "Hi Tadam"))

```

Return to browser

``` shell
```

## Redirect
