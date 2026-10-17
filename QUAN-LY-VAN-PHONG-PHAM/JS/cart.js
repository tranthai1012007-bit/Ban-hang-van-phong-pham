// ===== GIỎ HÀNG DÙNG CHUNG =====
// Giỏ hàng được lưu trong localStorage (bộ nhớ của trình duyệt) với tên "gioHang".
// Mỗi món trong giỏ có dạng: { id: 1, ten: "Bút bi", gia: 5000, anh: "link ảnh", soLuong: 2 }

// Lấy giỏ hàng ra (nếu chưa có gì thì trả về mảng rỗng)
function layGio() {
    var chuoi = localStorage.getItem("gioHang");
    if (chuoi == null) {
        return [];
    }
    return JSON.parse(chuoi);
}

// Lưu giỏ hàng lại
function luuGio(gio) {
    localStorage.setItem("gioHang", JSON.stringify(gio));
}

// Thêm sản phẩm vào giỏ. soLuong không truyền thì mặc định là 1
function themVaoGio(sp, soLuong) {
    if (soLuong == undefined) {
        soLuong = 1;
    }

    var gio = layGio();

    // Tìm xem sản phẩm đã có trong giỏ chưa
    for (var i = 0; i < gio.length; i++) {
        if (gio[i].id == sp.id) {
            gio[i].soLuong = gio[i].soLuong + soLuong; // có rồi thì cộng thêm
            luuGio(gio);
            return;
        }
    }

    // Chưa có thì thêm món mới
    gio.push({
        id: sp.id,
        ten: sp.ten,
        gia: sp.gia,
        anh: sp.anh,
        soLuong: soLuong
    });
    luuGio(gio);
}

// Xóa 1 sản phẩm khỏi giỏ
function xoaKhoiGio(id) {
    var gio = layGio();
    var gioMoi = [];
    for (var i = 0; i < gio.length; i++) {
        if (gio[i].id != id) {
            gioMoi.push(gio[i]);
        }
    }
    luuGio(gioMoi);
}

// Tăng/giảm số lượng (delta = 1 là tăng, -1 là giảm). Giảm về 0 thì xóa món đó
function doiSoLuong(id, delta) {
    var gio = layGio();
    for (var i = 0; i < gio.length; i++) {
        if (gio[i].id == id) {
            gio[i].soLuong = gio[i].soLuong + delta;
        }
    }
    luuGio(gio);

    // kiểm tra món nào số lượng <= 0 thì xóa
    for (var j = 0; j < gio.length; j++) {
        if (gio[j].soLuong <= 0) {
            xoaKhoiGio(gio[j].id);
        }
    }
}

// Tính tổng tiền cả giỏ
function tongTien() {
    var gio = layGio();
    var tong = 0;
    for (var i = 0; i < gio.length; i++) {
        tong = tong + gio[i].gia * gio[i].soLuong;
    }
    return tong;
}
