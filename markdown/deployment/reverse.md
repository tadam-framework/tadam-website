### Nginx

With Nginx it's pretty quick and easy. You can use it as a reverse proxy, since Glosa contains its own web server (Jetty). You can see an example of configuration that can be useful.

``` shell
server {

        server_name tadam.domain.com;

        access_log /var/log/glosa_access.log;
        error_log /var/log/glosa_error.log;

        location / {
            proxy_pass http://localhost:7404/;
            proxy_set_header Host $http_host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_redirect  off;
        }
}
```
