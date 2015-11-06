
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'aa.label', default: 'aa')}" />
		<title>Example custom live chat</title>
	</head>
	<body>


This is an example of creating your own custom live chat button and making a call to the actual tag lib and bypassing the &lt;chat:customerChatButton user="somenewuser2"/&gt; call provided by the plugin:


To create your own button you can either use the above content of the code to make your own button, the problem with above is that the call is passed to the controller and it passes through action controller roomname and username to it.

These are all modifiable by the web user and when you call the taglib this is what the produced button does. 

<br><br>

<textarea cols="65">
&lt;div id="chatReturn"&gt;&lt;/div&gt;
&lt;button onclick="runChat()" title="Chat"&gt; Chat&lt;/button&gt;
&lt;script type="text/javascript"&gt;
	function runChat() {
		$.get('${createLink(controller:"wsChat", action: "loadChat")}?user=${bean?.user}&controller=${bean?.controller}&action=${bean?.action}&roomName=${bean?.roomName}', function(e){
			if (e) {
				$('#chatReturn').hide().html(e).fadeIn('slow'); 
			}
			});
 	 }
&lt;/script&gt;
</textarea>
<br><br>
To make your own button 
<br><br>
<textarea cols="65">
&lt;g:if test="${params.chat}"&gt;
	&lt;chat:customerChat user="myuser"/&gt;
&lt;/g:if&gt;
&lt;g:else&gt;
	&lt;g:form name="something"&gt;
		&lt;g:hiddenField name="chat" value="yes"/&gt;
		&lt;g:submitButton name="Chat" value="chat"/&gt;
	&lt;/g:form&gt;
&lt;/g:else&gt;
</textarea>
<br><br>
Example here:
<br><br>
<g:if test="${params.chat}">
we have params
<chat:customerChat user="myuser" />
</g:if>
<g:else>
<g:form name="something" action="livechat">
	<g:hiddenField name="chat" value="yes"/>
	<g:submitButton name="Chat" value="chat"/>
</g:form>
</g:else>
</body>
</html>