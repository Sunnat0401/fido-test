// export function NextPrevButtons({
//     onPrev,
//     onNext,
//     nextText = "Next Step →",
//     prevText = "← Previous",
//     nextDisabled = false,
//     prevDisabled = false,
//     style = "",
// }) {
//     const wrapper = document.createElement("div");
//     wrapper.style = style || 'display:flex;justify-content:space-between;align-items:center;margin-top:46px;';

//     const prevBtn = document.createElement('button');
//     prevBtn.className = 'button link';
//     prevBtn.type = 'button';
//     prevBtn.innerHTML = prevText;
//     prevBtn.style = 'font-size:16px;';
//     prevBtn.disabled = !!prevDisabled;
//     prevBtn.onclick = onPrev;

//     const nextBtn = document.createElement('button');
//     nextBtn.className = 'button primary';
//     nextBtn.type = 'submit';
//     nextBtn.innerHTML = nextText;
//     nextBtn.style = 'font-size:16px;';
//     nextBtn.disabled = !!nextDisabled;
//     nextBtn.onclick = onNext;

//     wrapper.appendChild(prevBtn);
//     wrapper.appendChild(nextBtn);

//     return wrapper;
// }

export function NextPrevButtons({
    onPrev,
    onNext,
    nextText = "Next Step →",
    prevText = "← Previous",
    nextDisabled = false,
    prevDisabled = false,
    style = "",
}) {
    const wrapper = document.createElement("div");
    wrapper.className = "npb-wrapper";
    // Do not use inline style, all layout handled by .npb-wrapper CSS

    const prevBtn = document.createElement('button');
    prevBtn.className = 'npb-btn npb-link';
    prevBtn.type = 'button';
    prevBtn.innerHTML = prevText;
    prevBtn.disabled = !!prevDisabled;
    prevBtn.onclick = onPrev;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'npb-btn npb-primary';
    nextBtn.type = 'submit';
    nextBtn.innerHTML = nextText;
    nextBtn.disabled = !!nextDisabled;
    nextBtn.onclick = onNext;

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);

    return wrapper;
}