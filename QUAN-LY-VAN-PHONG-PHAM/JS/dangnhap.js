const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (password.length === 0) {
        alert("Vui lòng nhập mật khẩu!");
        return;
    }

    alert(
        "Biểu mẫu đăng nhập hợp lệ!\n" +
        "Email: " + email + "\n" +
        "Đây là bản demo, chưa xác thực tài khoản."
    );
});
