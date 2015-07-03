# jQuery imgFitter plugin

jQuery Plugin for resize and crop image without wrapper tags.

[DEMO](http://yakiniku48.github.io/jquery.imgFitter.js/demo/)

In your HTML:

```html
<img data-src="01.jpg" class="target-element" width="320" height="320">
<img data-src="02.jpg" class="target-element" width="320" height="320">
<img data-src="03.jpg" class="target-element" width="320" height="320">

...

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
<script src="path/to/jquery.imgFitter.js"></script>
<script>
$(function () {
	$( '.target-element' ).imgFitter();
});
</script>
```

That's it!  You don't need to wrap images in div tag.

## ChangeLog

* Version 0.1 ( 3 Jul 2015 )
	* 誰かにチェックしてもらうために公開

## Copyright and License
Copyright &copy; 2015 Hideyuki.MOTOO.
This plugin is licensed under the [MIT license](https://github.com/yakiniku48/jquery.imgFitter.js/blob/master/LICENSE.txt).
