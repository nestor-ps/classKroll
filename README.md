# classKroll

### Main features
Inspired by Skrollr and WOW, classKroll is a simple and lightweight js file to add custom classes to DOM elements as they appear in the viewport while scrolling. Perfect for transition classes and effects.

```html 
<div data-kroll="rotate" class="bars" data-kroll-position="center" >Bar content</div> 
```

* data-kroll-position sets the desired position where the class will be inserted while scrolling: top,center,bottom
* data-kroll: desired class name to add to the element once the scroll hits the position. Also a defined function name is valid and will be called once the scroll hits the position. The format name of the function has to be something like fn_younamefunction 


```javascript
<script>
    classKroll();
</script>
```
