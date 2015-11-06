
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'aa.label', default: 'aa')}" />
		<title>Example custom live chat</title>
	</head>
	<body>


<chat:monitorliveChat user="test" roomName="admin"/>
</body>
</html>
