App = Ember.Application.create();

App.Router.map(function() {
  this.resource('index', { path: '/' }, function() {});
});

App.IndexController = Ember.ObjectController.extend({
  emailInputValue: 'hello@g',
  colorInputValue: 'bl',

  domains: [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'aol.com',
    'comcast.net',
    'me.com',
    'msn.com',
    'live.com',
    'sbcglobal.net',
    'ymail.com',
    'att.net',
    'mac.com',
    'cox.net',
    'verizon.net',
    'hotmail.co.uk',
    'bellsouth.net',
    'rocketmail.com',
    'aim.com',
    'yahoo.co.uk',
    'earthlink.net',
    'charter.net',
    'optonline.net',
    'shaw.ca',
    'yahoo.ca',
    'googlemail.com',
    'mail.com',
    'qq.com',
    'btinternet.com',
    'mail.ru',
    'live.co.uk',
    'naver.com',
    'rogers.com',
    'juno.com',
    'yahoo.com.tw',
    'live.ca',
    'walla.com',
    '163.com',
    'roadrunner.com',
    'telus.net',
    'embarqmail.com',
    'hotmail.fr',
    'pacbell.net',
    'sky.com',
    'sympatico.ca',
    'cfl.rr.com',
    'tampabay.rr.com',
    'q.com',
    'yahoo.co.in',
    'yahoo.fr',
    'hotmail.ca',
    'windstream.net',
    'hotmail.it',
    'web.de',
    'asu.edu',
    'gmx.de',
    'gmx.com',
    'insightbb.com',
    'netscape.net',
    'icloud.com',
    'frontier.com',
    '126.com',
    'hanmail.net',
    'suddenlink.net',
    'netzero.net',
    'mindspring.com',
    'ail.com',
    'windowslive.com',
    'netzero.com',
    'yahoo.com.hk',
    'yandex.ru',
    'mchsi.com',
    'cableone.net',
    'yahoo.com.cn',
    'yahoo.es',
    'yahoo.com.br',
    'cornell.edu',
    'ucla.edu',
    'us.army.mil',
    'excite.com',
    'ntlworld.com',
    'usc.edu',
    'nate.com',
    'outlook.com',
    'nc.rr.com',
    'prodigy.net',
    'wi.rr.com',
    'videotron.ca',
    'yahoo.it',
    'yahoo.com.au',
    'umich.edu',
    'ameritech.net',
    'libero.it',
    'yahoo.de',
    'rochester.rr.com',
    'cs.com',
    'frontiernet.net',
    'swbell.net',
    'msu.edu',
    'ptd.net',
    'proxymail.facebook.com',
    'hotmail.es',
    'austin.rr.com',
    'nyu.edu',
    'sina.com',
    'centurytel.net',
    'usa.net',
    'nycap.rr.com',
    'uci.edu',
    'hotmail.de',
    'yahoo.com.sg',
    'email.arizona.edu',
    'yahoo.com.mx',
    'ufl.edu',
    'bigpond.com',
    'unlv.nevada.edu',
    'yahoo.cn',
    'ca.rr.com',
    'google.com',
    'yahoo.co.id',
    'inbox.com',
    'fuse.net',
    'hawaii.rr.com',
    'talktalk.net',
    'gmx.net',
    'walla.co.il',
    'ucdavis.edu',
    'carolina.rr.com',
    'comcast.com',
    'live.fr',
    'blueyonder.co.uk',
    'live.cn',
    'cogeco.ca',
    'abv.bg',
    'tds.net',
    'centurylink.net',
    'yahoo.com.vn',
    'uol.com.br',
    'osu.edu',
    'san.rr.com',
    'rcn.com',
    'umn.edu',
    'live.nl',
    'live.com.au',
    'tx.rr.com',
    'eircom.net',
    'sasktel.net',
    'post.harvard.edu',
    'snet.net',
    'wowway.com',
    'live.it',
    'hoteltonight.com',
    'att.com',
    'vt.edu',
    'rambler.ru',
    'temple.edu',
    'cinci.rr.com'
  ],

  colors: [
    'aqua',
    'aliceblue',
    'antiquewhite',
    'black',
    'blue',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgreen',
    'darkturquoise',
    'deepskyblue',
    'green',
    'lime',
    'mediumblue',
    'mediumspringgreen',
    'navy',
    'springgreen',
    'teal',
    'midnightblue',
    'dodgerblue',
    'lightseagreen',
    'forestgreen',
    'seagreen',
    'darkslategray',
    'darkslategrey',
    'limegreen',
    'mediumseagreen',
    'turquoise',
    'royalblue',
    'steelblue',
    'darkslateblue',
    'mediumturquoise',
    'indigo',
    'darkolivegreen',
    'cadetblue',
    'cornflowerblue',
    'mediumaquamarine',
    'dimgray',
    'dimgrey',
    'slateblue',
    'olivedrab',
    'slategray',
    'slategrey',
    'lightslategray',
    'lightslategrey',
    'mediumslateblue',
    'lawngreen',
    'aquamarine',
    'chartreuse',
    'gray',
    'grey',
    'maroon',
    'olive',
    'purple',
    'lightskyblue',
    'skyblue',
    'blueviolet',
    'darkmagenta',
    'darkred',
    'saddlebrown',
    'darkseagreen',
    'lightgreen',
    'mediumpurple',
    'darkviolet',
    'palegreen',
    'darkorchid',
    'yellowgreen',
    'sienna',
    'brown',
    'darkgray',
    'darkgrey',
    'greenyellow',
    'lightblue',
    'paleturquoise',
    'lightsteelblue',
    'powderblue',
    'firebrick',
    'darkgoldenrod',
    'mediumorchid',
    'rosybrown',
    'darkkhaki',
    'silver',
    'mediumvioletred',
    'indianred',
    'peru',
    'chocolate',
    'tan',
    'lightgray',
    'lightgrey',
    'thistle',
    'goldenrod',
    'orchid',
    'palevioletred',
    'crimson',
    'gainsboro',
    'plum',
    'burlywood',
    'lightcyan',
    'lavender',
    'darksalmon',
    'palegoldenrod',
    'violet',
    'azure',
    'honeydew',
    'khaki',
    'lightcoral',
    'sandybrown',
    'beige',
    'mintcream',
    'wheat',
    'whitesmoke',
    'ghostwhite',
    'lightgoldenrodyellow',
    'linen',
    'salmon',
    'oldlace',
    'bisque',
    'blanchedalmond',
    'coral',
    'cornsilk',
    'darkorange',
    'deeppink',
    'floralwhite',
    'fuchsia',
    'gold',
    'hotpink',
    'ivory',
    'lavenderblush',
    'lemonchiffon',
    'lightpink',
    'lightsalmon',
    'lightyellow',
    'magenta',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'orange',
    'orangered',
    'papayawhip',
    'peachpuff',
    'pink',
    'red',
    'seashell',
    'snow',
    'tomato',
    'white',
    'yellow',
    'rebeccapurple'
  ],

  actions: {
    gotValue: function(value) {
      console.log('gotValue:', value);
    }
  }
});
