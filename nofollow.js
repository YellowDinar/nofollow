jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}

var arr = $('a:regex(href, ^https?:\/\/.*$)');

for (var i = 0, len = arr.length; i < len; i++){
    if(!$(arr[i]).attr('rel')) {
        var domen = location.href.replace(/^https?:\/\//, '');
        domen = domen.replace(/\/$/, '');
        if ($(arr[i]).attr('href').indexOf(domen) < 0) {
            $(arr[i]).attr('rel', 'nofollow');
        }
    }
}