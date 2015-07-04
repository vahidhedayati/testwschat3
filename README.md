# testwschat
demo site - holding a demonstration of grails wschat plugin 

### Customised chat menus for your chat users:
[index.gsp](https://github.com/vahidhedayati/testwschat/tree/master/grails-app/views/test/index.gsp)
```gsp
<g:form action="index2">
<label>Chat username</label><g:textField name="username"/>
<label>Choose Chat room style</label><g:select name="chatType" from="${selectMap}" optionKey="key" optionValue="value" />
<g:submitButton name="submit" value="go" />
</g:form>
```

[Controller for index:](https://github.com/vahidhedayati/testwschat/blob/master/grails-app/controllers/testwschat/TestController.groovy)
```groovy
def index() { 
		Map selectMap = ['usermenu':'default (as per plugin)','webrtcav':'webrtc AV only options', 'webrtcscreen':'screen share options only', 
			'fileonly':'display file interaction only', 'webcam':'web cam only', 'none':'no AV options' ]
		render view: 'index', model: [selectMap:selectMap]
	}
```

[View for index2:](https://github.com/vahidhedayati/testwschat/blob/master/grails-app/views/test/index2.gsp)
```gsp
<chat:includeAllStyle
addLayouts="true"
jquery="true"
jqueryui="true"
bootstrap="true"
 />

 <chat:connect 
 chatuser="${params.username}"
 usermenujs="${params.chatType}.js"
 profile="[email: '${params.username}2@example.com']" 
 />
```

[chatTypes which are Javascripts can be found here](https://github.com/vahidhedayati/testwschat/tree/master/grails-app/assets/javascripts)

This now loads in a specific style of menus for the end chat user, you can customise further
 
```
wschatjs="${params.wschatjs}.js"
```

Pass in wschatjs="something" to override plugin main core wschat.js functionality in your local code. The jquery, addLayouts jqueryui bootstrap have now been added as a new functionality that you can use in <chat:includeStyle or <chat:includeAllStyle - by default their all true you can either set them as ${false} or 'false' to disable a given set of core scripts. This is since you may have your own bootstrap or jquery-ui etc already built in. In which case you would use <chat:includeStyle ... If you wanted to overrider your grails application look feel then use <chat:includeAllStyle. 



# eventPage and eventPage2 gsps and server / client gsps.

These are for client / server messaging. Log in to your chat with a username of cc 

Then goto eventPage on one browser screen followed by another screen to eventPage2 - you will see first page update with stuff

Same with server / client gsps first goto server then open another page to client.

These are slightly different examples with eventPage being far superior for event messaging. using the chat room to decoy messages between each other.
(these could be machines connecting to chat room and triggering upon events something else)

	
