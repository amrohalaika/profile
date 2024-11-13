let menuIcon = document.querySelector('#menu-icon');  
let closeIcon = document.querySelector('#close-icon');  
let navbar = document.querySelector('.navbar');  

menuIcon.onclick = () => {  
    menuIcon.style.display = 'none'; // إخفاء أيقونة القائمة  
    closeIcon.style.display = 'block'; // إظهار علامة X  
    navbar.classList.add('active'); // إظهار القائمة  
};  

closeIcon.onclick = () => {  
    closeIcon.style.display = 'none'; // إخفاء علامة X  
    menuIcon.style.display = 'block'; // إظهار أيقونة القائمة مرة أخرى  
    navbar.classList.remove('active'); // إخفاء القائمة  
};  

const links = document.querySelectorAll('.navbar a');  

links.forEach(link => {  
    link.addEventListener('click', () => {  
        links.forEach(l => l.classList.remove('active')); // إزالة الفئة النشطة من جميع الروابط  
        link.classList.add('active'); // إضافة الفئة النشطة للرابط الذي تم الضغط عليه  
    });  
});