function classKroll(){
    var _this=this;
    this.elements=[];
    this.array_funcs=[];
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

        var class_or_func=el.node.getAttribute('data-kroll');

            if (top > this.appearingElementAt(el)) {

                if(class_or_func.indexOf("fn_")>=0){
                    if(this.array_funcs.indexOf(class_or_func)<0) { //if the function has not been called
                        eval(class_or_func+'()');
                        this.array_funcs.push(class_or_func);
                    }
                }else {
                    el.node.classList.add(class_or_func);
                }
            }
            else {

                if(class_or_func.indexOf("anime(")>=0){

                }else {
                    console.log(class_or_func+"-"+el.node.getAttribute('data-kroll'));
                    el.node.classList.remove(el.node.getAttribute('data-kroll'));
                }
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