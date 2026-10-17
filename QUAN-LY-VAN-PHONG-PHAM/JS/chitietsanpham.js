
var sp = null;
function dinhDangTien(so) {
    return so.toLocaleString("vi-VN") + " đ";
}

function baoTin(noiDung, laLoi) {
    var o = document.getElementById("ct-thongbao");
    o.innerHTML = noiDung;
    if (laLoi) {
        o.className = "ct-thongbao loi";
    } else {
        o.className = "ct-thongbao";
    }
}

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

function timSanPham(id) {
    for (var i = 0; i < SAN_PHAM.length; i++) {
        if (SAN_PHAM[i].id == id) {
            return SAN_PHAM[i];
        }
    }
    return null; 
}

function hienAnh(i) {
    var khung = document.getElementById("ct-anh-chinh");
    khung.innerHTML = '<img src="' + sp.anh[i] + '" alt="' + sp.ten + '">';

    var cacAnhPhu = document.querySelectorAll(".ct-thumb");
    for (var k = 0; k < cacAnhPhu.length; k++) {
        if (k == i) {
            cacAnhPhu[k].className = "ct-thumb active";
        } else {
            cacAnhPhu[k].className = "ct-thumb";
        }
    }
}

function veAnhPhu() {
    var khung = document.getElementById("ct-anh-phu");
    for (var i = 0; i < sp.anh.length; i++) {
        var nut = document.createElement("button");
        nut.type = "button";
        nut.className = "ct-thumb";
        nut.innerHTML = '<img src="' + sp.anh[i] + '" alt="">';
        nut.setAttribute("data-stt", i); 
        nut.onclick = function () {
            hienAnh(this.getAttribute("data-stt"));
        };
        khung.appendChild(nut);
    }
}

function themVaoGioHang() {
    if (sp.gia == null) {
        baoTin("Sản phẩm này chưa có giá.", true);
        return false;
    }
    var soLuong = laySoLuong();
    
    var monHang = { id: sp.id, ten: sp.ten, gia: sp.gia, anh: sp.anh[0] };
    themVaoGio(monHang, soLuong); 
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
        window.location.href = "Giohang.html"; 
    }
}

var id = new URLSearchParams(window.location.search).get("id");
sp = timSanPham(id);

if (sp == null) {
   
    document.getElementById("ct-noidung").innerHTML =
        '<p class="ct-khongco">Không tìm thấy sản phẩm. <a href="trangchu.html">Về trang chủ</a></p>';
} else {
    
    document.title = sp.ten;
    document.getElementById("ct-ten").innerHTML = sp.ten;
    document.getElementById("ct-ma").innerHTML = "SP" + sp.id;
   
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

    document.getElementById("ct-giam").onclick = nutGiam;
    document.getElementById("ct-tang").onclick = nutTang;
    document.getElementById("ct-them").onclick = themVaoGioHang;
    document.getElementById("ct-mua").onclick = nutMuaNgay;
}