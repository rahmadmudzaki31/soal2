function validasi(){
  var input1 = document.getElementById("hallo jesika24 selamat datang!").value;
  var input2 = document.getElementById("hallo anggun selamat datang!").value;
  var input3 = document.getElementById("hallo ** selamat datang!").value;
  var input4 = document.getElementById("hallo Mariage889120! selamat datang!").value;
  if (input1 != "" && input2!="" && input3 !="") {
    return true;
  }else{
    alert('system kami menolak imputan berisi angka 23')
  }
}