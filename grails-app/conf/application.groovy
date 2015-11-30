wschat.enableSecurity='true'
// Added by the Spring Security Core plugin:
grails.plugin.springsecurity.userLookup.userDomainClassName = 'grails.plugin.wschat.ChatAuth'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'grails.plugin.wschat.ChatAuthChatRole'
grails.plugin.springsecurity.authority.className = 'grails.plugin.wschat.ChatRole'
//grails.plugin.springsecurity.securityConfigType = "Annotation"
grails.plugins.springsecurity.securityConfigType = 'InterceptUrlMap'
grails.plugin.springsecurity.successHandler.defaultTargetUrl = '/wschat'
grails.plugin.springsecurity.successHandler.alwaysUseDefault = true
grails.plugin.springsecurity.controllerAnnotations.staticRules = [
        '/error':           ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/index':           ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/index.gsp':       ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/shutdown':        ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/assets/**':       ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/**/js/**':        ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/**/css/**':       ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/**/images/**':    ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/**/favicon.ico':  ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/wsChat/**':       ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/wsChatAdmin/**':       ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/wsCamEndpoint/**':		['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/wsChatEndpoint/**':		['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/wsChatFileEndpoint/**':	['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/TicTacToeServer/**':		['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/wsCamEndpoint':		['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/wsChatEndpoint':		['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/wsChatFileEndpoint':	['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/TicTacToeServer':		['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/dbconsole/**':       ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/test/**':       ['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/ChatClientEndpoint/**':	['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/WsChatClientEndpoint/**':	['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/ChatClientEndpoint':	['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/WsChatClientEndpoint':	['IS_AUTHENTICATED_ANONYMOUSLY'],
        '/**':        ['IS_AUTHENTICATED_ANONYMOUSLY']
]


wschat.defaultperm='admin'
wschat.rooms = ['fred','smith','room3']
wschat.showtitle="no"
wschat.hostname='localhost:8080'
boselecta.hostname = 'localhost:8080'
boselecta.appName = 'no'
//wschat.hostname='192.168.1.196:8080'
stunServers { iceServers=[ [url: 'stun:stun.l.google.com:19302'] ] }
wschat.send.leftroom='yes'
wschat.send.joinroom='yes'
wschat.frontenduser='_frontend'
wschat.storeForFrontEnd=true
wschat.dbstore=true
wschat.dbsupport='yes'
wschat.dbstore_pm_messages=true
wschat.dbstore_room_messages=true
wschat.debug='true'

wschat.dbstore_user_messages=true


wschat.liveChatAssistant='assistant' // the chat client assistant name.. so if userx requests chat .. userx_assistant = this what this is .
wschat.liveChatPerm='admin'  // this is the group of users that livechat belongs to and if those uses have an email address in profile they will also be emailed
wschat.liveContactEmail='youremail@gmail.com' // this is the hard coded live chat email
wschat.liveChatUsername='masterv'  // this is the nickname upon them joining a live request
wschat.liveContactName='Mr V'  // this is the person that email title is set to
wschat.emailFrom="me@domain.com"  //this is for sending emails
wschat.store_live_messages=true  // store records of offline messaging
wschat.enable_AI=true  // enable Aritificial Intelligence ? refer to ChatAI.groovy for example and understanding
wschat.liveChatTitle="My Live chat"


//wschat.dbstore_user_messages=true
wschat.addFile='false'
wschat.addGame='false'

wschat.liveChatAskName='true'
wschat.liveChatAskEmail='true'
wschat.enable_Chat_Bot=true
wschat.enable_Chat_AI=true
wschat.enable_Chat_BadWords=true
