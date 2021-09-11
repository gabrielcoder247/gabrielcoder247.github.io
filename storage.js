function storeForm() {
    const form = document.getElementById('form');
    const name = form.name.value;
    const email = form.email.value;
    const comment = form.comment.value;
    const myStorage = {
        userName: name,
        userEmail: email,
        userComment: comment,
    };
    localStorage.setItem('storage', JSON.stringify(myStorage));
}