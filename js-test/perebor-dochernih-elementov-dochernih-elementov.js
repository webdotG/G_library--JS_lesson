const html = document.documentElement;
for (let i = 0; i < html.children.length; i++) {
    const child = html.children[i];
    console.log(child.tagName.toLowerCase());
    for (let j = 0; j < child.children.length; j++) {
        const innerChild = child.children[j];
        console.log('|---' + innerChild.tagName.toLowerCase());
    }
}
/*
Скрипт в цикле перебирает все дочерние элементы HTML-узла — documentElement.children.
У каждого ребёнка в свою очередь перебирает его дочерние элементы
и выводит имена тегов, приведённые к нижнему регистру.
 */
