!function(t){t.effects.transfer=function(e){return this.queue(function(){var i=t(this),n=t(e.options.to),o=n.offset(),s={top:o.top,left:o.left,height:n.innerHeight(),width:n.innerWidth()},a=i.offset(),f=t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.options.className).css({top:a.top,left:a.left,height:i.innerHeight(),width:i.innerWidth(),position:"absolute"}).animate(s,e.duration,e.options.easing,function(){f.remove(),e.callback&&e.callback.apply(i[0],arguments),i.dequeue()})})}}(jQuery);