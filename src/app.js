let data = fetch("https://api.alquran.cloud/v1/surah")
 .then((response) => {
  return response.json();
 })
 .then((result) => {
  getData(result.data);
 });

function getData(data) {
 const input = document.getElementById("input");
 const btnTampilkan = document.getElementById("btn-tampilkan");

 input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
   if (input.value == "all") {
    let masukData = "";
    for (let i = 0; i < data.length; i++) {
     masukData += masukkanData(data[i]);
    }
    tampilkanData(masukData);
    return (input.value = "");
   }

   const parseInput = (...input) => {
    return input.map((str) => parseInt(str));
   };

   let inputVal = parseInput(input.value);

   if (inputVal[0].toString() == "NaN") return alert("kga bisa string!");
   else if (parseInt(inputVal[0]) > 114) return alert("cmn ada 114 surah!");
   tampilkanData(masukkanData(data[inputVal - 1]));

   input.value = "";
  }
 });

 btnTampilkan.addEventListener("click", () => {
  if (input.value == "all") {
   let masukData = "";
   for (let i = 0; i < data.length; i++) {
    masukData += masukkanData(data[i]);
   }
   tampilkanData(masukData);
   return (input.value = "");
  }

  const parseInput = (...input) => {
   return input.map((str) => parseInt(str));
  };

  let inputVal = parseInput(input.value);

  if (inputVal[0].toString() == "NaN") return alert("kga bisa string!");
  else if (parseInt(inputVal[0]) > 114) return alert("cmn ada 114 surah!");
  tampilkanData(masukkanData(data[inputVal - 1]));
  input.value = "";
 });
}

function masukkanData(data) {
 return `
            <tbody>
                <tr>
                    <td>
                        <p>${data.number}</p>
                    </td>
                    <td>
                        <p>${data.name}</p>
                    </td>
                    <td>
                        <p>${data.englishName}</p>
                    </td>
                    <td>
                        <p>${data.numberOfAyahs}</p>
                    </td>
                    <td>
                        <p>${data.englishNameTranslation}</p>
                    </td>
                    <td>
                        <p>${data.revelationType}</p>
                    </td>
                </tr>
            </tbody>
    `;
}

function tampilkanData(data) {
 const tableData = document.getElementById("table-data");

 let head = `
            <thead>
                <tr>
                    <td>
                        <p>Number</p>
                    </td>
                    <td>
                        <p>Name Surah</p>
                    </td>
                    <td>
                        <p>Name Surah latin</p>
                    </td>
                    <td>
                        <p>Ayahs</p>
                    </td>
                    <td>
                        <p>Translation</p>
                    </td>
                    <td>
                        <p>Revelation</p>
                    </td>
                </tr>
            </thead>
            `;

 tableData.innerHTML = head;
 tableData.innerHTML += data;
}
