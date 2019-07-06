function translateRus(){
var rusMainInfo1 = '<p id = "rusMainInfo1" class="display-4 text-center">Привет, меня зовут Алексей Демочко <br> и я - веб-разработчик.</p>';
$("p#engMainInfo1").replaceWith(rusMainInfo1);
var rusMainInfo2 = '<p id = "rusMainInfo2" class="h2"> Я закончил Красноярский Государственный Педагогический Университет им. В.П. Астафьева и могу свободно общаться на английском, немецком и русском языках.</p>';
$("p#engMainInfo2").replaceWith(rusMainInfo2);
var rusMainInfo3 = '<p id = "rusMainInfo3" class="h1 text-center">Почему я?</p>';
$("p#engMainInfo3").replaceWith(rusMainInfo3);
var rusMainInfo4 = '<p id = "rusMainInfo4" class="h2">Я учился веб-программированию самостоятельно, что позволяет мне смотреть на процесс UI/UX дизайна свежим взглядом. Если Вы искали старательного, коммуникабельного сотрудника, который легко уживается с другими людьми в команде, быстро учится и может без проблем найти общий язык с клиентами - то Ваш поиск заканчивается здесь.</p>';
$("p#engMainInfo4").replaceWith(rusMainInfo4);
var rusTitle1 = '<p id="rusTitle1" class="card-title h3" align="center">МОИ ИНСТРУМЕНТЫ</p>'
$("p#engTitle1").replaceWith(rusTitle1);
var rusCard2 = '<div id="rusCard2" class="card-body"><p class="card-title h3" align="center">АДАПТИВНЫЙ ДИЗАЙН</p><p class="card-text"><ul><li><p class="h4">Адаптируется для любого разрешения</p></li><li><p class="h4">Понятный интерфейс</p></li><li><p class="h4">Для любых размеров экранов</p></li><li><p class="h4">Индивидуальный дизайн в сжатые сроки</p></li><li><p class="h4">Подходит для любого контента</p></li></ul></p></div>'
$("div#engCard2").replaceWith(rusCard2);
var rusCard3 = '<div id="rusCard3" class="card-body"><p class="card-title h3" align="center">КАЧЕСТВЕННЫЙ КОД</p><p class="card-text"><ul><li><p class="h4">Подробные комментарии</p></li><li><p class="h4">Легко читаемый код</p></li><li><p class="h4">Поддержка нескольких языков</p></li><li><p class="h4">Понятные имена классов и функций и переменных</p></li><li><p class="h4">Быстрая загрузка</p></li><li><p class="h4">Легкая поддержка кода</p></li><li><p class="h4">В ногу со временем</p></li></ul></p></div>'
$("div#engCard3").replaceWith(rusCard3);
var rusGalleryTitle = '<p id="rusGalleryTitle" class="display-4 text-center text-responsive">Мои работы</p>'
$("p#engGalleryTitle").replaceWith(rusGalleryTitle);
var rusFooterLink1 = '<p class="h3" id="rusFooterLink1">НАВЕРХ</p>'
$("p#engFooterLink1").replaceWith(rusFooterLink1);
var rusFooterLink2 = '<p class="h3" id="rusFooterLink2">РЕЗЮМЕ</p>'
$("p#engFooterLink2").replaceWith(rusFooterLink2);
var rusFooterContact = '<p class="h4" id="rusFooterContact">Свяжитесь со мной</p>'
$("p#engFooterContact").replaceWith(rusFooterContact);
//data-caption changing
$("a#engImageCaption1").attr("data-caption", "");
$("a#engImageCaption1").attr("data-caption", "Простая галерея с возможностью изменять размер изображения.");
$("a#engImageCaption1").attr("id", "").attr("id", "rusImageCaption1"); 
$("a#engImageCaption2").attr("data-caption", "");
$("a#engImageCaption2").attr("data-caption", "Онлайн-магазин, написанный на React.");
$("a#engImageCaption2").attr("id", "").attr("id", "rusImageCaption2"); 
$("a#engImageCaption3").attr("data-caption", "");
$("a#engImageCaption3").attr("data-caption", "Простой сайт-портфолио, написанный с использованием HTML/CSS, вертска из PSD-макета.");
$("a#engImageCaption3").attr("id", "").attr("id", "rusImageCaption3"); 
$("a#engImageCaption4").attr("data-caption", "");
$("a#engImageCaption4").attr("data-caption", "Простой вебсайт, на котором можно выбрать интересующий вас автомобиль, добавить его в базу, а также загрузить из базы уже доступные машины.");
$("a#engImageCaption4").attr("id", "").attr("id", "rusImageCaption4"); 
}


function translateEng(){
var engMainInfo1 = '<p id = "engMainInfo1" class="display-4 text-center">Hi, my name is Aleksei Demochko <br> and I am a Web-Developer.</p>';
$("p#rusMainInfo1").replaceWith(engMainInfo1);
var engMainInfo2 = '<p id = "engMainInfo2" class="h2"> I have graduated Krasnoyarsk State Pedagogical University in Siberia and can easily communicate in English, German and Russian.</p>';
$("p#rusMainInfo2").replaceWith(engMainInfo2);
var engMainInfo3 = '<p id = "engMainInfo3" class="h1 text-center">Why me?</p>';
$("p#rusMainInfo3").replaceWith(engMainInfo4);
var engMainInfo4 = '<p id = "engMainInfo4" class="h2">I am a self-taught web developer, who provides an up-to-date look at the process of UI/UX design. If you are looking for an easy-going diligent person, who is a fast learner, a team player and can naturally find a common ground with any clients - you search is over.</p>';
$("p#rusMainInfo4").replaceWith(engMainInfo4);
var engTitle1 = '<p id="engTitle1" class="card-title h3" align="center">MY STACK</p>'
$("p#rusTitle1").replaceWith(engTitle1);
var engCard2 = '<div id="engCard2" class="card-body"><p class="card-title h3" align="center">TOTALLY RESPONSIVE</p><p class="card-text"><ul><li><p class="h4">Adjusts for any resolution</p></li><li><p class="h4">Easy-to-use UI</p></li><li><p class="h4">Mobile-friendly</p></li><li><p class="h4">Custom design in a very short time</p></li><li><p class="h4">Suitable for any content</p></li></ul></p></div>'
$("div#rusCard2").replaceWith(engCard2);
var engCard3 = '<div id="engCard3" class="card-body"><p class="card-title h3" align="center">QUALITY CODE</p><p class="card-text"><ul><li><p class="h4">Commented code</p></li><li><p class="h4">Easy to read</p></li><li><p class="h4">Multi-language support</p></li><li><p class="h4">Obvious class/functions/variables names</p></li><li><p class="h4">Quick load times</p></li><li><p class="h4">Easy to support</p></li><li><p class="h4">In line with latest standards</p></li></ul></p></div>'
$("div#rusCard3").replaceWith(engCard3);
var engGalleryTitle = '<p id="engGalleryTitle" class="display-4 text-center text-responsive">My works</p>'
$("p#rusGalleryTitle").replaceWith(engGalleryTitle);
var engFooterLink1 = '<p class="h3" id="engFooterLink1">GO UP</p>'
$("p#rusFooterLink1").replaceWith(engFooterLink1);
var engFooterLink2 = '<p class="h3" id="engFooterLink2">RESUME</p>'
$("p#rusFooterLink2").replaceWith(engFooterLink2);
var engFooterContact = '<p class="h4" id="engFooterContact">Contact me</p>'
$("p#rusFooterContact").replaceWith(engFooterContact);
//data-caption changing
$("a#rusImageCaption1").attr("data-caption", "");
$("a#rusImageCaption1").attr("data-caption", "A simple image gallery with an adjustable size.");
$("a#rusImageCaption1").attr("id", "").attr("id", "engImageCaption1"); 
$("a#rusImageCaption2").attr("data-caption", "");
$("a#rusImageCaption2").attr("data-caption", "An online-shop made with React.");
$("a#rusImageCaption2").attr("id", "").attr("id", "engImageCaption2"); 
$("a#rusImageCaption3").attr("data-caption", "");
$("a#rusImageCaption3").attr("data-caption", "A typical portfolio website, HTML/CSS according to a PSD-mockup.");
$("a#rusImageCaption3").attr("id", "").attr("id", "engImageCaption3"); 
$("a#rusImageCaption4").attr("data-caption", "");
$("a#rusImageCaption4").attr("data-caption", "A simple website to choose a car, add a car to a table and work with data.");
$("a#rusImageCaption4").attr("id", "").attr("id", "engImageCaption4"); 
}
