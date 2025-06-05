let pesanInput = prompt('Silahkan masukkan pesan yang kamu suka!');
console.log(pesanInput);

// ----- !!! -----

// 'Cast' dan 'Parse'
{
  let pesanInput = prompt('Silahkan masukkan angka yang Anda suka!');
  let pesanInputConvertedToNumber = Number(pesanInput);
  console.log(
    `Tipe data dari \`pesanInputConvertedToNumber\` adalah ${typeof pesanInputConvertedToNumber}`
  );
}

// ----- !!! -----

let name = prompt('Silahkan masukkan nama Anda!', 'John Doe');
console.log(name);
