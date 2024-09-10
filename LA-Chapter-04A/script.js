function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://667399e96ca902ae11b4b7f8.mockapi.io/api/v1/user/1', true);
    xhr.onreadystatechange = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById('result').innerHTML = 'age: ' + data.age;
        }
    };
    xhr.send();
}