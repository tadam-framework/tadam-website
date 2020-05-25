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

Let's see the description of each section.

| Name | Type | Description |
| --- | --- | --- |
| config.yaml | File | The configuration of your application, to which you can add all the **variables you need**. By default you will find **domain**, **debug** and **port**. You can see more information in [Configuration](#configuration) |
