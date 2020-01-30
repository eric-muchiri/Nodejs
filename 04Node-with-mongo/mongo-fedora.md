# Installing Mongo on fedora

__Configure dnf repository__

```bash
sudo vi /etc/yum.repos.d/mongodb.repo
```
__Add the content__

```vi
[Mongodb]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
```

__Install Mongo__
`sudo dnf install mongodb-org`

__Start Mongo as a service__
`sudo systemctl enable mongod.service`
`sudo systemctl start mongod.service`

__Check version__
`mongod --version`

__Connect to the shell__
`Mongo`