
function layGio() {
    var chuoi = localStorage.getItem("Giohang");
    if (chuoi == null) {
        return [];
    }
    return JSON.parse(chuoi);
}

function luuGio(gio) {
    localStorage.setItem("Giohang", JSON.stringify(gio));
}

function themVaoGio(sp, soLuong) {
    if (soLuong == undefined) {
        soLuong = 1;
    }

    var gio = layGio();

    for (var i = 0; i < gio.length; i++) {
        if (gio[i].id == sp.id) {
            gio[i].soLuong = gio[i].soLuong + soLuong; 
            luuGio(gio);
            return;
        }
    }

    gio.push({
        id: sp.id,
        ten: sp.ten,
        gia: sp.gia,
        anh: sp.anh,
        soLuong: soLuong
    });
    luuGio(gio);
}

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

function doiSoLuong(id, delta) {
    var gio = layGio();
    for (var i = 0; i < gio.length; i++) {
        if (gio[i].id == id) {
            gio[i].soLuong = gio[i].soLuong + delta;
        }
    }
    luuGio(gio);

    for (var j = 0; j < gio.length; j++) {
        if (gio[j].soLuong <= 0) {
            xoaKhoiGio(gio[j].id);
        }
    }
}

function tongTien() {
    var gio = layGio();
    var tong = 0;
    for (var i = 0; i < gio.length; i++) {
        tong = tong + gio[i].gia * gio[i].soLuong;
    }
    return tong;
}
function docGioHang(){
    return layGio();
}
