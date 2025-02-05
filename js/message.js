        var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?37084';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        var options = {
        "enabled":true,
        "chatButtonSetting":{
            "backgroundColor":"#1d90fc",
            "ctaText":"Chat me UP",
            "borderRadius":"25",
            "marginRight": "0",
            "marginLeft": "20",
            "marginBottom": "20",
            "ctaIconWATI":true,
            "position":"left"
        },
        "brandSetting":{
            "brandName":"SBDInk",
            "brandSubTitle":"undefined",
            "brandImg":"img/icon.png",
            "welcomeText":"Hi there!\nHow may I help you?",
            "messageText":"Hello BiliWorks, your work caught my attention! I'd like to explore working with you on a copywriting project. Can we chat about this?",
            "backgroundColor":"#1d90fc", 
            "ctaText":"Chat me UP",
            "borderRadius":"25",
            "autoShow":true,
            "phoneNumber":"2347032872264"
        }
        };
        s.onload = function() {
            CreateWhatsappChatWidget(options);
        };
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
