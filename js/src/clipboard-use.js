 ! function(e, t, a) { /*页面载入完成后，创建复制按钮*/
     /* code */
     var initCopyCode = function() {
         var copyHtml = '';
         copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
         copyHtml += '<span>复制</span>';
         copyHtml += '</button>';
         $(".highlight .code pre").before(copyHtml);
         var clipboard = new ClipboardJS('.btn-copy', {
             target: function(trigger) {
                 return trigger.nextElementSibling;
             }
         });
         clipboard.on('success', function(e) {
             e.trigger.innerHTML = "<span>复制成功</span>"
             e.clearSelection();
         });
         clipboard.on('error', function(e) {
             e.trigger.innerHTML = "<span>复制失败</span>"
         });
     }
     initCopyCode();
     $(".highlight").hover(function() {
         $(".btn-copy").css({ opacity: 1 });
     }, function() {
         $(".btn-copy").css({ opacity: 0.4 });
         $(this).find(".btn-copy")[0].innerHTML = "<span>复制</span>";
     });
 }(window, document);