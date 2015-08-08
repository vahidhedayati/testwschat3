import grails.plugin.wschat.ChatAI

class BootStrap {

    def init = { servletContext ->
        ChatAI.findOrSaveWhere(input:'contact number', output: '0800 123456' )
        ChatAI.findOrSaveWhere(input:'opening hours', output: '9 - 5' )
        ChatAI.findOrSaveWhere(input:'kickme', output: 'close_connection' )
    }
    def destroy = {
    }
}
