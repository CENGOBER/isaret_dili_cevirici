function showSigns() {
    const input = document.getElementById('wordInput').value.toLowerCase();
    const signContainer = document.getElementById('signContainer');

    // Önceki görselleri temizle
    signContainer.innerHTML = '';

    // Geçerli karakterler listesi (Türkçe + İngilizce)
    const validChars = 'abcçdefgğhıijklmnoöprsştuüvyzqwx';

    // Her karakter için işlem yap
    for (let char of input) {
        const img = document.createElement('img');

        if (char === ' ') {
            img.src = `bosluk.png`;
            img.alt = 'Boşluk';
        } else if (validChars.includes(char)) {
            img.src = `image${char}.png`;
            img.alt = char;
        } else {
            continue; // Harf ya da boşluk değilse gösterme
        }

        signContainer.appendChild(img);
    }
}
