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

    try {
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
        commentDiv.setAttribute('data-aos', 'fade-up'); // Add AOS attribute

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('comment-name');
        nameDiv.textContent = data.nama || newComment.nama; // Fallback to newComment.nama

        const bodyDiv = document.createElement('div');
        bodyDiv.classList.add('comment-body');
        bodyDiv.textContent = data.body || newComment.body; // Fallback to newComment.body

        const createdAtDiv = document.createElement('p');
        createdAtDiv.classList.add('comment-created-at');
        createdAtDiv.textContent = `${new Date(
          data.createdAt || Date.now()
        ).toLocaleString()}`; // Fallback to current date

        commentDiv.appendChild(nameDiv);
        commentDiv.appendChild(bodyDiv);
        commentDiv.appendChild(createdAtDiv);
        commentsContainer.appendChild(commentDiv);

        // Refresh AOS to apply animations on dynamically added content
        AOS.refresh();

        commentInput.value = '';
        nameInput.value = '';

        alert('Comment posted successfully!');
      } else {
        alert('Failed to post comment.');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('An error occurred while posting the comment.');
    }
  },

  async render() {
    return `
      <section class="tourists-problem-section" data-aos="fade-up">
        <h2 tabindex="0">Masalah Lingkungan</h2>
        <div class="main-information">
          <div class="text-container">
            <h3 tabindex="0">Sampah</h3>
            <p tabindex="0">
              Kepala Dinas Lingkungan Hidup (DLHK) Bali Gede Suarjana mengakui sampah merupakan isu lingkungan utama yang saat ini sedang dihadapi Pulau Dewata. Masih banyak sampah yang berserakan dari turis/wisatawan yang datang ke Bali.
            </p>

            <h3 tabindex="0">Pendatang</h3>
            <p tabindex="0">
              Kehadiran banyak pendatang dari luar negeri telah membuat daerah wisata di Bali kehilangan nuansa tradisionalnya, akibat masuknya berbagai macam budaya asing. Budaya lokal Bali yang kaya dan unik mulai tergeser oleh pengaruh budaya luar, mengubah wajah dan suasana Bali yang dikenal dengan kearifan lokalnya. Ini tidak hanya berdampak pada kehidupan sehari-hari masyarakat Bali, tetapi juga mengubah pengalaman wisatawan yang datang mencari keaslian budaya Bali. Oleh karena itu, penting bagi kita untuk menjaga dan melestarikan warisan budaya Bali agar tidak hilang ditelan arus globalisasi.
            </p>
          </div>

          <div class="image-container" data-aos="fade-up">
            <img src="/images/image-community.png" alt="gambar wisatawan yang tidak melestarikan lingkungan" tabindex="0" />
          </div>
        </div>

        <div class="sub-information">
          <h4 class="subtitle" tabindex="0">Perilaku yang Harus Dihindari</h4>
          <p tabindex="0">
            Berikut ini beberapa macam perilaku yang harus dihindari saat berwisata di Bali:
          </p>
          <ol>
            <li tabindex="0"><b>Membuang Sampah Sembarangan.</b>
              <p tabindex="0">
              Wisatawan sering kali membuang sampah sembarangan di pantai, gunung, dan tempat wisata lainnya. Ini termasuk botol plastik, kaleng, bungkus makanan, dan puntung rokok. Dampaknya, sampah plastik dan non-biodegradable lainnya mencemari tanah dan air. Di laut, sampah plastik dapat membahayakan kehidupan laut seperti penyu dan ikan. Sampah yang menumpuk merusak keindahan alam dan mengurangi pengalaman wisatawan lainnya yang datang untuk menikmati keindahan alam.
              </p>
            </li>
            <li tabindex="0"><b>Menggunakan Plastik Sekali Pakai.</b>
              <p tabindex="0">
              Banyak wisatawan menggunakan botol plastik, kantong plastik, dan alat makan sekali pakai yang kemudian dibuang begitu saja. Plastik yang dibuang dapat bertahan selama ratusan tahun di lingkungan, menyebabkan pencemaran tanah dan laut. Plastik yang terurai menjadi mikroplastik dapat memasuki rantai makanan dan membahayakan kesehatan manusia dan hewan. Penggunaan plastik sekali pakai juga meningkatkan volume sampah yang sulit dikelola.
              </p>
            </li>
            <li tabindex="0"><b>Mengganggu Satwa Liar.</b>
              <p tabindex="0">
              Wisatawan sering kali mendekati, memberi makan, atau bahkan memegang satwa liar seperti monyet di Ubud atau lumba-lumba di Lovina. Interaksi manusia dapat mengubah perilaku alami satwa liar, membuat mereka bergantung pada manusia untuk makanan. Selain itu, interaksi semacam ini dapat menyebabkan stres dan penyakit pada hewan. Mengganggu satwa liar juga merusak ekosistem alami yang penting untuk keseimbangan lingkungan.
              </p>
            </li>
            <li tabindex="0"><b>Merusak Terumbu Karang.</b>
              <p tabindex="0">
              Aktivitas menyelam dan snorkeling yang tidak bertanggung jawab, seperti menginjak atau menyentuh terumbu karang, mengambil bagian dari karang sebagai suvenir, dapat menyebabkan kerusakan besar. Terumbu karang sangat sensitif dan dapat rusak bahkan oleh sentuhan ringan, yang merusak ekosistem laut yang kompleks dan mempengaruhi kehidupan laut yang bergantung padanya. Kehilangan terumbu karang juga mengurangi daya tarik wisata bawah laut Bali, yang merupakan salah satu daya tarik utama pulau ini.
              </p>
            </li>
            <li tabindex="0"><b>Meninggalkan Jejak di Alam.</b>
              <p tabindex="0">
              Wisatawan yang melakukan hiking atau trekking tanpa mematuhi aturan sering kali membuat jalur baru, memetik tumbuhan liar, atau meninggalkan sampah. Tindakan ini merusak ekosistem alami dan habitat satwa liar. Selain itu, praktik-praktik semacam ini menyebabkan erosi tanah dan degradasi lingkungan. Meninggalkan jejak yang tidak perlu di alam merusak keindahan dan keutuhan ekosistem yang seharusnya dilindungi.
              </p>
            </li>
          </ol>
        </div>
        
      </section>

      <section class="comment-section" data-aos="fade-up">
        <h2 tabindex="0">Bagikan Pengalaman Anda!</h2>
        <div class="comment-form mb-4">
          <input type="text" id="name-input" class="form-control mb-2" placeholder="Nama Anda" tabindex="0">
          <textarea id="comment-input" class="form-control mb-2" rows="3" placeholder="Tuliskan pengalaman atau komentar Anda..." tabindex="0"></textarea>
          <button id="post-comment-button" class="btn btn-success">Kirim Komentar</button>
        </div>
        <div id="comments-container" class="comment-container" data-aos="fade-up" tabindex="0">
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
      commentDiv.setAttribute('data-aos', 'fade-up'); // Add AOS attribute

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

    // Refresh AOS to apply animations on initial load
    AOS.init({
      once: true,
      duration: 1000,
    });
  },
};

export default Community;
