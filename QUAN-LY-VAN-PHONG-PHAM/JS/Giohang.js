// Lưu id các sản phẩm đang được tick
const thuMuc = new URL(".", document.currentScript.src).href;   // .../Chung/
const goc    = new URL("../", document.currentScript.src).href; // .../WebVPP/
const daChon = new Set();

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

// Vẽ lại danh sách giỏ hàng từ localStorage
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
            <div class="gh-img">Ảnh sp</div>
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

// Một chỗ lắng nghe cho mọi nút trong danh sách
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
