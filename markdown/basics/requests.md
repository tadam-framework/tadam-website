## Params

### GET

From the following URL we can capture the variable **query**.

``` shell
curl https://mydomain.com/?query=Tadam
```

``` clojure
(-> req :params :query)
;; Tadam
```

### POST

Capturing a parameter by POST is like GET.

``` shell
curl --data "query=Tadam" https://mydomain.com/
```

``` clojure
(-> req :params :query)
;; Tadam
```

If you need to know if you are receiving the POST method you can use:

``` clojure
(ns myproject.views.myview
  (:require [tadam.utils :refer [is-post]]))

(is-post req)
;; true or false
```

### JSON

A small utility can be used to obtain the parameters of a JSON.

``` shell
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"query": "Tadam","page": 1}' \
  https://mydomain.com/
```
      
``` clojure
(ns myproject.views.myview
  (:require [tadam.utils :refer [get-JSON]]))

(get-JSON req)
;; {:query "Tadam" :page 1} 
```

