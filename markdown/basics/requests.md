## Params

### GET

From the following URL, we can capture the **query** variable.

``` shell
curl https://mydomain.com/?query=Tadam
```

``` clojure
(-> req :params :query)
;; Tadam
```

### POST

Capturing a parameter using POST is similar to GET.

``` shell
curl --data "query=Tadam" https://mydomain.com/
```

``` clojure
(-> req :params :query)
;; Tadam
```

In case you need to know if you are receiving a POST method.

``` clojure
(ns myproject.views.myview
  (:require [tadam.utils :refer [is-post]]))

(is-post req)
;; true or false
```

### JSON

A small utility can be used to get JSON parameters.

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

### HEADERS

In case you need to capture the value of a header.

``` clojure
(ns myproject.views.myview
  (:require [tadam.utils :refer [get-header]]))

(get-header req "Content-Type")
;; "application/json"
```