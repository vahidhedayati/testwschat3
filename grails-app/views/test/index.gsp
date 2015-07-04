
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'aa.label', default: 'aa')}" />
		<title><g:message code="default.create.label" args="[entityName]" /></title>
	</head>
	<body>

<g:form action="index2">
<label>Chat username</label><g:textField name="username"/>
<label>Choose Chat room style</label><g:select name="chatType" from="${selectMap}" optionKey="key" optionValue="value" />
<g:submitButton name="submit" value="go" />
</g:form>

</body>
</html>
