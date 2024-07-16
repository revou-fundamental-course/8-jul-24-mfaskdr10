const hitungBMIbtn = document.getElementById("hitung-bmi");
const resetBtn = document.getElementById("reset");
const hasil = document.getElementById("bmi");
const keterangan = document.getElementById("keterangan");
const statusBMI = document.getElementById("status");
const jenisKelamin = document.getElementsByName("jenis-kelamin");

hitungBMIbtn.addEventListener("click", function (e) {
  e.preventDefault();

  const beratBadan = document.getElementById("berat-badan").value;
  const tinggiBadan = document.getElementById("tinggi-badan").value;

  let bmi = (beratBadan / ((tinggiBadan * tinggiBadan) / 10000)).toFixed(1);
  hasil.innerHTML = bmi;

  let status = "";
  if (bmi <= 18.5) {
    status = "Kekurangan berat badan";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    status = "Normal / Ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    status = "Kelebihan berat badan";
  } else {
    status = "Kegemukan / Obesitas";
  }

  keterangan.innerHTML = status;

  const usia = document.getElementById("usia").value;

  for (i = 0; i < jenisKelamin.length; i++) {
    if (jenisKelamin[i].checked) {
      statusBMI.innerHTML = `Anda berjenis kelamin ${jenisKelamin[i].value} dan berusia ${usia}. Anda berada dalam kategori ${status}`;
    }
  }

  console.log(jenisKelamin);
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  hasil.innerHTML = "00.0";
  document.getElementById("berat-badan").value = "";
  document.getElementById("tinggi-badan").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("status").innerHTML = "";
  document.getElementById("keterangan").innerHTML =
    "Anda belum memasukkan nilai berat badan dan tinggi badan";

  for (i = 0; i < jenisKelamin.length; i++) {
    jenisKelamin[i].checked = false;
  }
});
