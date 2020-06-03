HTML templates can be displayed in **raw**, rendered **using parameters** or different **layouts**. On the other hand it is also possible to return **Markdown** or **JSON**.

All templates should be located in **/resources/templates/**.

Most commonly used in views, but can be invoked anywhere.

## HTML

``` clojure
[tadam.templates :refer [render-HTML render-JSON render-404]]

(render-HTML req "theatre.html" {})
```

## HTML with params

``` clojure
(render-HTML req "theatre.html" {
    :name "Olympia"
    :surface 500
    :opened 1915
    })
```

## HTML in layout


## Markdown

``` clojure
[tadam.templates :refer [render-markdown]]

(render-markdown req "theatre.md" {})
```

## JSON

``` clojure
[tadam.templates :refer [render-JSON]]

(render-JSON req {
    :name "Olympia"
    :surface 500
    :opened 1915
    })
```

It will return a nice JSON with the right header.

``` json
{
  "name": "Olympia",
  "surface": 500,
  "opened": 1915
}
```
