const btn = document.getElementById('adWatchBTN');
btn.addEventListener('click', function(e){
<script type="text/javascript" src="//vk.com/js/api/xd_connection.js?2" charset="utf-8"></script>>
<script type="text/javascript" src="//ad.mail.ru/static/admanhtml/rbadman-html5.min.js" charset="utf-8"></script>>
<script type="text/javascript" src="//vk.com/js/api/adman_init.js" charset="utf-8"></script>>
<script>>
window.addEventListener('load', function() {

var user_id = null;   // user's id
var app_id = 7817490;  // your app's id

admanInit({
user_id: user_id,
app_id: 7817490,
mobile: true,
type: 'rewarded' 			// 'preloader' or 'rewarded' (default - 'preloader')
// params: {preview: 1}   // to verify the correct operation of advertising
}, onAdsReady, onNoAds);

function onAdsReady(adman) {
adman.onStarted(function () {});
adman.onCompleted(function() {});
adman.onSkipped(function() {});
adman.onClicked(function() {});
adman.start('preroll');
};
function onNoAds() {};
});
</script>>

})
