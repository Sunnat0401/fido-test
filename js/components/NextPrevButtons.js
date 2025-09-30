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