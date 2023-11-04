const mousemove: HTMLElement | null = document.getElementById('mousemove');

window.addEventListener('mousemove', (e: MouseEvent) => {
	if (mousemove == null)
		return ;
	mousemove.style.top = e.pageY + "px";
	mousemove.style.left = e.pageX + "px";
});

window.addEventListener('mousedown', (e: MouseEvent) => {
	if (mousemove == null)
		return ;
	mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener('mouseup', (e: MouseEvent) => {
	if (mousemove == null)
		return ;
	mousemove.style.transform = "scale(1) translate(-50%, -50%)";
})
