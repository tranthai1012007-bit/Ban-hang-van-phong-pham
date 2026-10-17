/* Dữ liệu 40 sản phẩm lấy từ trangchu.html. gia = null nghĩa là chưa có giá (SP 38).
   Sửa ở đây thì trang chi tiết đổi theo. */
const SAN_PHAM = [
  {
    "id": 1,
    "ten": "Acrylic Markers",
    "gia": 48300,
    "anh": [
      "Images/images/anh1 copy.jpg"
    ],
    "nhanhang": ""
  },
  {
    "id": 2,
    "ten": "Bộ bút 48/60 màu Acrylic",
    "gia": 234000,
    "anh": [
      "Images/images/anh2.jpg"
    ],
    "nhanhang": ""
  },
  {
    "id": 3,
    "ten": "Bộ bút hai đầu 12/24/48 màu Acrylic",
    "gia": 48000,
    "anh": [
      "Images/images/anh3.jpg"
    ],
    "nhanhang": ""
  },
  {
    "id": 4,
    "ten": "Bộ học cụ cấp 2-3",
    "gia": 79000,
    "anh": [
      "Images/images/anh4.jpg"
    ],
    "nhanhang": ""
  },
  {
    "id": 5,
    "ten": "Bộ học cụ học tập",
    "gia": 99000,
    "anh": [
      "Images/images/anh5.jpg"
    ],
    "nhanhang": ""
  },
  {
    "id": 6,
    "ten": "Bộ sưu tập học cụ Joyee",
    "gia": 209000,
    "anh": [
      "Images/images/anh6.jpg"
    ],
    "nhanhang": ""
  },
  {
    "id": 7,
    "ten": "Bút chì gỗ 2B Flexoffice",
    "gia": 3000,
    "anh": [
      "Images/images/anh7.jpg"
    ],
    "nhanhang": "Flexoffice"
  },
  {
    "id": 8,
    "ten": "Bút chì gỗ 2B Thiên Long",
    "gia": 3000,
    "anh": [
      "Images/images/anh8.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 9,
    "ten": "Bút chì gỗ Thiên Long",
    "gia": 3700,
    "anh": [
      "Images/images/anh9.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 10,
    "ten": "Bút gel B Thiên Long",
    "gia": 6900,
    "anh": [
      "Images/images/anh10.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 11,
    "ten": "Bút lông 5/12/24 màu Monandi đầu Brush Thuên Long",
    "gia": 33000,
    "anh": [
      "Images/images/anh11.jpg"
    ],
    "nhanhang": ""
  },
  {
    "id": 12,
    "ten": "Bút lông bảng Thiên Long",
    "gia": 8000,
    "anh": [
      "Images/images/anh12.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 13,
    "ten": "Bút lông dầu Thiên Long PM-04",
    "gia": 9800,
    "anh": [
      "Images/images/anh13.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 14,
    "ten": "Bút lông dầu Thiên Long PM-09",
    "gia": 10500,
    "anh": [
      "Images/images/anh14.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 15,
    "ten": "Bút lông kim Beebee Thiên Long FL-04",
    "gia": 6900,
    "anh": [
      "Images/images/anh15.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 16,
    "ten": "Bút sáp 12/18/24 mà Thiên Long Colokit Pokemon",
    "gia": 16000,
    "anh": [
      "Images/images/anh16.jpg"
    ],
    "nhanhang": "Colokit"
  },
  {
    "id": 17,
    "ten": "Bút sáp đa năng 12 màu rửa được Colo Art Thiên Long",
    "gia": 72000,
    "anh": [
      "Images/images/anh17.jpg"
    ],
    "nhanhang": "Colokit"
  },
  {
    "id": 18,
    "ten": "Bút xóa Thiên Long",
    "gia": 20000,
    "anh": [
      "Images/images/anh18.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 19,
    "ten": "Cặp-Balo Thiên Long BP-039",
    "gia": 288000,
    "anh": [
      "Images/images/anh19.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 20,
    "ten": "Cặp-Balo Thiên Long BP-038",
    "gia": 327000,
    "anh": [
      "Images/images/anh20.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 21,
    "ten": "Cặp Strive Thiên Long",
    "gia": 220000,
    "anh": [
      "Images/images/anh21.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 22,
    "ten": "Combo 10 Ream giấy A4 70gsm IK Copy (500 tờ)",
    "gia": 765000,
    "anh": [
      "Images/images/anh22.jpg"
    ],
    "nhanhang": "IK Copy"
  },
  {
    "id": 23,
    "ten": "Combo 20 Bút bi màu pastel PRQ 027 Thiên Long",
    "gia": 102000,
    "anh": [
      "Images/images/anh23.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 24,
    "ten": "Combo 20 bút bi Thiên Long TL-036",
    "gia": 214000,
    "anh": [
      "Images/images/anh24.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 25,
    "ten": "Combo 20 bút bi Thiên Long TL-089",
    "gia": 76000,
    "anh": [
      "Images/images/anh25.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 26,
    "ten": "Combo 20 bút bi Thiên Long TL-090",
    "gia": 58000,
    "anh": [
      "Images/images/anh26.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 27,
    "ten": "Combo 20 bút bi Thiên Long TL-093",
    "gia": 64000,
    "anh": [
      "Images/images/anh27.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 28,
    "ten": "Combo 20 bút bi Thiên Long TL-095",
    "gia": 174000,
    "anh": [
      "Images/images/anh28.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 29,
    "ten": "Combo 20 bút gel điểm 10 xóa được TP-GELED01",
    "gia": 273000,
    "anh": [
      "Images/images/anh29.jpg"
    ],
    "nhanhang": "Điểm 10"
  },
  {
    "id": 30,
    "ten": "Combo 20 bút gel Thiên Long GEL-08",
    "gia": 144000,
    "anh": [
      "Images/images/anh30.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 31,
    "ten": "Combo 20/100 bìa lỗ A4 Thiên Long",
    "gia": 63000,
    "anh": [
      "Images/images/anh31.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 32,
    "ten": "Combo 5 bang keo trong suốt Thiên Long Flexoffice 40-200 yards",
    "gia": 50000,
    "anh": [
      "Images/images/anh32.jpg"
    ],
    "nhanhang": "Flexoffice"
  },
  {
    "id": 33,
    "ten": "Combo 5/10/20 bút gel Akooland Dasi Thiên Long-073/AK",
    "gia": 37000,
    "anh": [
      "Images/images/anh33.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 34,
    "ten": "Combo 5/10/20 bút gel Fasgel Thiên Long GEL-08",
    "gia": 26000,
    "anh": [
      "Images/images/anh34.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 35,
    "ten": "Hộp 20 bút bi Thiên Long TL-027",
    "gia": 88000,
    "anh": [
      "Images/images/anh35.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 36,
    "ten": "Máy tính khoa học Thiên Long Flexio Fx799VN",
    "gia": 640000,
    "anh": [
      "Images/images/anh36.jpg"
    ],
    "nhanhang": "Flexio"
  },
  {
    "id": 37,
    "ten": "Mực bút lông bảng Thiên Long WBI-01",
    "gia": 22000,
    "anh": [
      "Images/images/anh37.jpg"
    ],
    "nhanhang": "Thiên Long"
  },
  {
    "id": 38,
    "ten": "Sáp 12 màu Colokit CR-C016",
    "gia": null,
    "anh": [
      "Images/images/anh38.jpg"
    ],
    "nhanhang": "Colokit"
  },
  {
    "id": 39,
    "ten": "Tập học sinh 80 trang 5 ô ly",
    "gia": 14000,
    "anh": [
      "Images/images/anh39.jpg"
    ],
    "nhanhang": ""
  },
  {
    "id": 40,
    "ten": "Tập học sinh 96 trang 4 ô ly vuông",
    "gia": 9800,
    "anh": [
      "Images/images/anh40.jpg"
    ],
    "nhanhang": ""
  }
];
