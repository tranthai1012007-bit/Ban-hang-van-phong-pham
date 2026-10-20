const thuMuc = new URL(".", document.currentScript.src).href;   
const goc    = new URL("../", document.currentScript.src).href; 
const Thanhcongcu= `
<div class="top-bar"></div>
    <header>
        <div class="header-logo">
            <a href="${goc}trangchu.html" class="logo"><img src="${thuMuc}logooo.jpeg" alt="Logo"/></a>
        </div>
        <div class="header-center">
            <form class="search-form" action="/search" method="get">
                <input type="text" name="q" placeholder="Tìm kiếm sản phẩm...." aria-label="Tìm kiếm sản phẩm">
                <button type="submit" aria-label="Tìm kiếm">
                    <i class="fas fa-search"></i>
                </button>
                <ul id="suggestions"></ul>
            </form>
            <ul class="perks">
                <li class="perk"><i class="fas fa-medal"></i>Sản phẩm chính hãng</li>
                <li class="perk"><i class="fas fa-truck"></i>Hỗ trợ vận chuyển</li>
            </ul>
        </div>
        <div class="header-actions">
            <a href="${goc}Giohang.html" class="action"><span class="action_icon"><i class="fas fa-list-check"></i></span>Kiểm tra<br>đơn hàng</a>
            <a href="${goc}dangnhap.html" class="action" id="nutTaiKhoan"><span class="action_icon"><i class="fas fa-user-check"></i></span>Đăng nhập/<br>Đăng kí</a>
            <a href="${goc}Giohang.html" class="action"><span class="action_icon"><i class="fas fa-cart-shopping"></i></span>Giỏ hàng</a>
        </div>
    </header>
    <nav>
        <ul class="menu">
            <li><a href="${goc}trangchu.html">TRANG CHỦ</a></li>
            <li><a href="#">BÚT VIẾT<i class="fas fa-chevron-down"></i></a>
                <ul>
                    <li><a href="#">Bút bi</a></li>
                    <li><a href="#">Bút bi lông</a></li>
                    <li><a href="#">Bút mực</a></li>
                    <li><a href="#">Bút máy</a></li>
                </ul>
            </li>
            <li><a href="#">VĂN PHÒNG PHẨM<i class="fas fa-chevron-down"></i></a>
                <ul>
                    <li><a href="#">NEW ARRIVALS</a></li>
                    <li><a href="#">Pin</a></li>
                    <li><a href="#">Máy tính tay văn phòng</a></li>
                    <li><a href="#">Băng keo</a></li>
                    <li><a href="#">BST Bút Hoshi - Công nghệ Nhật Bản</a></li>
                </ul>
            </li>
            <li><a href="#">DỤNG CỤ HỌC TẬP<i class="fas fa-chevron-down"></i></a>
                <ul>
                    <li><a href="#">Sách giáo khoa</a></li>
                    <li><a href="#">Máy tính khoa học</a></li>
                    <li><a href="#">Balo học sinh &amp; Cặp chống gù</a></li>
                    <li><a href="#">Thước-Compa-Phấn</a></li>
                    <li><a href="#">Bảng học sinh</a></li>
                    <li><a href="#">Vở viết-Bọc,Nhãn vở</a></li>
                </ul>
            </li>
            <li><a href="#" class="upper">BÚT CAO CẤP<i class="fas fa-chevron-down"></i></a>
                <ul>
                    <li><a href="#">Bút cao cấp Binzer</a></li>
                    <li><a href="#">Bộ sưu tập Legacy</a></li>
                    <li><a href="#">Bộ sưu tập Touch</a></li>
                    <li><a href="#">Bộ sưu tập Premium</a></li>
                    <li><a href="#">Dưới 1 triệu</a></li>
                    <li><a href="#">Từ 1 - 3 triệu</a></li>
                </ul>
            </li>
            <li><a href="#">GIẤY IN<i class="fas fa-chevron-down"></i></a>
                <ul>
                    <li><a href="#">Giấy in A4</a></li>
                    <li><a href="#">Giấy in A3</a></li>
                    <li><a href="#">Giấy in A5</a></li>
                    <li><a href="#">Giấy in A6</a></li>
                    <li><a href="#">Copy Plus</a></li>
                    <li><a href="#">Combo giấy văn phòng</a></li>
                </ul>
            </li>
            <li><a href="#" class="hot">Top bán chạy</a></li>
        </ul>
    </nav>
    `;
    //Phần đăng nhập
    document.body.insertAdjacentHTML("afterbegin", Thanhcongcu);
    const taiKhoan = localStorage.getItem("taiKhoan");
const nutTaiKhoan = document.getElementById("nutTaiKhoan");

if (taiKhoan && nutTaiKhoan) {
    const tenHienThi = taiKhoan.split("@")[0];  

    nutTaiKhoan.href = "#";
    nutTaiKhoan.title = taiKhoan;
    nutTaiKhoan.innerHTML =
        '<span class="action_icon"><i class="fas fa-user-check"></i></span>' +
        tenHienThi + "<br>(Đăng xuất)";

    nutTaiKhoan.addEventListener("click", function (e) {
        e.preventDefault();
        if (confirm("Bạn muốn đăng xuất?")) {
            localStorage.removeItem("taiKhoan");
            window.location.reload();
        }
    });alert("taiKhoan = " + taiKhoan + "\nnutTaiKhoan = " + nutTaiKhoan);
}