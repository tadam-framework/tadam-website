### Systemctl

Service creation on Linux is the same as for any Java application. You can see an example below.

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
