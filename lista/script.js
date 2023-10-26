    function add() {
        let li = document.createElement('li');
        let input_value = document.form.task.value;
        let input_text = document.createTextNode(input_value);
    
        li.appendChild(input_text);
        document.querySelector('ul').appendChild(li);
        document.form.task.value = "";

        createCloseButton(li);
}

    function createCloseButton(li) {
        let span = documentç.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
s
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        span.onclick = () =>
        span.parentElement.style.display = "none";

        document.querySelectorAll('li').forEach(createCloseButton);
        document.querySelector('ul').addEventListener('click', (e) =>{
            if (e.targett.tagName === 'li')
              e.target.classList.toggle('checked');
        });
}