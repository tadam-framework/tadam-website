When you generate your project you will find the following structure.

``` shell
config.yaml
project.clj
README.md
resources/
    public/
        css/
            main.css
        img/
            tadam.svg
        js/
            main.js
    templates/
        layouts/
            base.html
        public/
            404.html
            welcome.html
src/
    myproject/
        views/
            public.clj
        config.clj
        core.clj
        urls.clj
```

Let's see the description of the relevant sections.

## Root

| Name | Type | Description |
| --- | --- | --- |
| config.yaml | File | The configuration of your application, to which you can add all the **variables you need**. By default you will find **domain**, **debug** and **port**. You can see more information in [Configuration] (#configuration) |
| project.clj | File | Clojure configuration. Add as many libraries as you need. |
| README.md | File | Example of README.md file for your project. |

## Resources folder

Everything related to the template system or static files (javascript, images, styles...).

| Name | Type | Description |
| --- | --- | --- |
| public | Folder | Static material. |
| templates | Folder | Templates HTML. |
| templates/layouts/base.html | File | Example of a template that will contain all the structure that will not change between pages, such as the header or footer. |
| templates/public/welcome.html | File | Sample HTML page. |

## src folder

Source code in Clojure, the heart of the beast. System of routes, views, business logic...

| Name | Type | Description |
| --- | --- | --- |
| views/ | Folder | The views are invoked by the urls.clj . When a route is visited, a function within the appropriate view is called. |
| views/public.clj | File | Example of a public view. In the future it should grow with other private, management, identification or APIs. |
| config.clj | File | Place to store the configuration. You can configure as many variables as you need or add them as root in config.yaml |
| core.clj | File | First file to be executed in your application. It must have the minimum to start. |
| urls.clj | File | Routes of your website. |
