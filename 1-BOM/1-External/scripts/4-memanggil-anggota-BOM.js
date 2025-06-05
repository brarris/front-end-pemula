// cara pertama
window.alert('Hello World');

// // cara kedua
alert('Halo semuanya!');

// ----- !!! -----
/**
 * harap hati-hati jika kita mendefiniskan sebuah method dengan nama yang sama
 * dengan method milik 'window', akan menimpa pada block scope.
 */
function alert(nama) {
  console.log('Hati-hati, ' + nama);
}

// 1. Output di bawah akan tercetak ke console browser
// alert('Chewbacca'); // Output: Hati-hati, Chewbacca

// 2. Output di bawah akan tetap tercetak pada console browser
// window.alert('Chewbacca'); // Output: Hati-hati, Chewbacca
