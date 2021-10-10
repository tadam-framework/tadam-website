### Nginx

Deploying with Nginx is pretty quick and easy. You can use it as a reverse proxy. Below you can see an example configuration that you might find useful.

``` shell
server {

        server_name tadam.domain.com;

        access_log /var/log/myproject_access.log;
        error_log /var/log/myproject_error.log;

        location / {
            proxy_pass http://localhost:7404/;
            proxy_set_header Host $http_host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_redirect  off;
        }
}
```
