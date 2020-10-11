If you want to send emails before you must update the configuration variables in **config.yaml**.

Add the following.

``` yaml
smtp-from: "no-reply@domain.com"
smtp-host: "smtp.domain.com"
smtp-user: "user"
smtp-password: "password"
smtp-port: 587
smtp-tls: true
```

Then all you have to do is use **send-email**.


``` clojure
(send-email [config] [recipient email] [subject] [message HTML] [message plain])
```

Example:


``` clojure
(ns myproject.views.my-view
  (:require
   [myproject.config :refer [config]
   [tadam.responses :refer [response]]
   [tadam.email :refer [send-email]]))

(defn send-message
  ;; View Send email
  [req]
    ;; Send email
    (send-email config "client@email.com" "My subject" "<h1>Title</h1><p>Content</p>" "Title\nContent")

    ;; Response OK
    (response req "Send!!!!"))
```

You can do this easily by customizing the HTML or plain text with **render-template**.

``` clojure
(ns myproject.views.my-view
  (:require
   [myproject.config :refer [config]
   [tadam.responses :refer [response]]
   [tadam.templates :refer [render-template]]
   [tadam.email :refer [send-email]]))

(defn send-message
  ;; View Send email
  [req]
    (let [params {:name "Houdini"
                  :born 1874}]
    ;; Send email
    (send-email config 
         "client@email.com" 
         "My subject" 
         (render-template "emails/contact.html" params)
         (render-template "emails/contact.txt" params))

    ;; Response OK
    (response req "Send!!!!")))
```
