const loginForm = document.getElementById("loginForm");

// Tài khoản mẫu dùng cho đăng nhập tĩnh
const demoEmail = "demo@webvpp.com";
const demoPassword = "VppDemo123!";

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy thông tin người dùng nhập
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Kiểm tra email và mật khẩu
    if (
        email.toLowerCase() === demoEmail &&
        password === demoPassword
    ) {
        alert("Đăng nhập thành công! Chào mừng bạn đến với WebVPP.");
    } else {
        alert("Email hoặc mật khẩu không chính xác. Vui lòng thử lại!");
    }
});