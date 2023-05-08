
var $ = (id) => document.getElementById(id);
main();

function main() {
  // Generate a password on button click
  $("generateButton").addEventListener("click", () => {
    let password = generatePassword();
    console.log(password);
    $("password").value = password;
  });

  // Update password params
  $("passwordLength").addEventListener("input", () => {
    let passwordLength = 16;
    $("passwordLengthText").innerText = $("passwordLength").value;
  });

  $("passwordMaxLength").addEventListener('change', () => {    
    $("passwordLengthText").innerText = $("passwordMaxLength").value;
    $("passwordLength").value         = $("passwordMaxLength").value / 2;
    $("passwordLength").max           = $("passwordMaxLength").value;
    $("passwordLengthText").innerText = $("passwordLength").value;
  });

  // Copy password to clipboard on button click 
  $("copyButton").addEventListener("click", async () => {
    let text = $('password').value;    
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard ');
    } catch (err) {
      alert('Failed to copy: ' + err);
      console.error('Failed to copy: ', err);
    }
  });
}

function generatePassword() {
  let passwordLength = $("passwordLength").value; //$("passwordLength").val();  
  let includeUppercase = $("uppercaseCheckbox").checked; //$("uppercaseCheckbox").prop("checked");  
  let includeLowercase = $("lowercaseCheckbox").checked; //$("lowercaseCheckbox").prop("checked");
  let includeNumbers = $("numbersCheckbox").checked; //$("numbersCheckbox").prop("checked");
  let includeSymbols = $("symbolsCheckbox").checked; //$("symbolsCheckbox").prop("checked");

  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let numberChars = "0123456789";
  let symbolChars = "!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/";
  let chars = "";
  if (includeUppercase) chars += uppercaseChars;
  if (includeLowercase) chars += lowercaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSymbols) chars += symbolChars;

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}
