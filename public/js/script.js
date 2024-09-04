var inp = document.getElementById('taskinp');
var submit = document.getElementById('pushdata');
var list = document.getElementById('taskList');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    var value = inp.value;
    if (value !== '') {
        inp.value = '';
        var newline = document.createElement('li');
        var checkBtn = document.createElement('input')
        checkBtn.type = 'checkbox';
        var spantxt = document.createElement('span')
        spantxt.className = 'task-text';
        spantxt.textContent = value;
        var deleteBtn = document.createElement('span')
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'task-delete';
        newline.append(checkBtn)
        newline.append(spantxt)
        newline.append(deleteBtn)
        list.append(newline)

        checkBtn.addEventListener('click', function () {
            if (checkBtn.checked)
                spantxt.style.textDecoration = "line-through";
            else
                spantxt.style.textDecoration = "none";
        })
        deleteBtn.addEventListener('click', function () {
            newline.remove();
        })

    }
})