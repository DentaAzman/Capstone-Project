const Community = {
  addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.getElementById('comments-container');

    console.log(commentInput, commentsContainer);

    if (commentInput.value.trim() === '') {
      alert('Please write a comment.');
      return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const commentContent = document.createElement('div');
    commentContent.classList.add('comment-content');
    commentContent.textContent = commentInput.value;

    const replyButton = document.createElement('button');
    replyButton.classList.add('reply-button');
    replyButton.textContent = 'Reply';
    replyButton.onclick = function () {
      const replyInput = document.createElement('textarea');
      replyInput.classList.add('form-control', 'mb-2');
      replyInput.rows = '2';
      replyInput.placeholder = 'Write your reply here...';

      const submitReplyButton = document.createElement('button');
      submitReplyButton.classList.add('btn', 'btn-success', 'mb-2');
      submitReplyButton.textContent = 'Submit Reply';
      submitReplyButton.onclick = function () {
        if (replyInput.value.trim() === '') {
          alert('Please write a reply.');
          return;
        }

        const replyDiv = document.createElement('div');
        replyDiv.classList.add('reply');

        const replyContent = document.createElement('div');
        replyContent.classList.add('comment-content');
        replyContent.textContent = replyInput.value;

        replyDiv.appendChild(replyContent);

        const repliesContainer =
          replyButton.nextElementSibling || document.createElement('div');
        repliesContainer.classList.add('replies');
        repliesContainer.appendChild(replyDiv);

        commentDiv.appendChild(repliesContainer);
        replyInput.remove();
        submitReplyButton.remove();
      };

      commentDiv.appendChild(replyInput);
      commentDiv.appendChild(submitReplyButton);
    };

    commentDiv.appendChild(commentContent);
    commentDiv.appendChild(replyButton);
    commentsContainer.appendChild(commentDiv);

    commentInput.value = '';
  },

  async render() {
    return `
      <section class="comment-section">
        <h2>Comments</h2>
        <div class="comment-form mb-4">
          <textarea id="comment-input" class="form-control mb-2" rows="3" placeholder="Write your comment here..."></textarea>
          <button id="post-comment-button" class="btn btn-success">Post Comment</button>
        </div>
        <div id="comments-container">
          <!-- Comments will be dynamically added here -->
        </div>
      </section>
    `;
  },

  afterRender() {
    const postCommentButton = document.getElementById('post-comment-button');
    postCommentButton.addEventListener('click', () => {
      this.addComment();
    });
  },
};

export default Community;
