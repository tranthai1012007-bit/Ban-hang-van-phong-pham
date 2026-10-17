// ===== TRANG CHI TIẾT SẢN PHẨM =====
// Mở trang bằng: chitietsanpham.html?id=7
// Dữ liệu sản phẩm nằm trong JS/sanpham.js (biến SAN_PHAM)

// Biến sp sẽ chứa sản phẩm đang xem
var sp = null;

// ---------- Các hàm nhỏ ----------

// Biến số thành tiền, ví dụ 48300 -> "48.300 đ"
function dinhDangTien(so) {
    return so.toLocaleString("vi-VN") + " đ";
}

// Hiện thông báo dưới hai nút
function baoTin(noiDung, laLoi) {
    var o = document.getElementById("ct-thongbao");
    o.innerHTML = noiDung;
    if (laLoi) {
        o.className = "ct-thongbao loi";
    } else {
        o.className = "ct-thongbao";
    }
}

// Lấy số lượng người dùng nhập (nhập sai thì coi là 1)
function laySoLuong() {
    var n = parseInt(document.getElementById("ct-soluong").value);
    if (isNaN(n) || n < 1) {
        n = 1;
    }
    if (n > 99) {
        n = 99;
    }
    return n;
}

// Tìm sản phẩm theo id trong danh sách
function timSanPham(id) {
    for (var i = 0; i < SAN_PHAM.length; i++) {
        if (SAN_PHAM[i].id == id) {
            return SAN_PHAM[i];
        }
    }
    return null; // không tìm thấy
}

// ---------- Hiện ảnh ----------

// Hiện ảnh số i làm ảnh chính
function hienAnh(i) {
    var khung = document.getElementById("ct-anh-chinh");
    khung.innerHTML = '<img src="' + sp.anh[i] + '" alt="' + sp.ten + '">';

    // đánh dấu ảnh phụ đang chọn
    var cacAnhPhu = document.querySelectorAll(".ct-thumb");
    for (var k = 0; k < cacAnhPhu.length; k++) {
        if (k == i) {
            cacAnhPhu[k].className = "ct-thumb active";
        } else {
            cacAnhPhu[k].className = "ct-thumb";
        }
    }
}

// Vẽ các ảnh phụ bên dưới ảnh chính
function veAnhPhu() {
    var khung = document.getElementById("ct-anh-phu");
    for (var i = 0; i < sp.anh.length; i++) {
        var nut = document.createElement("button");
        nut.type = "button";
        nut.className = "ct-thumb";
        nut.innerHTML = '<img src="' + sp.anh[i] + '" alt="">';
        nut.setAttribute("data-stt", i); // nhớ số thứ tự ảnh
        nut.onclick = function () {
            hienAnh(this.getAttribute("data-stt"));
        };
        khung.appendChild(nut);
    }
}

// ---------- Các nút bấm ----------

// Thêm vào giỏ. Thành công trả về true
function themVaoGioHang() {
    if (sp.gia == null) {
        baoTin("Sản phẩm này chưa có giá.", true);
        return false;
    }
    var soLuong = laySoLuong();
    // Giỏ hàng chỉ cần 1 ảnh, nên lấy ảnh đầu tiên
    var monHang = { id: sp.id, ten: sp.ten, gia: sp.gia, anh: sp.anh[0] };
    themVaoGio(monHang, soLuong); // hàm này nằm trong cart.js
    baoTin('Đã thêm ' + soLuong + ' sản phẩm vào giỏ. <a href="Giohang.html">Xem giỏ hàng</a>', false);
    return true;
}

function nutGiam() {
    var n = laySoLuong();
    if (n > 1) {
        document.getElementById("ct-soluong").value = n - 1;
    }
}

function nutTang() {
    var n = laySoLuong();
    if (n < 99) {
        document.getElementById("ct-soluong").value = n + 1;
    }
}

function nutMuaNgay() {
    var thanhCong = themVaoGioHang();
    if (thanhCong) {
        window.location.href = "Giohang.html"; // chuyển sang trang giỏ hàng
    }
}

// ---------- Chạy khi mở trang ----------

// Lấy id từ địa chỉ trang, ví dụ ...?id=7 -> "7"
var id = new URLSearchParams(window.location.search).get("id");
sp = timSanPham(id);

if (sp == null) {
    // Không có sản phẩm này
    document.getElementById("ct-noidung").innerHTML =
        '<p class="ct-khongco">Không tìm thấy sản phẩm. <a href="trangchu.html">Về trang chủ</a></p>';
} else {
    // Đổ thông tin ra trang
    document.title = sp.ten;
    document.getElementById("ct-ten").innerHTML = sp.ten;
    document.getElementById("ct-ma").innerHTML = "SP" + sp.id;
    // Chưa có nhãn hàng thì ghi "Đang cập nhật"
    if (sp.nhanhang == "") {
        document.getElementById("ct-nhanhang").innerHTML = "Đang cập nhật";
    } else {
        document.getElementById("ct-nhanhang").innerHTML = sp.nhanhang;
    }

    if (sp.gia == null) {
        document.getElementById("ct-gia").innerHTML = "Liên hệ";
        document.getElementById("ct-them").disabled = true;
        document.getElementById("ct-mua").disabled = true;
    } else {
        document.getElementById("ct-gia").innerHTML = dinhDangTien(sp.gia);
    }

    veAnhPhu();
    hienAnh(0);

    // Gắn các nút
    document.getElementById("ct-giam").onclick = nutGiam;
    document.getElementById("ct-tang").onclick = nutTang;
    document.getElementById("ct-them").onclick = themVaoGioHang;
    document.getElementById("ct-mua").onclick = nutMuaNgay;
}