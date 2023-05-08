
document.addEventListener("DOMContentLoaded", () => {
  main();
});

let $ = document.getElementById;

function main() {
  console.log('main');
  
   $("generateButton").addEventListener("click",function () {
    let password = generatePassword();
    console.log(password);
    //$("password").val(password));
    
   });
   return;
  // Generate a password on button click
  $("#generateButton").on("click", function () {
    var password = generatePassword();
    $("#password").val(password);
  });

  // Copy password to clipboard on button click
  $("#copyButton").on("click", function () {
    var passwordInput = document.getElementById("password");
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    document.execCommand("copy");

    $("#copyButton").text("Copied!");
    setTimeout(function () {
      $("#copyButton").text("Copy");
    }, 1500);
  });

  // Update password length label
  $("#passwordLength").on("input", function () {
    var passwordLength = $(this).val();
    $("#passwordLengthText").text(passwordLength);
  });

  // Preloader
  setTimeout(function () {
    $(".preloader").fadeToggle();
  }, 600);
}

function generatePassword() {
  var passwordLength   = $("passwordLength"); //$("passwordLength").val();
  var includeUppercase = $("uppercaseCheckbox");//$("uppercaseCheckbox").prop("checked");
  var includeLowercase = $("lowercaseCheckbox");//$("lowercaseCheckbox").prop("checked");
  var includeNumbers   = $("numbersCheckbox");//$("numbersCheckbox").prop("checked");
  var includeSymbols   = $("symbolsCheckbox");//$("symbolsCheckbox").prop("checked");
  return 'password';
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var symbolChars = "!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/";

  var chars = "";
  if (includeUppercase) chars += uppercaseChars;
  if (includeLowercase) chars += lowercaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSymbols) chars += symbolChars;

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

