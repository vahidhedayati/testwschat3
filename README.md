Getting it to work in production


### Installing mysql
```
#Centos/Redhat/Fedora
yum install mysql mysql-server
#Ubuntu/Debian/Mint etc
apt-get install  mysql-server
/etc/init.d/mysqld start
mysqladmin create chat
mysql -u root -p  # or mysql
grant usage on chat.* to chatdbuser@localhost identified by 'wooha';
grant all privileges on chat.* to chatdbuser@localhost;

exit
```

##configuring your mysql configuration in your app

1. add mysql dependency add to build.gradle:
```
 runtime 'mysql:mysql-connector-java:5.1.20'
```

2. configure your db in application.yml so replace exisiing block with something like this
```
dataSource:
    pooled: true
    jmxExport: true
    driverClassName: com.mysql.jdbc.Driver
    username: chatdbuser
    password: wooha

environments:
    development:
        dataSource:
            dbCreate: update
            url: jdbc:mysql://localhost:3306/chat?autoReconnect=true
    test:
        dataSource:
            dbCreate: update
            url: jdbc:h2:mem:testDb;MVCC=TRUE;LOCK_TIMEOUT=10000;DB_CLOSE_ON_EXIT=FALSE
    production:
        dataSource:
            dbCreate: update
            url: jdbc:mysql://localhost:3306/chat?autoReconnect=true

```
### try running app in dev moce
```ew
grails run-app
```
does it now work via db ?  great..


### Installing on tomcat.

Download tomcat 7/8
```
unzip tomcat

cd webapps

mv ROOT ROOT.OLD
```

Back in your app do
```
grails war
```
once done

```
cp build/libs/testwschat3-0.1.war /path/to/tomcat/webapps/ROOT.war
```

Back in tomcat
 ```
cd bin/

./startup.sh && tail -f ../logs/catalina.out
 ```

 Once started goto browser https://localhost:8080 it shold be working.




# testwschat3wss
