 
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'aa.label', default: 'aa')}" />
		<title>Example custom live chat</title>
	</head>
	<body>

<chat:liveChat user="${params.user}" roomName="${params.room }"
inactiveLCTitle="${inactiveLCTitle}" 
activeLCTitle="${activeLCTitle}"
inactiveLCBody="${inactiveLCBody}"
activeLCBody="${activeLCBody}"
/>

${inactiveLCTitle }  ${inactiveLCTitle.getClass() }
</body>
</html>
