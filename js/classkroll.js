function classKroll(){
    var _this=this;
    this.elements=[];
    this.init  = function(){
        var elements=document.querySelectorAll('[data-kroll]');
        var finalElements = [];

        [].forEach.call(elements, function(el, i) {
            finalElements.push({
                node: el
            });
        });

        this.elements=finalElements;
        window.addEventListener('scroll', function(){
            _this.handleScroll(_this.elements);
        });
    }

    this.handleScroll = function ($elements) {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        /**
         * Check all registered elements positions
         * and animate them on scroll
         */
        _this.elements.forEach(function(el, i){
                _this.setState(el, windowHeight + scrollTop);
            }
        );
    };
    this.setState = function (el, top) {
        console.log("top:"+top);
        if (top > this.appearingElementAt(el)) {
            el.node.classList.add(el.node.getAttribute('data-kroll'));
        }
        else{
            el.node.classList.remove(el.node.getAttribute('data-kroll'));
        }
    };
    this.appearingElementAt = function(el){
        var elementTop=el.node.getBoundingClientRect().top + window.scrollY;
        var position= el.node.getAttribute('data-kroll-position');
        var element_offset;
        switch (position){
            case 'center':
                element_offset=window.innerHeight / 2;
                break;
            case 'top':
                element_offset=window.innerHeight;
                break;
            case 'bottom':
                element_offset= (el.node.offsetHeight);
                console.log(element_offset);
                break;

        }
        return elementTop + element_offset;
    }
    this.init();
}
classKroll();