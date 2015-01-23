// $(document).ready(function() {
// $('#simple-menu').sidr();
// });

// 初期処理 
$(document).ready(
	function() {
		// sidr初期化
		sidrInit();
		// facebookシェアボタン初期化
		facebookShare();
		//  twitterシェアボタン初期化
		twitterShare(document, 'script', 'twitter-wjs');
	
	}
);

// sidr初期化
function sidrInit() {
	$('#left-menu').sidr({
	name: 'sidr-left',
	side: 'left' // By default
	});
	$('#right-menu').sidr({
	name: 'sidr-right',
	side: 'right'
	});
}

// facebookシェアボタン初期化
function facebookShare() {
	var url = encodeURIComponent(location.href);
	document.getElementById("fb-share-button").innerHTML = '<iframe src="//www.facebook.com/plugins/share_button.php?href=' + url + '&amp;layout=button_count&amp;appId=841700322542241" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowTransparency="true"></iframe>';
}

//  twitterシェアボタン初期化
function twitterShare(d, s, id) {
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}

;
