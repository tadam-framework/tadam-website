By default you will have a **config.yaml** file like the one below.

``` yaml
domain: "http://localhost"
debug: true
port: 7404
```

- **domain**: Indicate which will be the domain of your application (http://example.com). In case you work locally or have a reverse proxy, it will not be necessary to modify it.
- **debug**: If true, it enables an automatic code refresh and ignores CORS. Otherwise it assumes you are working in production and will block the CORS with respect to the domain.
- **port**: Port you will use.

Feel free to add as many as you need.

For example let's **create the wizard variable and use it**.

### config.yaml

``` yaml
domain: "http://localhost"
debug: true
port: 7404
wizard: Merlin
```

### core.clj

``` clojure
(ns myproject.core
    (:require
     [myproject.config :refer [config]]))
     

(defn -main [& args]
  ;; Main
  (prn (config :wizard)))

" Merlin
```
