import grails.plugin.wschat.ChatAI
import grails.plugin.wschat.ChatBadWords

class BootStrap {

    def init = { servletContext ->
		//testing variation for most relevance picking
		ChatAI.findOrSaveWhere(input:'contact number', output: '0800 123456' )
		ChatAI.findOrSaveWhere(input:'opening hours', output: 'Opening hours are 9 - 5' )
		ChatAI.findOrSaveWhere(input:'opening days', output: 'Opening days are Mon-Fri' )
		ChatAI.findOrSaveWhere(input:'opening person', output: 'Opening person is Sam' )
		ChatAI.findOrSaveWhere(input:'opening person drives', output: 'Some car' )
		ChatAI.findOrSaveWhere(input:'opening hours on a sunday', output: 'Not open on sunday' )
		ChatAI.findOrSaveWhere(input:'weekdays', output: 'Do you mean which days are week days? This would be Monday to Friday' )
		
	//	ChatAI.findOrSaveWhere(input:'kickbot', output: 'close_connection' )
		
		ChatBadWords.findOrSaveWhere(input:'poo', output: '/kickuser' )
		//minutes months hours years days
		ChatBadWords.findOrSaveWhere(input:'pants', output: '/banuser', duration: 1  ,period: 'minutes')
		ChatBadWords.findOrSaveWhere(input:'bastard', output: '/banuser', duration: 1  ,period: 'months')
		
		
    }
    def destroy = {
    }
}

