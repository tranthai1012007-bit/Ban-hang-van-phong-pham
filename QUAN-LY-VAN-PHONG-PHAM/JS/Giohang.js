(function (){
    var daChon = new Set();
    var khung = document.getElementById("gh-danh-sach");
    var thongBao = document.getElementById("gh-thongbao");
    var demGio;

    function luuNhapLieu() {
        var data = {
            diaChi: document.getElementById("gh-diachi").value,
            sdt: document.getElementById("gh-sdt").value,
            loaiHd: document.getElementById("gh-loaihd").value
        };
        localStorage.setItem("ThongTinTam", JSON.stringify(data));
    }

    function khoiPhucNhapLieu() {
        var data = JSON.parse(localStorage.getItem("ThongTinTam"));
        if (data) {
            document.getElementById("gh-diachi").value = data.diaChi || "";
            document.getElementById("gh-sdt").value = data.sdt || "";
            document.getElementById("gh-loaihd").value = data.loaiHd || "";
        }
    }

    document.getElementById("gh-diachi").addEventListener("input", luuNhapLieu);
    document.getElementById("gh-sdt").addEventListener("input", luuNhapLieu);
    document.getElementById("gh-loaihd").addEventListener("change", luuNhapLieu);

    if (sessionStorage.getItem("vuaThanhToan") === "1") {
        sessionStorage.removeItem("vuaThanhToan");
        localStorage.removeItem("DaChon");
        
        var gioReset = JSON.parse(localStorage.getItem("Giohang")) || [];
        for (var i = 0; i < gioReset.length; i++) {
            gioReset[i].soLuong = 1;
        }
        localStorage.setItem("Giohang", JSON.stringify(gioReset));
    }

    khoiPhucNhapLieu();

    function dinhDangTien(n) {
        return n.toLocaleString("vi-VN") + " đ";
    }

    function hienThongBao(noiDung, laLoi) {
        clearTimeout(demGio);
        thongBao.textContent = noiDung;
        thongBao.className = laLoi ? "gh-thongbao loi" : "gh-thongbao";
        demGio = setTimeout(function () { thongBao.textContent = ""; }, 3000);
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

    document.getElementById("gh-thanhtoan").onclick = function () {
        if (daChon.size === 0) {
            hienThongBao("Vui lòng chọn ít nhất 1 sản phẩm để thanh toán.", true);
            return;
        }
        
        var oLoai = document.getElementById("gh-loaihd");
        var oDiaChi = document.getElementById("gh-diachi");
        var oSdt = document.getElementById("gh-sdt");
        var diaChi = oDiaChi.value.trim();
        var sdt = oSdt.value.trim();

        if (oLoai.value === "") {
            hienThongBao("Vui lòng chọn loại hóa đơn.", true);
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

        sessionStorage.setItem("vuaThanhToan", "1");

        localStorage.setItem("ThongTinGiaoHang", JSON.stringify({ 
            diaChi: diaChi, 
            sdt: sdt 
        }));
        localStorage.setItem("DaChon", JSON.stringify(Array.from(daChon)));
        
        window.location.href = "thanhtoan.html";
    };

    veLai();

    var gioHeader = JSON.parse(localStorage.getItem("Giohang")) || [];
    var tongHeader = 0;
    for (var i = 0; i < gioHeader.length; i++) { 
        tongHeader += gioHeader[i].soLuong; 
    }
    var elCartCount = document.getElementById('cart-count');
    if (elCartCount) elCartCount.innerText = tongHeader;

    window.addEventListener("pageshow", function(event) {
        if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
            window.location.reload();
        }
    });

})();