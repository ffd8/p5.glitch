(function () {
  var file = file || "README.md?"+Math.floor(Math.random(9999));
  var reader = new stmd.DocParser();
  var writer = new stmd.HtmlRenderer();
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      display(xhr);

      // code highlighting!
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  };

  function display(xhr) {

    var parsed = reader.parse(xhr.responseText);
    var content = writer.renderBlock(parsed);
    var randomBG = '<div id="glitchbg" style="background-image:url(\'includes/backgrounds/'+Math.floor(Math.random()*20)+'.gif\');"></div>';
    randomBG += '<h2>Shoutout</h2><div>Many thanks to <a href="https://glitch.com/@ohiofi" target="_blank">@ohiofi</a> for this fitting glitch.me subdomain!</div>';
    document.getElementsByTagName('body')[0].innerHTML = content + randomBG;

    // fix anchors
    var hs = document.querySelectorAll("h1, h2, h3, h4");
    for(var i=0; i<hs.length;i++){
      var anchorName = hs[i].innerHTML.toLowerCase().split(" ").join("-");
      hs[i].setAttribute('id', anchorName);
      hs[i].setAttribute('name', anchorName);
    }

    // fix links
    var links = document.getElementsByTagName("a");
    for(var i=0; i<links.length;i++){
      if(links[i].getAttribute('href').substring(0, 1) != "#"){
        links[i].setAttribute('target', '_blank');
      }
    }


    /* try to extract h1 title and use as title for page
       if no h1, use name of file
    */
    try {
      document.title = document.querySelector('h1').textContent
    } catch (e) {
      document.title = file;
    }

  }

  xhr.open('GET', file);
  xhr.send();
})();

