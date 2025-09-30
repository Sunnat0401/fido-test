export function openSupportModal() {
    closeModal();
    const modal = document.createElement('div');
    modal.className = 'modal-overlay support-modal-overlay';
    modal.innerHTML = `
      <div class="modal support-modal">
        <button class="modal-close" id="closeSupportModal">&times;</button>
        <div class="modal-body">
          <div class="support-modal-img"></div>
          <h2 class="support-modal-title">Need some help?</h2>
          <p class="support-modal-desc">Describe your question and our specialists will answer you within 24 hours.</p>
          <form class="support-modal-form">
            <div class="support-form-group">
              <label>Request Subject</label>
              <select required>
                <option value="">Select subject</option>
                <option value="technical">Technical difficulties</option>
                <option value="design">Design</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="support-form-group">
              <label>Description</label>
              <textarea rows="3" required placeholder="Add some description of the request"></textarea>
            </div>
            <button type="submit" class="support-modal-btn">Send Request</button>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('.modal-close').onclick = closeModal;
    modal.querySelector('.support-modal-form').onsubmit = function(e) {
      e.preventDefault();
      closeModal();
      alert('Your request has been submitted!');
    };
  }
  export function closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.remove());
  }