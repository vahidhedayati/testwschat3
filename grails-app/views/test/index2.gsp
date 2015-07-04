
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'aa.label', default: 'aa')}" />
		<title><g:message code="default.create.label" args="[entityName]" /></title>
	</head>
	<body>


Loaded : ${params.chatType}.js <br/>
<pre>
&lt;chat:includeAllStyle
addLayouts="true"   //optional default is true can be true or "$\{true}"
jquery="true"  //optional default is true can be true or "$\{true}"
jqueryui="true"  //optional default is true can be true or "$\{true}"
bootstrap="true"  //optional default is true can be true or "$\{true}"
 /&gt;
 
&ltchat:connect 
 chatuser="${params.username}"     // required user
 usermenujs="${params.chatType}.js"  //optional not set will default to plugin 
 profile="[email: '${params.username}2@example.com']"   //optional - if you wish to create user details as well
 /&gt

</pre>

<chat:includeStyle
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

-
</body>
</html>
