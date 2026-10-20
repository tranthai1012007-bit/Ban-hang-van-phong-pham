const loginForm = document.getElementById("loginForm");

const demoEmail = "demo@webvpp.com";
const demoPassword = "VppDemo123!";

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (
        email.toLowerCase() === demoEmail &&
        password === demoPassword
    ) {
        localStorage.setItem("taiKhoan", email.toLowerCase());
        alert("Đăng nhập thành công! Chào mừng bạn đến với WebVPP.");
        window.location.href = "trangchu.html";
    } else {
        alert("Email hoặc mật khẩu không chính xác. Vui lòng thử lại!");
    }
});