// Hit this API endpoint and list out all the data where Category is Animals https://api.publicapis.org/entries

const abc = fetch('https://api.publicapis.org/entries')
    .then(result => result.json())
    .then((data) => {
        let arr1 = data.entries;
        let jsonArr = [];
        for (let i = 0; i < arr1.length; i++) { // for(item of arr1)
            if (arr1[i].Category == "Animals") {
                jsonArr.push(arr1[i]);
            }
        }
        console.log(jsonArr);
    })
    .catch(err => {
        console.log(err);
    })