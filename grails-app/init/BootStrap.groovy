import grails.plugin.wschat.*

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

	//  ChatAI.findOrSaveWhere(input:'kickbot', output: 'close_connection' )

		ChatBadWords.findOrSaveWhere(input:'poo', output: '/kickuser' )
		//minutes months hours years days
		ChatBadWords.findOrSaveWhere(input:'pants', output: '/banuser', duration: 1  ,period: 'minutes')
		ChatBadWords.findOrSaveWhere(input:'bastard', output: '/banuser', duration: 1  ,period: 'months')

		//Spring security configuration to add me as a user and admin role
		def adminRole = new ChatRole('ROLE_ADMIN').save()
		def userRole = new ChatRole('ROLE_USER').save()
		def anonymouse = new ChatRole('ROLE_ANONYMOUS').save()

		def testUser = new ChatAuth('me', 'password').save()

		ChatAuthChatRole.create testUser, adminRole, true
		ChatAuthChatRole.create testUser, userRole, true
		ChatAuthChatRole.create testUser, anonymouse, true

		def adminUser = new ChatAuth(username: 'admin', password: 'admin').save()
		ChatAuthChatRole.create adminUser, adminRole, true

		addUser('me','test@test.com',adminRole)
		/*
		addUser('admin1','test1@test.com',adminRole)
		addUser('admin2','test2@test.com',adminRole)

		addUser('admin','admin',adminRole)
		addUser('user01','user',userRole)
		addUser('user02','user',userRole)
		addUser('user03','user',userRole)
		addUser('user04','user',userRole)
		addUser('user05','user',userRole)
		addUser('user06','user',userRole)
		addUser('user07','user',userRole)
		addUser('user08','user',userRole)
		addUser('user09','user',userRole)
		addUser('user10','user',userRole)
		*/

	}
	def destroy = {
	}
	void addUser(String username,String email, ChatRole userRole) {
		ChatUser user
		ChatPermissions perm
		String defaultPermission = 'admin'
		if (defaultPermission) {
			perm = ChatPermissions.findByName(defaultPermission)
			perm = perm ? perm : new ChatPermissions(name: defaultPermission).save(flush: true)
			user = ChatUser.findByUsername(username)
			if (!user) {
				def addlog = addLog()
				user = new ChatUser(username: username, permissions: perm, log: addlog, offlog: addlog).save(flush:true)
				
				//def springUser = new ChatAuth(username: username, password: 'admin').save(flush:true)
				//ChatAuthChatRole.create springUser, userRole, true
			}
			ChatUserProfile.findOrSaveWhere(chatuser:user, email:"${email}").save(flush:true)
		}

	}

	private ChatLog addLog() {
		ChatLog logInstance = new ChatLog(messages: [])
		if (!logInstance.save()) {
			log.debug "${logInstance.errors}"
		}
		return logInstance
	}
}
