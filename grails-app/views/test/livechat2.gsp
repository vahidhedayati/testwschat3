
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'aa.label', default: 'aa')}" />
		<title>Example custom live chat</title>
	</head>
	<body>

<br>
<g:form method="post" action="livechat3">
<label>Select username:</label><g:select name="user" from="${['happy_user','sad_user','silly_user'] }"/>
<label>Select Room</label>
<g:select name="room" from="${['happy_room','sad_room','silly_room'] }"/>

<br>
<label>Select Inactive Title style</label>
<g:select name="inactiveLCTitle" from="${colours.entrySet()}"   optionKey="key" optionValue="key" />

<label>Select Inactive Body style</label>
<g:select name="inactiveLCBody" from="${colours.entrySet()}"   optionKey="key" optionValue="key" />

<br>
<label>Select Active Title style</label>
<g:select name="activeLCTitle"from="${colours.entrySet()}"   optionKey="key" optionValue="key" />

<label>Select Active Body style</label>
<g:select name="activeLCBody" from="${colours.entrySet()}"   optionKey="key" optionValue="key" />

	<br>
<g:submitButton name="LiveChat Me There"/>
</g:form>


</body>
</html>
