/*
 * youtube.js
 * not related to old youtube.js
 *
 * used to embed youtube videos automatically
 * watch out for slow loading times
 *
*/

window.onload = function() {
    // select all youtube links in document
    const youtubeLinks = document.querySelectorAll(
        // CSS Selector
        'a[href*="youtu" i]'
    );

    // do for each link...
    youtubeLinks.forEach(function(currentValue){

        // get video id from youtube links
        regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
        //var videoID = currentValue.innerHTML.match(regex)[1];
        var idCheck = currentValue.innerHTML.match(regex);
        if (idCheck) {
            var videoID = idCheck[1];

            // create new iframe element
            var embed = document.createElement('iframe');
            embed.setAttribute('width', '320');
            embed.setAttribute('height', '180');
            embed.setAttribute('loading', 'lazy');
            embed.setAttribute('frameborder', '0');
            embed.setAttribute('allow', 'fullscreen');

            // set iframe videoid
            embed.setAttribute('src', 'https://www.youtube.com/embed/' + videoID);

            // replace link with iframe
            currentValue.parentNode.replaceChild(embed, currentValue);
            //currentValue.parentNode.append(embed);
            //currentValue.insertAdjacentHTML('afterend', '&nbsp;' + embed.outerHTML);
        }
    });
};

