$(function(e) {
    
    
    /* Button absolute */
    let btn = $("#btnAbs");
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 900);
         return false;
    });
    
    
    /* Smooth scroll */
    $("[data-scroll]").on("click", function(e) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset - 40
        }, 900);
    });
    
    
    /* Filter */
    let filter = $("[data-filter]");
    
    filter.on("click", function(event) {
        event.preventDefault();
        
        let cat = $(this).data('filter');
        
        if(cat == 'all') {
            $("[data-cat]").removeClass('hide')
        } else {
             $("[data-cat]").each(function() {

                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                $(this).removeClass('hide');
                }
            });
        }
    });
    
    
    /* Modal */
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(e) {
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $('body').addClass('no-scroll');
        
        setTimeout(function(e) {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
        
    });
    
    modalClose.on("click", function(e) {
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        
        modalParent.find(".modal__dialog").css({
                transform: "scale(0)"
        });
        
        setTimeout(function(e) {
            modalParent.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);
    });
    
    $(".modal").on("click", function(e) {
        let $this = $(this);
        
        $this.find(".modal__dialog").css({
                transform: "scale(0)"
        });
        
        setTimeout(function(e) {
            $this.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);
    });
    
    $(".modal__dialog").on("click", function(e) {
        event.stopPropagation();
    });
    
    
});







