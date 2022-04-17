
function renderLineNumbers (pre) {
  var offsetTop = window.getComputedStyle(pre, null).getPropertyValue('padding-top');

  pre.classList.add('line-numbers-code');

  // Add class after clone
  var wrapper = document.createElement('pre');
  wrapper.classList.add('line-numbers-wrapper');

  // Create line numbers
  var lines = pre.innerHTML.split('\n');

  if ( lines[lines.length-1] === '</code>' ) {
    var closingTag = lines.pop();
    lines[lines.length-1] += closingTag;
  }

  wrapper.innerHTML =
    '<code>' +
    lines
      .map(function (_, i) {
        return padLeft( (i+1) + '│', 4 )
      })
      .join('\n')
    + '</code>'
  ;
  pre.style.top = offsetTop; // Offset clone by whatever padding you have set in app

  pre.parentNode.replaceChild(wrapper, pre);
  wrapper.appendChild(pre);

}
function padLeft (str,l) { return Array(l-str.length+1).join(" ") + str; }