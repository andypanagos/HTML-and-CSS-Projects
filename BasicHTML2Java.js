<!DOCTYPE html>
<html>
<body>
	<button onclick="My_First_Function()">
		Click me!
	</button>
	<p id="Irish"></p>
<script>
	function My_First_Function() {
		var string = "Kiss me, I'm Irish!";
		var result = String.fontcolor("green");
		document.getElementByID("Irish").innerHTML = 
		result;
	}
</script>
</body>
</html>