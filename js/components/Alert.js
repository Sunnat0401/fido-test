export function Alert({text}) {
    const div = document.createElement('div');
    div.className = 'alert';
    div.textContent = text;
    return div;
}