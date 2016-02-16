###testwschat3wss project

basically all that is enabled in application.groovy that is different to a typical app:


The address is now 8443 I am using siteProtocol a new config variable and setting it to https and setting wsProtocol to wss.

You must disable bot for ssl to work as shown on last line

```groovy
wschat.hostname='localhost:8443'
wschat.wsProtocol='wss'
wschat.siteProtocol='https'
wschat.enable_Chat_Bot=false
```


Bot should work https://github.com/vahidhedayati/grails-wschat-plugin/wiki/ssl-stuff . I could not get local ssl with grails dev mode to work. With your own ssl just follow the stuff on this page and ensure it all works as per usual then you may find you can also use the bot. A pragmaticEndPoint was added for client connections but I could not test it for now..
