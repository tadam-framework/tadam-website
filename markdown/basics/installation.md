## 1. Make sure you have **Openjdk** or **Oracle-jdk** installed.

### Debian/Ubuntu

``` shell
sudo apt install default-jdk
```

### Mac OS

``` shell
brew install openjdk
```

## 2. Install **Clojure** and **Leiningen**.

### Debian/Ubuntu

``` shell
sudo apt install clojure leiningen
```

### Mac OS

``` shell
brew install clojure/tools/clojure leiningen
```

## 3. Create a 🎩Tadam🎩 project.

``` shell
lein new tadam-lite myproject
```

## 4. Run.

``` shell
cd myproject
lein run
```

Great 🎉! 🔥 Your own web server 🔥 is up and running!

Now open your browser.

``` shell
localhost:7404
```
