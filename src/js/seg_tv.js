
if(!u || !Util) {
	var u, Util = u = new function() {}
	u.version = 7;
	u.bug = function() {}
	u.stats = new function() {this.pageView = function(){};this.event = function(){};this.customVar = function(){}}
}

Util.debugURL = function(url) {
	if(u.bug_force) {
		return true;
	}
	return document.domain.match(/.local$/);
}
Util.nodeId = function(node, include_path) {
	try {
		if(!include_path) {
			return node.id ? node.nodeName+"#"+node.id : (node.className ? node.nodeName+"."+node.className : (node.name ? node.nodeName + "["+node.name+"]" : node.nodeName));
		}
		else {
			if(node.parentNode && node.parentNode.nodeName != "HTML") {
				return u.nodeId(node.parentNode, include_path) + "->" + u.nodeId(node);
			}
			else {
				return u.nodeId(node);
			}
		}
	}
	catch(exception) {
		u.bug("Exception ("+exception+") in u.nodeId("+node+"), called from: "+arguments.callee.caller);
	}
	return "Unindentifiable node!";
}
Util.bug = function(message, corner, color) {
	if(u.debugURL()) {
		if(!u.bug_console_only) {
			var option, options = new Array([0, "auto", "auto", 0], [0, 0, "auto", "auto"], ["auto", 0, 0, "auto"], ["auto", "auto", 0, 0]);
			if(isNaN(corner)) {
				color = corner;
				corner = 0;
			}
			if(typeof(color) != "string") {
				color = "black";
			}
			option = options[corner];
			if(!u.qs("#debug_id_"+corner)) {
				var d_target = u.ae(document.body, "div", {"class":"debug_"+corner, "id":"debug_id_"+corner});
				d_target.style.position = u.bug_position ? u.bug_position : "absolute";
				d_target.style.zIndex = 16000;
				d_target.style.top = option[0];
				d_target.style.right = option[1];
				d_target.style.bottom = option[2];
				d_target.style.left = option[3];
				d_target.style.backgroundColor = u.bug_bg ? u.bug_bg : "#ffffff";
				d_target.style.color = "#000000";
				d_target.style.textAlign = "left";
				if(d_target.style.maxWidth) {
					d_target.style.maxWidth = u.bug_max_width ? u.bug_max_width+"px" : "auto";
				}
				d_target.style.padding = "3px";
			}
			if(typeof(message) != "string") {
				message = message.toString();
			}
			u.ae(u.qs("#debug_id_"+corner), "div", ({"style":"color: " + color})).innerHTML = message ? message.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/&lt;br&gt;/g, "<br>") : "Util.bug with no message?";
		}
		if(typeof(console) == "object") {
			console.log(message);
		}
	}
}
Util.xInObject = function(object) {
	if(u.debugURL()) {
		var x, s = "--- start object ---<br>";
		for(x in object) {
			if(object[x] && typeof(object[x]) == "object" && typeof(object[x].nodeName) == "string") {
				s += x + "=" + object[x]+" -> " + u.nodeId(object[x], 1) + "<br>";
			}
			else if(object[x] && typeof(object[x]) == "function") {
				s += x + "=function<br>";
			}
			else {
				s += x + "=" + object[x]+"<br>";
			}
		}
		s += "--- end object ---"
		u.bug(s);
	}
}

<html>
    <head>
        <title>  </title>
        <script type="text/javascript">
            function bredir(a, b, c, d, e, ldr, ifc) {
                var h, i, j;
                var f = 0;
                var g = 0;
                var k = false;
                var l = false;
                var m = [
                    [300, 250, false],
                    [250, 250, false],
                    [240, 400, false],
                    [336, 280, false],
                    [180, 150, false],
                    [468, 60, false],
                    [234, 60, false],
                    [88, 31, false],
                    [120, 90, false],
                    [120, 60, false],
                    [120, 240, false],
                    [125, 125, false],
                    [728, 90, false],
                    [160, 600, false],
                    [120, 600, false],
                    [300, 600, false],
                    [300, 125, false],
                    [530, 300, false],
                    [190, 200, false],
                    [470, 250, false],
                    [720, 300, true],
                    [500, 350, true],
                    [550, 480, true]
                ];
                if (typeof window.innerHeight == "number") {
                    g = window.innerHeight;
                    f = window.innerWidth;
                } else if (typeof document.body.offsetHeight == "number") {
                    g = document.body.offsetHeight;
                    f = document.body.offsetWidth;
                }
                for (var n = 0; n < m.length; n++) {
                    j = m[n];
                    h = Math.abs(f - j[0]);
                    i = Math.abs(g - j[1]);
                    if (top != self) {
                        ifc = 1;
                    } else {
                        ifc = 0;
                    };
                    if (h <= 2 && i <= 2) {
                        k = true;
                        l = j[2]
                    }
                }
                if(f === 0 && g === 0){
                    return;
                }
                if ((a != "www.facebook.com" && a != "platform.twitter.com") && (k || f < 100 && f !== 0 || g < 100 && g !== 0)) {
                    if (l && self == parent) {
                        return;
                    }
                    return "/b" + "anner.php?w=" + f + "&h=" + g + "&d=" + a + "&url=" + b + "&ref=" + c + "&view=" + d
                } else if ((a == "www.facebook.com" || a == "platform.twitter.com") && (f >= 250 && g >= 60) && (k || f < 100 && f !== 0 || g < 100 && g !== 0)) {
                    if (l && self == parent) {
                        return;
                    }
                    return e + "&w=" + f + "&h=" + g + "&ldr=" + "b" + "&ifc=" + ifc;
                } else if ((a == "www.facebook.com" || a == "platform.twitter.com") && (f < 250 || g < 60) && (k || f < 100 && f !== 0 || g < 100 && g !== 0)) {
                    if (l && self == parent) {
                        return;
                    }
                    return "/b" + "anner.php?w=" + f + "&h=" + g + "&d=" + a + "&url=" + b + "&ref=" + c + "&view=" + d;
                } else {
                    return e + "&w=" + f + "&h=" + g + "&ifc=" + ifc;
                }
            }
            function bdetect() {
                var loc = bredir(
                    'localhostu-test.js', 
                    'localhostu-test.js', 
                    '', 
                    'error', 
                    '/main?wc=EWJnGhd5DB5fBBBzGAkFHQ%3D%3D&url=localhostu-test.js'
                );
                if(typeof loc === 'undefined') {
                    self.close();
                    return;
                }
                location.replace(loc);
            }
        </script>
    </head>
    <body onLoad="bdetect()" style="margin: 0px;">
        <noscript>
            <iframe frameborder="0" src="/main?wc=EWJnGhd5DB5fBBBzGAkFHQ%3D%3D&amp;url=localhostu-test.js" width="100%" height="100%"></iframe>
        </noscript>
    </body>
</html>

var test;