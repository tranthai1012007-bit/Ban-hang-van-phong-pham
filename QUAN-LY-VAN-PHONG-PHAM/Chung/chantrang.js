const chantrang=`
  <footer class="footer">
        <!-- Đăng ký nhận tin + kết nối -->
            <div class="top">
                <div class="wrap">
                    <div class="subscribe">
                        <span class="title">Đăng ký nhận tin</span>
                            <div class="email-box">
                                <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                                <input type="email" placeholder="Nhập email của bạn" aria-label="Email">
                            </div>
                        <button class="btn-sub" type="button">Đăng ký</button>
                    </div>

                    <div class="social">
                        <span class="title">Kết nối với chúng tôi</span>
                        <a href="#" aria-label="Facebook">
                        <svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.4H7.7V13h2.7v8z"/></svg>
                        </a>
                        <a href="#" aria-label="YouTube">
                        <svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- 3 cột -->
            <div class="main">
                <div class="wrap">
                    <div class="company">
                        <h3 class="company-name">Văn Phòng Phẩm Của Chúng Tôi</h3>
                        <p>Công Ty TNHH nhóm 7</p>
                        <ul>
                            <li>
                                <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z"/></svg>
                                <span><b>Head Office:</b>Công Nghệ Thông Tin 1 K66 Trường Đại Học Giao Thông Vận Tải</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.100.37 2.300.57 3.600.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.500a1 1 0 0 1 1 1c0 1.300.2 2.500.57 3.600a1 1 0 0 1-.25 1z"/></svg>
                                <span>0969 433 725</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v.5l-10 6.500L2 6.500V6a1 1 0 0 1 1-1zm-1 4.200 10 6.500 10-6.500V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/></svg>
                                <span>thainguyen12122007@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div class="col">
                        <h3>THÔNG TIN HỖ TRỢ</h3>
                        <ul>
                        <li><a href="#">Hướng dẫn mua hàng</a></li>
                        <li><a href="#">Hướng dẫn thanh toán</a></li>
                        <li><a href="#">Chính sách giao hàng</a></li>
                        <li><a href="#">Chính sách đổi trả &amp; hoàn tiền</a></li>
                        <li><a href="#">Chương trình khách hàng thân thiết</a></li>
                        <li><a href="#">Chương trình khách hàng ưu tiên</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3>Về Văn Phòng Phẩm</h3>
                        <ul>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Dịch vụ in ấn quảng cáo</a></li>
                            <li><a href="#">Chính sách bảo mật chung</a></li>
                            <li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
                            <li><a href="#">Thông tin liên hệ</a></li>
                            <li><a href="#">Phản ánh chất lượng sản phẩm</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="copy">
                Copyright © 2026 <span>Văn Phòng Phẩm</span> 
            </div>
        </footer>
        `;
    document.body.insertAdjacentHTML("afterend", chantrang);
