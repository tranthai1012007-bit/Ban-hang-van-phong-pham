// ===== NỐI TRANG CHỦ VỚI GIỎ HÀNG VÀ TRANG CHI TIẾT =====
// File này cần được nạp SAU sanpham.js và cart.js

// Tìm sản phẩm trong danh sách SAN_PHAM theo tên
function timTheoTen(ten) {
    for (var i = 0; i < SAN_PHAM.length; i++) {
        if (SAN_PHAM[i].ten == ten) {
            return SAN_PHAM[i];
        }
    }
    return null;
}

// Bỏ khoảng trắng thừa trong tên (ví dụ "Bộ học cụ  " -> "Bộ học cụ")
function lamSachTen(chu) {
    return chu.replace(/\s+/g, " ").trim();
}

// Gắn chức năng cho 1 ô sản phẩm
function ganChoOSanPham(o) {
    var cacThe = o.getElementsByTagName("p");
    var ten = lamSachTen(cacThe[0].textContent);
    var sp = timTheoTen(ten);

    if (sp == null) {
        return; // không có trong danh sách thì bỏ qua
    }

    var cacNut = o.getElementsByTagName("button");
    var nutThem = cacNut[0];  // nút "Thêm vào giỏ"
    var nutMua = cacNut[1];   // nút "Mua ngay"
    var anh = o.getElementsByTagName("img")[0];

    // Bấm vào ảnh hoặc tên -> mở trang chi tiết
    anh.style.cursor = "pointer";
    anh.onclick = function () {
        window.location.href = "chitietsanpham.html?id=" + sp.id;
    };
    cacThe[0].style.cursor = "pointer";
    cacThe[0].onclick = function () {
        window.location.href = "chitietsanpham.html?id=" + sp.id;
    };

    // Sản phẩm chưa có giá thì không cho mua
    if (sp.gia == null) {
        nutThem.disabled = true;
        nutMua.disabled = true;
        return;
    }

    var monHang = { id: sp.id, ten: sp.ten, gia: sp.gia, anh: sp.anh[0] };

    // Nút "Thêm vào giỏ"
    nutThem.onclick = function () {
        themVaoGio(monHang, 1);
        alert("Đã thêm \"" + sp.ten + "\" vào giỏ hàng");
    };

    // Nút "Mua ngay": thêm vào giỏ rồi chuyển sang trang giỏ hàng
    nutMua.onclick = function () {
        themVaoGio(monHang, 1);
        window.location.href = "Giohang.html";
    };
}

// Chạy cho tất cả các ô sản phẩm trên trang
var tatCaO = document.getElementsByClassName("sanpham");
for (var i = 0; i < tatCaO.length; i++) {
    ganChoOSanPham(tatCaO[i]);
}
