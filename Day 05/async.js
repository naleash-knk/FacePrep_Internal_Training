function getData() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Server Response");

        }, 2000);

    });

}

async function loadData() {

    let data = await getData();

    console.log(data);

}

loadData();