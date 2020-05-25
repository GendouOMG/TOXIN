// var coll = document.getElementsByClassName("full-discription__unit-not-wrap");
// var i;

// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
            
//             content.style.maxHeight = "min-height";
//             content.style.Height = "height";
//             content.style.display = "block";
//             // content.style.maxHeight = content.scrollHeight + "px";
//         }
//     });
// }


// addEventListener

// var listToggle =document.querySelector('.hiddenCheckboxList__headline');
// var listContent =document.querySelector('.hiddenCheckboxList__hiddenList');

// var coll = document.getElementsByClassName("hiddenCheckboxList__headline");
// var coll = document.getElementsByClassName("hiddenCheckboxList__hiddenList");
// var i;

// listToggle.addEventListener('click', function() {
//     if(listContent.classList.contains('hiddenCheckboxList__hiddenList--opened')) {
//         listContent.classList.remove('hiddenCheckboxList__hiddenList--opened');
//         listToggle.classList.remove('hiddenCheckboxList__headline--opened');
//     } else {
//         listContent.classList.add('hiddenCheckboxList__hiddenList--opened');
//         listToggle.classList.add('hiddenCheckboxList__headline--opened');
//     }
// });


var listToggle = document.getElementsByClassName("hiddenCheckboxList__headline");
var i;

for (i = 0; i < listToggle.length; i++) {
    listToggle[i].addEventListener("click", function() {
        if(this.classList.contains('hiddenCheckboxList__headline--opened')) {
            this.classList.remove('hiddenCheckboxList__headline--opened');
        } else {
            this.classList.add('hiddenCheckboxList__headline--opened');
        }
    });
}
