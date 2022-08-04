document.getElementById('get_data').addEventListener('click', loadData);

function loadData(){
    // console.log("Button clicked")
    // Create XHR object (xml Http Request)
    let xhr = new XMLHttpRequest();
    // console.log(xhr);
    // Open
    xhr.open('GET', '../js/data.txt', true);
    xhr.onload = function (){
        // HTTP statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (this.status === 200){
            console.log(this.responseText);
        }
    }

    xhr.send();

    console.log(xhr);
}