
function timTheoTen(ten) {
    for (var i = 0; i < SAN_PHAM.length; i++) {
        if (SAN_PHAM[i].ten == ten) {
            return SAN_PHAM[i];
        }
    }
    return null;
}

function lamSachTen(chu) {
    return chu.replace(/\s+/g, " ").trim();
}

function ganChoOSanPham(o) {
    var cacThe = o.getElementsByTagName("p");
    var ten = lamSachTen(cacThe[0].textContent);
    var sp = timTheoTen(ten);

    if (sp == null) {
        return; 
    }

    var cacNut = o.getElementsByTagName("button");
    var nutThem = cacNut[0];  
    var nutMua = cacNut[1];   
    var anh = o.getElementsByTagName("img")[0];

    
    anh.style.cursor = "pointer";
    anh.onclick = function () {
        window.location.href = "chitietsanpham.html?id=" + sp.id;
    };
    cacThe[0].style.cursor = "pointer";
    cacThe[0].onclick = function () {
        window.location.href = "chitietsanpham.html?id=" + sp.id;
    };

    if (sp.gia == null) {
        nutThem.disabled = true;
        nutMua.disabled = true;
        return;
    }

    var monHang = { id: sp.id, ten: sp.ten, gia: sp.gia, anh: sp.anh[0] };

    nutThem.onclick = function () {
        themVaoGio(monHang, 1);
        alert("Đã thêm \"" + sp.ten + "\" vào giỏ hàng");
    };

    nutMua.onclick = function () {
        themVaoGio(monHang, 1);
        window.location.href = "Giohang.html";
    };
}

var tatCaO = document.getElementsByClassName("sanpham");
for (var i = 0; i < tatCaO.length; i++) {
    ganChoOSanPham(tatCaO[i]);
}
