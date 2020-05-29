### Systemctl

To create a service in Linux is done like any application in Java. Below you can see an example.

Create a file in the following path: **/etc/systemd/system/tadam-project.service**.

Add the content.

``` shell
[Unit]
Description=Tadam-project
After=network.target

[Service]
Type=simple
Restart=always
WorkingDirectory=/folder/jar/
ExecStart=java -jar tadam-project.jar

[Install]
WantedBy=multi-user.target 
```

Finally enable and start the service.

``` shell
sudo systemctl enable tadam-project
sudo systemctl start tadam-project
```
