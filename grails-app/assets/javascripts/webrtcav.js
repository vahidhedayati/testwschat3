/* usermenu.js from https://github.com/vahidhedayati/grails-wschat-plugin/blob/grails2/web-app/js/usermenu.js
 * This will be copied over and modified as different JS files in this project as an example of how to override
 * what chat users can see on their end web page when they log into grails wschat plugin
 * 
 * 
 * Modifed version labelled as webrtcav.js - stripped off all excess blocks that don't need to be displayed
 */
function processMessage(message) {
	
	
	var jsonData=JSON.parse(message.data);

	if (debug == "on") {
		console.log('@onMessage: '+JSON.stringify(message.data));
	}
		
		
	if (jsonData.message!=null) {
		$('#chatMessages').append(htmlEncode(jsonData.message)+"\n");
	}
	if (jsonData.isAdmin!=null) {
		isAdmin=jsonData.isAdmin
	}

	if (jsonData.isBanned!=null) {
		$('#chatMessages').append(htmlEncode(jsonData.isBanned)+"\n");
		webSocket.send("DISCO:-"+user);
		$('#chatMessages').append(user+" disconnecting from server... \n");
		$('#onlineUsers').html("");
		messageBox.value="";
		webSocket.close();
	}

	if (jsonData.system!=null) {
		if (jsonData.system=="disconnect") { 
			webSocket.send("DISCO:-"+user);
			$('#chatMessages').append(user+" disconnecting from server... \n");
			$('#onlineUsers').html("");
			messageBox.value="";
			webSocket.close();
		}
		if (jsonData.system=="closecam") { 
			popup_window.close ();
			webSocket.send("/camdisabled "+user);
		}
	}


	if (jsonData.users!=null) {
		$('#onlineUsers').html("");
		var sb = [];
		var sb1 = [];
		var sb2 = [];
		var sb3 = [];
		var sb4 = [];
		var sb5 = [];
		// for games use glyphicon-tower
		
		jsonData.users.forEach(function(entry) {
			
			if (entry.owner_rtc!=null) {
				sb.push('\n<li class="dropdown-submenu bttn-xs" id="ownerBar">\n<a tabindex="-1" id="user-title" class="user-title glyphicon glyphicon-facetime-video glyphicon-volume-up">'+entry.owner_rtc+'</a>\n');
				sb.push('<ul class="dropdown-menu">\n');
				sb.push('<li class="btn-xs" id="sideBar">\n');
				sb.push('<a  data-toggle="modal" href="#userprofile1"  onclick="javascript:userprofile('+wrapIt(entry.owner_rtc)+');">'+entry.owner_rtc+'\'s profile</a>\n');
				sb.push('</li>\n');
				//sb.push('<li class="bttn-xs" id="sideBar">\n');
				//sb.push('<a  onclick="enableCam('+wrapIt(entry.owner_rtc)+','+wrapIt('disable')+','+wrapIt('webrtc')+');">Disable WebRTC</a>\n');
				//sb.push('</li>\n');
				camoff(entry.owner_rtc);
				rtcon(entry.owner_rtc);
				sb.push('</ul>\n</li>\n\n\n');
			}
		
			if (entry.owner!=null) {
				sb.push('\n<li class="dropdown-submenu bttn-xs" id="ownerBar">\n<a tabindex="-1" id="user-title" class="user-title" href="#">'+entry.owner+'</a>\n');
				sb.push('<ul class="dropdown-menu">\n');
				sb.push('<li class="btn-xs" id="sideBar">\n');
				sb.push('<a  data-toggle="modal" href="#userprofile1"  onclick="javascript:userprofile('+wrapIt(entry.owner)+');">'+entry.owner+'\'s profile</a>\n');
				sb.push('</li>\n');
				sb.push('<li class="btn-xs" id="sideBar">\n');
				sb.push('<a  onclick="javascript:enableCam('+wrapIt(entry.owner)+','+wrapIt('send')+','+wrapIt('webrtc')+');">Enable WebRTC</a>\n');
				sb.push('</li>\n');
				fileshareoff(entry.owner);
				camoff(entry.owner);
				rtcoff(entry.owner);
				sb.push('</ul>\n</li>\n\n\n');
			}
			
			/*------------------------------------------------------------------------------------------*/
			
			if (entry.friends_rtc!=null) {
				sb1.push('\n<li class="dropdown-submenu bttn-xs" id="chatFriend"><a tabindex="-1" id="user-title" class="user-title glyphicon glyphicon-facetime-video glyphicon-volume-up" >'+entry.friends_rtc+'</a>\n');
				sb1.push('<ul class="dropdown-menu">\n');
				sb1.push('<li class="btn-xs" id="sideBar">\n');
				sb1.push('<a  data-toggle="modal" href="#userprofile1"  onclick="javascript:userprofile('+wrapIt(entry.friends_rtc)+');">'+entry.friends_rtc+'\'s profile</a>\n');
				sb1.push('</li>\n');
				sb1.push('<li class="btn-xs" id="sideBar">\n');
				sb1.push('<a onclick="javascript:pmuser('+wrapIt(entry.friends_rtc)+', '+wrapIt(user)+');">PM  '+entry.friends_rtc+'</a>\n');
				sb1.push('\n</li> \n');

				sb1.push('<li class="btn-xs" id="sideBar"><a onclick="javascript:removefriend('+wrapIt(entry.friends_rtc)+', '+wrapIt(user)+');">Del from friends list</a>\n');
				sb1.push('\n</li> ');
				camoff(entry.friends_rtc);
				rtcon(entry.friends_rtc);
				sb1.push('<li class="btn-xs" id="sideBar">\n');
				sb1.push('<a onclick="javascript:enableCam('+wrapIt(entry.friends_rtc)+','+wrapIt('view')+','+wrapIt('webrtc')+');">WebRTC</a>\n');
				sb1.push('</li>\n');
				var admintool=adminOptions(isAdmin,entry.friends_rtc)
				sb1.push(admintool);
				sb1.push('</ul>\n</li>\n\n\n');
			}
			
			if (entry.friends!=null) {
				sb1.push('\n<li class="dropdown-submenu bttn-xs" id="chatFriend"><a tabindex="-1" id="user-title" class="user-title" href="#">'+entry.friends+'</a>\n');
				sb1.push('<ul class="dropdown-menu">\n');
				sb1.push('<li class="btn-xs" id="sideBar">\n');
				sb1.push('<a  data-toggle="modal" href="#userprofile1"  onclick="javascript:userprofile('+wrapIt(entry.friends)+');">'+entry.friends+'\'s profile</a>\n');
				sb1.push('</li>\n');
				sb1.push('<li class="btn-xs" id="sideBar">\n');
				sb1.push('<a onclick="javascript:pmuser('+wrapIt(entry.friends)+', '+wrapIt(user)+');">PM  '+entry.friends+'</a>\n');
				sb1.push('\n</li> \n');

				sb1.push('<li class="btn-xs" id="sideBar"><a onclick="javascript:removefriend('+wrapIt(entry.friends)+', '+wrapIt(user)+');">Del from friends list</a>\n');
				sb1.push('\n</li> ');
				camoff(entry.friends);
				rtcoff(entry.friends);
				var admintool=adminOptions(isAdmin,entry.friends)
				sb1.push(admintool);
				sb1.push('</ul>\n</li>\n\n\n');
			}
			
			/*------------------------------------------------------------------------------------------*/
			
			if (entry.user_rtc!=null) {
				sb2.push('\n<li class="dropdown-submenu bttn-xs" id="chatUser"><a tabindex="-1"  id="user-title" class="user-title glyphicon glyphicon-facetime-video glyphicon-volume-up">'+entry.user_rtc+'</a>\n');
				sb2.push('<ul class="dropdown-menu">\n');
				sb2.push('<li class="btn-xs" id="sideBar">\n');
				sb2.push('<a  data-toggle="modal" href="#userprofile1"  onclick="javascript:userprofile('+wrapIt(entry.user_rtc)+');">'+entry.user_rtc+'\'s profile</a>\n');
				sb2.push('</li>\n');
				sb2.push('<li class="btn-xs" id="sideBar">\n');
				sb2.push('<a onclick="javascript:pmuser('+wrapIt(entry.user_rtc)+', '+wrapIt(user)+');">PM  '+entry.user_rtc+'</a>\n');
				sb2.push('\n</li> ');
				sb2.push('<li class="btn-xs" id="sideBar">\n');
				sb2.push('<a onclick="javascript:adduser('+wrapIt(entry.user_rtc)+', '+wrapIt(user)+');">Add  '+entry.user_rtc+'</a>\n');
				sb2.push('</li>\n');
				sb2.push('<li class="btn-xs" id="sideBar">\n');
				sb2.push('<a onclick="javascript:blockuser('+wrapIt(entry.user_rtc)+', '+wrapIt(user)+');">Block  '+entry.user_rtc+'</a>\n');
				sb2.push('</li>\n');
				sb2.push('<li class="btn-xs" id="sideBar">\n');
				sb2.push('<a onclick="javascript:enableCam('+wrapIt(entry.user_rtc)+','+wrapIt('view')+','+wrapIt('webrtc')+');">WebRTC</a>\n');
				sb2.push('</li>\n');	
				camoff(entry.user_rtc);
				rtcon(entry.user_rtc);
				var admintool=adminOptions(isAdmin,entry.user_rtc)
				sb2.push(admintool);
				sb2.push('</ul>\n</li>\n\n\n');
			}
			
					
			if (entry.user!=null) {
				sb2.push('\n<li class="dropdown-submenu bttn-xs" id="chatUser"><a tabindex="-1" id="user-title" class="user-title" href="#">'+entry.user+'</a>\n');
				sb2.push('<ul class="dropdown-menu">\n');
				sb2.push('<li class="btn-xs" id="sideBar">\n');
				sb2.push('<a  data-toggle="modal" href="#userprofile1"  onclick="javascript:userprofile('+wrapIt(entry.user)+');">'+entry.user+'\'s profile</a>\n');
				sb2.push('</li>\n');
				sb2.push('<li class="btn-xs" id="sideBar">\n');
				sb2.push('<a onclick="javascript:pmuser('+wrapIt(entry.user)+', '+wrapIt(user)+');">PM  '+entry.user+'</a>\n');
				sb2.push('\n</li> ');
				sb2.push('<li class="btn-xs" id="sideBar">\n');
				sb2.push('<a onclick="javascript:adduser('+wrapIt(entry.user)+', '+wrapIt(user)+');">Add  '+entry.user+'</a>\n');
				sb2.push('</li>\n');
				sb2.push('<li class="btn-xs" id="sideBar">\n');
				sb2.push('<a onclick="javascript:blockuser('+wrapIt(entry.user)+', '+wrapIt(user)+');">Block  '+entry.user+'</a>\n');
				sb2.push('</li>\n');
				camoff(entry.user);
				rtcoff(entry.user);
				var admintool=adminOptions(isAdmin,entry.user)
				sb2.push(admintool);
				sb2.push('</ul>\n</li>\n\n\n');
			}
			
			/*------------------------------------------------------------------------------------------*/

			if (entry.blocked!=null) {
				sb3.push('\n<li class="dropdown-submenu bttn-xs" id="chatBlocked"><a tabindex="-1" id="user-title" class="user-title">'+entry.blocked+'</a>\n');
				sb3.push('<ul class="dropdown-menu">\n');
				sb3.push('<li class="btn-xs" id="sideBar">\n');
				sb3.push('<a  data-toggle="modal" href="#userprofile1"  onclick="javascript:userprofile('+wrapIt(entry.blocked)+');">'+entry.blocked+'\'s profile</a>\n');
				sb3.push('</li>\n');
				sb3.push('<li class="btn-xs" id="sideBar">\n');
				sb3.push('<a onclick="javascript:unblockuser('+wrapIt(entry.blocked)+', '+wrapIt(user)+');">UNBLOCK  '+entry.blocked+'</a>\n');
				sb3.push('\n</li> ');
				var admintool=adminOptions(isAdmin,entry.blocked)
				sb3.push(admintool);
				sb3.push('</ul>\n</li>\n\n\n');
			}
			
			
			/*------------------------------------------------------------------------------------------*/
			
			if (entry.offline_friends!=null) {
				sb4.push('\n<li class="dropdown-submenu btn-default bttn-xs" id="chatOffline"><a tabindex="-1" id="user-title" class="user-title"><i>'+entry.offline_friends+' (offline)</i></a>\n');
				sb4.push('<ul class="dropdown-menu">\n');
				sb4.push('<li class="btn-xs" id="sideBar">\n');
				sb4.push('<a  data-toggle="modal" href="#userprofile1"  onclick="javascript:userprofile('+wrapIt(entry.offline_friends)+');"><i>'+entry.offline_friends+'\'s profile</i></a>\n');
				sb4.push('</li>\n');
				sb4.push('<li class="btn-xs" id="sideBar">\n');
				sb4.push('<a onclick="javascript:pmuser('+wrapIt(entry.offline_friends)+', '+wrapIt(user)+');"><i>Offline PM  '+entry.offline_friends+'</i></a>\n');
				sb4.push('\n</li> ');
				sb4.push('<li class="btn-xs" id="sideBar"><a onclick="javascript:removefriend('+wrapIt(entry.offline_friends)+', '+wrapIt(user)+');">Del from friends list</a>\n');
				sb4.push('\n</li> ');
				var admintool=adminOptions(isAdmin,entry.offline_friends)
				sb4.push(admintool);
				sb4.push('</ul>\n</li>\n\n\n');
			}
			/*------------------------------------------------------------------------------------------*/
			if (entry.online_friends!=null) {
				sb5.push('\n<li class="dropdown-submenu btn-default bttn-xs" id="chatOnline"><a tabindex="-1" id="user-title" class="user-title"><b>'+entry.online_friends+' (online)</b></a>\n');
				sb5.push('<ul class="dropdown-menu">\n');
				sb5.push('<li class="btn-xs" id="sideBar">\n');
				sb5.push('<a  data-toggle="modal" href="#userprofile1"  onclick="javascript:userprofile('+wrapIt(entry.offline_friends)+');"><b>'+entry.online_friends+'\'s profile</b></a>\n');
				sb5.push('</li>\n');
				sb5.push('<li class="btn-xs" id="sideBar">\n');
				sb5.push('<a onclick="javascript:pmuser('+wrapIt(entry.online_friends)+', '+wrapIt(user)+');"><b>PM  '+entry.online_friends+'</b></a>\n');
				sb5.push('\n</li> ');
				sb5.push('<li class="btn-xs" id="sideBar"><a onclick="javascript:removefriend('+wrapIt(entry.online_friends)+', '+wrapIt(user)+');">Del from friends list</a>\n');
				sb5.push('\n</li> ');
				var admintool=adminOptions(isAdmin,entry.online_friends)
				sb5.push(admintool);
				sb5.push('</ul>\n</li>\n\n\n');
			}

		});
		$('#onlineUsers').html(sb.join("")+sb1.join("")+sb2.join("")+sb3.join(""));
		
		$('#friendsList').html(sb5.join("")+sb4.join(""))
	}
	if (jsonData.currentRoom!=null) {
		currentRoom=jsonData.currentRoom
	}
	if (jsonData.rooms!=null) {
		var rms = [];
		rms.push('<ul class="nav-pills pull-center">\n');
		jsonData.rooms.forEach(function(entry) {
			if (entry.room!=null) {
				if (currentRoom == entry.room) {
					rms.push('<li class="btn btn-default"><b>'+entry.room+'</b></li>\n');
					
				}else{
					rms.push('<li class="btn btn-default"><a onclick="javascript:joinRoom('+wrapIt(user)+','+wrapIt(entry.room)+');">'+entry.room+'</a></li>\n');
				}
			}
		});
		rms.push('</ul>\n');
		var admintool=adminRooms(isAdmin)
		rms.push(admintool);
		
		
		
		$('#chatRooms').html(rms.join(""));
	}   	

	if (jsonData.privateMessage!=null) {
		var receiver
		var sender
		if (jsonData.msgFrom!=null) {
			sender=jsonData.msgFrom
		}
		if (jsonData.msgTo!=null) {
			receiver=jsonData.msgTo
		}
		$('#chatMessages').append("PM("+sender+"): "+jsonData.privateMessage+"\n");
		sendPM(receiver,sender,jsonData.privateMessage);
	}   	
}
