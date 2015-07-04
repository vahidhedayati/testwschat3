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
}
