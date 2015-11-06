package testwschat

import grails.converters.JSON
import grails.web.JSONBuilder
import groovy.json.JsonBuilder

class TestController {

	def server() { }
	
	def client() { }
	
    def index() { 
		Map selectMap = ['usermenu':'default (as per plugin)','webrtcav':'webrtc AV only options', 'webrtcscreen':'screen share options only', 
			'fileonly':'display file interaction only', 'webcam':'web cam only', 'none':'no AV options' ]
		render view: 'index', model: [selectMap:selectMap]
	}
	def index2() { 
		println "--- $params"
	}
	def newPage() {}
	def eventPage() {
		def myJson = new JsonBuilder()
		myJson {
				delegate.clearPage "true"
				delegate.myProcess "default"
		}

		[myJson: myJson]

	}
	def eventPage2() {
		

	}
	
	def livechat() { 
		
	}
	def livechat2() {
		//List colours=['blackyellow','redblack','blackred', 'orangeblack','whiteblack']
		Map colours=[:]
		colours.blackyellow=["background":"black","color":"yellow"]
		colours.redblack=["background":"red","color":"black"]
		
		colours.blackred=["background":"black","color":"red"]
		colours.orangeblack=["background":"orange","color":"black"]
		colours.whiteblack=["background":"white","color":"black"]
		[colours:colours]
		
	}
	def livechat3() {
		Map colours=[:]
		colours.blackyellow=["background":"black","color":"yellow"]
		colours.redblack=["background":"red","color":"black"]
		colours.blackred=["background":"black","color":"red"]
		colours.orangeblack=["background":"orange","color":"black"]
		colours.whiteblack=["background":"white","color":"black"]
		
		def inactiveLCTitle=colours."${params.inactiveLCTitle}"
		def inactiveLCBody=colours."${params.inactiveLCBody}"
		def activeLCTitle=colours."${params.activeLCTitle}"
		def activeLCBody=colours."${params.activeLCBody}"
		println "params are ${params}"
		[colours:colours, activeLCBody:activeLCBody, activeLCTitle:activeLCTitle,inactiveLCBody:inactiveLCBody,inactiveLCTitle:inactiveLCTitle]
	}
	def livechatCustomStyle() {
	}
	
	def monitorLiveChat() {
		
	}
}
