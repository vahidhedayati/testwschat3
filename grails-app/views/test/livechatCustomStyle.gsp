<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'test.label', default: 'testpage')}" />
		<title>Example custom live chat</title>
	</head>
	<body>
	<!--  customising the css styles of client live chat screen -->
	<chat:liveChat user="${params.user?:'test'}" roomName="${params.room?:'test' }"
		inactiveLCTitle="${["background":"#0000ff","color":"yellow"]}" 
		inactiveLCBody="${["background":"red","color":"green"]}"
		activeLCTitle="${["background":"orange","color":"black"]}"
		activeLCBody="${["background":"white","color":"black"]}"
	/>
</body>
</html>
