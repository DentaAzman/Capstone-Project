import DestinationSource from '../../../data/destination-source';
import API_ENDPOINT from '../../../globals/api-endpoint';

const Community = {
  async addComment() {
    const commentInput = document.getElementById('comment-input');
    const nameInput = document.getElementById('name-input');
    const commentsContainer = document.getElementById('comments-container');

    if (commentInput.value.trim() === '' || nameInput.value.trim() === '') {
      alert('Please write a comment and enter your name.');
      return;
    }

    const newComment = {
      nama: nameInput.value,
      body: commentInput.value,
    };

    const response = await fetch(API_ENDPOINT.THREADS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    });

    if (response.ok) {
      const data = await response.json();
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');

      const commentContent = document.createElement('div');
      commentContent.classList.add('comment-content');
      commentContent.textContent = `${nameInput.value}: ${commentInput.value}`;

      commentDiv.appendChild(commentContent);
      commentsContainer.appendChild(commentDiv);

      commentInput.value = '';
      nameInput.value = '';

      alert('Comment posted successfully!');
      location.reload();
    } else {
      alert('Failed to post comment.');
    }
  },

  async render() {
    return `
      <section class="tourists-problem-section">
        <h2>Masalah Lingkungan</h2>
        <div class="text-container">
          <h3>Sampah</h3>
          <p>
            Kepala Dinas Lingkungan Hidup (DLHK) Bali Gede Suarjana mengakui sampah merupakan isu lingkungan utama yang saat ini sedang dihadapi Pulau Dewata. Masih banyak sampah yang berserakan dari turis/wisatawan yang datang ke Bali.
          </p>

          <h3>Pendatang</h3>
          <p>
            Banyakanya Pendatang dari luar membuat daerah canggu tidak terasa seperti bali dikarenakan budaya luar yang masuk sanagatlah Keras.
          </p>
        </div>

        <div class="image-container">
        
        </div>
      </section>

      <section class="comment-section">
        <h2>Comments</h2>
        <div class="comment-form mb-4">
          <input type="text" id="name-input" class="form-control mb-2" placeholder="Your Name">
          <textarea id="comment-input" class="form-control mb-2" rows="3" placeholder="Write your comment here..."></textarea>
          <button id="post-comment-button" class="btn btn-success">Post Comment</button>
        </div>
        <div id="comments-container" class="comment-container">
          <!-- Comments will be dynamically added here -->
        </div>
      </section>
    `;
  },

  async afterRender() {
    const postCommentButton = document.getElementById('post-comment-button');
    postCommentButton.addEventListener('click', () => {
      this.addComment();
    });

    const commentsContainer = document.getElementById('comments-container');
    const threads = await DestinationSource.threadsCommunity();

    threads.forEach((thread) => {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');

      const nameDiv = document.createElement('div');
      nameDiv.classList.add('comment-name');
      nameDiv.textContent = `${thread.nama}`;

      const bodyDiv = document.createElement('div');
      bodyDiv.classList.add('comment-body');
      bodyDiv.textContent = `${thread.body}`;

      const createdAtDiv = document.createElement('p');
      createdAtDiv.classList.add('comment-created-at');
      createdAtDiv.textContent = `${new Date(
        thread.createdAt
      ).toLocaleString()}`;

      commentDiv.appendChild(nameDiv);
      commentDiv.appendChild(bodyDiv);
      commentDiv.appendChild(createdAtDiv);
      commentsContainer.appendChild(commentDiv);
    });
  },
};

export default Community;
