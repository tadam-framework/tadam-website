By default there’ll be a **config.yaml** file like the one below.

``` yaml
domain: "http://localhost"
debug: true
port: 7404
```

- **domain**: Defines the domain of your application (http://example.com). If you’re running locally or have a reverse proxy, there’s no need to change it.
- **debug**: If true, then automatic code refreshes are enabled and CORS is ignored. Otherwise, it is assumed that you are in a production environment and CORS is blocked based on the domain.
- **port**: Port to use.

Feel free to add as many variables as you need.

For example, let's **create a wizard variable and use it**.

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