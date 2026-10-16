const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (fullname.length < 2) {
        alert("Họ và tên phải có ít nhất 2 ký tự!");
        return;
    }

    if (!/^0\d{9}$/.test(phone)) {
        alert("Số điện thoại phải gồm 10 chữ số và bắt đầu bằng số 0!");
        return;
    }

    if (password.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    alert("Thông tin đăng ký hợp lệ! Đây mới là bản demo, tài khoản chưa được lưu.");
});
