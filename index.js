document.write("<h1>Hello from JS</h1>");

const age = prompt('Сколько вам лет?');

let access='';

if (age > 18) {
    access = "Доступ разрешен"
} else {
    access = "Доступ запрещен"
}

document.write(`<h4>${access}</h4>`);