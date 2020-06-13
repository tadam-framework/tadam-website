## Simple route

Inside **urls.clj** you can find an example where 2 routes are declared and linked to their respective views.

If you want to **add new routes** you should **follow 4 steps**.

1. Import the View.
2. Use or create a group of Routes.
3. Define the routes with View.
4. Add your group to the set of all routes (Optional, only if it does not exist). You should always leave at the end **resources-routes**, are used for static content.


``` clojure
(ns myproject.urls
  (:require
   [compojure.core :refer [defroutes GET]]
   [compojure.route :as route]
   ;; 1) Import View
   [myproject.views.public :as view-public]))

;; 2) Set group routes, in the example it is called "public"
(defroutes public
  ;; 3) Add routes
  (GET "/" [] view-public/index)
  (GET "/FAQ" [] view-public/faq)
  (GET "/about" [] view-public/about))


(defroutes resources-routes
  ;; Resources (statics)
  (route/resources "/")
  (route/not-found view-public/page-404))

;; 4) Add your group of routes to all of them.
(def all-routes
  ;; Wrap routers. "resources-routes" should always be the last.
  (compojure.core/routes public resources-routes))
```

## Parameters

In the following example we have **routes that require different parameters**.

``` clojure
(defroutes public
  (GET "/" [] view-public/index)
  (GET "/blog/:id" [id] view-public/blog)
  (GET "/auth/activate-account/:token/:email/" [token email] view-auth/activate-account))
```

In the **View**, the variables are collected as follows.

``` clojure
(defn activate-account
  "Activate account"
  [req]
  (let [token (-> req :params :token)
        email (-> req :params :email)]
    ;; Your magic code
    (redirect req "/auth/login/")))
```

## Avoiding repetition

At some point you will need to have a prefix for the routes.

``` clojure
(defroutes user-routes
    (GET "/user/auth/login" [] ...)
    (GET "/user/auth/signup" [] ...)
    (GET "/user/auth/recovery-password" [] ...))
```

To avoid this you can use a context.

``` clojure
(defroutes user-routes
  (context "/user/auth" []
    (GET "/login" [] ...)
    (GET "/signup" [] ...)
    (GET "/recovery-password" [] ...)))
```
