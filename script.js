// script.js 
document.querySelector('.main-content').style.display = 'grid';

document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent.includes('❤️')) {
            const count = parseInt(button.textContent.split(' ')[1]);
            button.textContent = `❤️ ${count + 1}`;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    loadUserPosts();
    
    document.getElementById('createPostBtn').addEventListener('click', function () {
        const postPopup = document.getElementById('postPopup');
        postPopup.style.display = 'block';
        centerPopup(postPopup);
    });

    document.getElementById('closePopupBtn').addEventListener('click', function () {
        document.getElementById('postPopup').style.display = 'none';
    });

    document.getElementById('submitPostBtn').addEventListener('click', function () {
        const userName = document.getElementById('userName').value.trim();
        const description = document.getElementById('postDescription').value.trim();
        const imageInput = document.getElementById('imageUpload');

        if (userName === '' || !imageInput.files.length || description === '') {
            alert('Please fill out all fields and upload an image.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = e.target.result;
            addPost(userName, description, imageUrl);
            savePost(userName, description, imageUrl);
            document.getElementById('postPopup').style.display = 'none';
            document.getElementById('userName').value = '';
            document.getElementById('postDescription').value = '';
            document.getElementById('imageUpload').value = '';
        };
        reader.readAsDataURL(imageInput.files[0]);
    });

    function centerPopup(popupElement) {
        popupElement.style.position = 'fixed';
        popupElement.style.left = '50%';
        popupElement.style.top = '50%';
        popupElement.style.transform = 'translate(-50%, -50%)';
    }

    function addPost(userName, description, imageUrl, postId) {
        const newPost = `
            <div class="post-card" data-id="${postId}">
                <div class="post-header">
                    <div class="post-meta">
                        <strong>${userName}</strong> · Your Post
                    </div>
                </div>
                <p>${description}</p>
                <div class="post-image">
                    <img src="${imageUrl}" alt="User Uploaded Image" style="width: 100%; border-radius: 8px;">
                </div>
                <div class="post-actions">
                    <div class="action-button">❤️ 0</div>
                    <div class="action-button">💬 0</div>
                    <div class="action-button">Share</div>
                    <button class="delete-post-btn">🗑 Delete</button>
                </div>
            </div>
        `;
        document.querySelector('.sidebar').insertAdjacentHTML('afterbegin', newPost);
    }

    function savePost(userName, description, imageUrl) {
        const posts = JSON.parse(localStorage.getItem('userPosts')) || [];
        const postId = Date.now().toString();
        posts.push({ id: postId, userName, description, imageUrl });
        localStorage.setItem('userPosts', JSON.stringify(posts));
    }

    function loadUserPosts() {
        const posts = JSON.parse(localStorage.getItem('userPosts')) || [];
        posts.forEach(post => {
            addPost(post.userName, post.description, post.imageUrl, post.id);
        });
    }

    document.querySelector('.sidebar').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-post-btn')) {
            const postCard = event.target.closest('.post-card');
            const postId = postCard.getAttribute('data-id');
            postCard.remove();
            removePostFromStorage(postId);
        }
    });

    function removePostFromStorage(postId) {
        let posts = JSON.parse(localStorage.getItem('userPosts')) || [];
        posts = posts.filter(post => post.id !== postId);
        localStorage.setItem('userPosts', JSON.stringify(posts));
    }
});
