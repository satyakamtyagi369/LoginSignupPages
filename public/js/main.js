document.getElementById('signup-form').addEventListener('submit',function(e){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username.length<5){
        alert('Username must be at least 5 characters long.');
        e.preventDefault();
    }
    if(password.length<6){
        alert('Password must be at least 6 characters long.');
        e.preventDefault();
    }
});