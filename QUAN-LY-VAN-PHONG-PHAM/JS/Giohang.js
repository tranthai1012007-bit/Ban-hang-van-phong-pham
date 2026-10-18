 (function (){
    var daChon=new Set();
    var khung = document.getElementById("gh-danh-sach");

function dinhDangTien(n) {
    return n.toLocaleString("vi-VN") + " đ";
}

function tinhTong() {
    let tong = 0;
    docGioHang().forEach(function (sp) {
        if (daChon.has(sp.id)) tong += sp.gia * sp.soLuong;
    });
    document.getElementById("gh-tong").textContent = dinhDangTien(tong);
}

function veLai() {
    const gio = docGioHang();
    const khung = document.getElementById("gh-danh-sach");

    if (gio.length === 0) {
        khung.innerHTML = '<p class="gh-empty">Giỏ hàng đang trống</p>';
        tinhTong();
        return;
    }

    khung.innerHTML = gio.map(function (sp) {
        return `
        <div class="gh-item">
            <input type="checkbox" class="gh-check" data-id="${sp.id}"
                   ${daChon.has(sp.id) ? "checked" : ""} aria-label="Chọn sản phẩm">
            <div class="gh-img"><img src="${sp.anh}" alt="${sp.ten}"></div>
            <div class="gh-info">
                <p class="gh-name">${sp.ten}</p>
                <p class="gh-price">${dinhDangTien(sp.gia)}</p>
                <div class="gh-qty">
                    <button type="button" data-act="giam" data-id="${sp.id}">-</button>
                    <span class="gh-num">${sp.soLuong}</span>
                    <button type="button" data-act="tang" data-id="${sp.id}">+</button>
                </div>
            </div>
            <button type="button" class="gh-remove" data-act="xoa" data-id="${sp.id}" aria-label="Xóa sản phẩm">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
    }).join("");
    tinhTong();
}

const dsGio = document.getElementById("gh-danh-sach");

dsGio.addEventListener("click", function (e) {
    const nut = e.target.closest("button[data-act]");
    if (!nut) return;
    const id = Number(nut.dataset.id);
    const act = nut.dataset.act;

    if (act === "tang") doiSoLuong(id, 1);
    if (act === "giam") doiSoLuong(id, -1);
    if (act === "xoa") {
        xoaKhoiGio(id);
        daChon.delete(id);
    }
    veLai();
});

dsGio.addEventListener("change", function (e) {
    if (!e.target.classList.contains("gh-check")) return;
    const id = Number(e.target.dataset.id);
    if (e.target.checked) daChon.add(id); else daChon.delete(id);
    tinhTong();
});
veLai();
var thongBao = document.getElementById("gh-thongbao");

var demGio;
function hienThongBao(noiDung, laLoi) {
    clearTimeout(demGio);
    thongBao.textContent = noiDung;
    thongBao.className = laLoi ? "gh-thongbao loi" : "gh-thongbao";
    demGio = setTimeout(function () { thongBao.textContent = ""; }, 3000);
}
document.getElementById("gh-luu").onclick = function () {
    var oLoai = document.getElementById("gh-loaihd");
    var oDiaChi = document.getElementById("gh-diachi");
    var oSdt = document.getElementById("gh-sdt");
    var diaChi = oDiaChi.value.trim();
    var sdt = oSdt.value.trim();
    if(daChon.size ===0){
        hienThongBao("Vui lòng chọn ít nhất 1 sản phẩm", true);
        return;
    }
    if(oLoai.value===""){
        hienThongBao("Vui lòng chọn hóa đơn", true);
        oLoai.focus();
        return;
    }

    if (diaChi === "") {
        hienThongBao("Vui lòng nhập địa chỉ.", true);
        oDiaChi.focus();
        return;
    }
    if (sdt === "") {
        hienThongBao("Vui lòng nhập số điện thoại.", true);
        oSdt.focus();
        return;
    }
    if (!/^0\d{9}$/.test(sdt)) {
        hienThongBao("Số điện thoại không hợp lệ (gồm 10 số, bắt đầu bằng 0).", true);
        oSdt.focus();
        return;
    }

    hienThongBao("Lưu thông tin thành công!", false);
};
document.getElementById("gh-thanhtoan").onclick = function () {
    if (daChon.size === 0) {
        hienThongBao("Vui lòng chọn ít nhất 1 sản phẩm để thanh toán.",true);
        return;
    }
    localStorage.setItem("DaChon", JSON.stringify(Array.from(daChon)));
    window.location.href = "thanhtoan.html";
};
 })();


 