var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://667399e96ca902ae11b4b7f8.mockapi.io/api/v1/user/1', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        document.getElementById('result').innerHTML = 'Title: ' + data.title;
    }
};
xhr.send();


function loadData() {
    fetch('https://667399e96ca902ae11b4b7f8.mockapi.io/api/v1/user/1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })  
    .then(response => {
        if (!response.ok) {       
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('result').innerHTML = 'Name: ' + data.name;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

