// Yeni kelime listesi
const words = [
    "araba", "ben", "ev", "gelmek", "gitmek", "kitap", "koşmak", "okul", "masa",
    "evet", "hayır", "sen", "siz", "o", "onlar", "gece", "gündüz", "öğretmen", 
    "öğrenci", "yemek", "su", "bilgisayar", "telefon", "aile", "arkadaş", "yaz", 
    "kış", "iyi", "kötü", "hasta", "sağlıklı"
  ];
  
  // Sayfa yüklendiğinde butonları oluştur
  window.onload = function() {
    const wordList = document.getElementById('wordList');
    words.sort(); // Alfabetik sıraya sok
  
    words.forEach(word => {
      const button = document.createElement('button');
      button.innerText = word.charAt(0).toUpperCase() + word.slice(1); // İlk harfi büyük yap
      button.onclick = () => showWord(word);
      wordList.appendChild(button);
    });
  };
  
  function showWord(word) {
      const container = document.getElementById('selectedImage');
      const selectedWord = document.getElementById('selectedWord');
  
      // Seçilen kelimeyi yaz
      selectedWord.innerText = `Seçilen: ${word.charAt(0).toUpperCase() + word.slice(1)}`;
  
      // Resmi göster
      container.innerHTML = '';
      const img = document.createElement('img');
      img.src = `${word}.png`;
      img.alt = word;
      container.appendChild(img);
  }
  