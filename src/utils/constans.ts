export const DOMAIN_API = "http://localhost:8080";

export const ROUTES = {
  TEST_BANK: "/luyen-tap",
  TEST_COMPLETE: "/de-thi-da-hoan-thanh",
  TEST_RESULT: "/ket-qua-luyen-tap",
  INDEX: "/trang-chu",
  LDB: "/mo-ra-hoc",
  LEARNING_DASHBOARD: "/mo-ra-hoc",
  HOME: "/",
  TOAN5: "toan-5",
  COURSE: "/khoa-hoc",
  BLOG: "/ban-tin-hoc-mo",
  ABOUT: "/gioi-thieu",
  CURRICULUM_DETAIL: "/hoc-toan-lop-5",
  AUTHEN: "/dang-nhap",
  REGISTER: "/dang-ky",
  ADMIN: "/admin",
  COURSE_ADMIN: "/admin/khoa-hoc",
  OTP: "/xac-thuc-email",
  TERM: "/dieu-khoan-su-dung",
  ACCOUNT: "/quan-ly-tai-khoan",
};
export const STUDENT_GRADE_KEY = "student-grade";

export const TOKEN_API =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXluYW02N2sxQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ3OTMwMCwiZXhwIjoxNzAyNjU5MzAwfQ.4ITzlGmSrFJh9f-vIe5zGEP_qx6f2d2itNdQz_z2Rfg";

export const EXAM_ATTEMPT_STATE = {
  INPROGRESS: "In progress",
  FINISHED: "Finished",
  UNFINISHED: "Unfinished",
};

export const ANSWER_TYPES = {
  SINGLE: "SC",
  MULTIPLE: "MC",
};

export const resons = [
  {
    icon: "listChecked",
    title: "Học toán để rèn luyện tư duy chính mình",
    content:
      "Học toán không phải để trở thành một người nổi tiếng, cũng không cần trở thành nhà toán học, hay giáo viên dạy toán nhưng vẫn nên học để “tập luyện phản xạ não bộ” cho chính mình.",
  },
  {
    icon: "scholarship",
    title: "Học toán để giải quyết các vấn đề hiệu quả",
    content:
      "Học toán để nhìn nhận, giải quyết một công việc, nếu biết cách hệ thống một vấn đề bằng những lý lẻ chính xác, đưa ra một giải pháp rõ ràng, cụ thể. Bình tĩnh, tự tin để tháo gỡ vấn đề.",
  },
  {
    icon: "graduate",
    title: "Học toán rèn luyện khả năng tập trung",
    content:
      "Một người thành công không thể thiếu thói quen tập trung trong mọi vấn đề. Cùng một khối lượng kiến thức và bài tập nếu tập trung cao độ, có thể hoàn thành nhanh gấp 3 lần so với khi lơ là.",
  },
  {
    icon: "career",
    title: "Học toán để vận dụng vào cuộc sống và tương lai",
    content:
      "Nhiều khi chúng ta thiếu hiểu biết về toán học lại đem đến những rắc rối cho mình. Hầu như các vấn đề xoay quanh cuộc sống chứng ta hiện nay đều mang mùi vị của toán học.",
  },
];

export const whyyourus = [
  {
    src: "/images/computer-screen-round.png",
    alt: "computer-screen-round",
    html: "Website Học Tập<br /> Kết Nối Trực Tuyến",
  },
  {
    src: "/images/medal-round.png",
    alt: "medal-round",
    html: "Bài Giảng Chính Xác<br />Nội Dung Đầy Đủ",
  },
  {
    src: "/images/board-round.png",
    alt: "board-round",
    html: "Khoá Học Chất Lượng <br /> Đầy Thú Vị",
  },
  {
    src: "/images/calendar-round.png",
    alt: "calendar-round",
    html: "Đảm Bảo Kết Quả<br /> Kiến Thức Năng Cao",
  },
];

export const ListE = [
  {
    title: "1. Tự giác",
    content:
      "Rèn luyện bản tính tự giác, để chủ động tiếp thu thêm nhiều kiến thức...",
  },
  {
    title: "2. Mục tiêu",
    content:
      "Hãy đặt mục tiêu cụ thể cho từng bài học để đạt kết quả tốt nhất...",
  },
  {
    title: "3. Phương pháp",
    content:
      "Khi có phương pháp học toán đúng sẽ biết mình cần phải học những gì và học vào thời điểm...",
  },
  {
    title: "4. Thời gian biểu",
    content: "Giúp lên kế hoạch cụ thể để phân bổ thời gian hợp lý...",
  },
  {
    title: "5.  Lý thuyết",
    content: "Là nền tảng để ứng dụng toán học vào giải bài tập...",
  },
  {
    title: "6. Thực hành",
    content: "Phải liên tục thực hành để vận dụng các lý thuyết đã học...",
  },
  {
    title: "7. Ôn tập",
    content: "Để hiểu sâu kiến thức cần thường xuyên ôn tập...",
  },
];

export const DATA_TOAN_5_DAI_SO = [
  {
    title:
      "Chương một. ÔN TẬP VÀ BỔ SUNG VỀ PHÂN SỐ. GIẢI TOÁN LIÊN QUAN ĐẾN TỈ LỆ. BẢNG ĐƠN VỊ ĐO DIỆN TÍCH",
    lessons: [
      { bai: "Bài 1. Ôn tập: Khái niệm về phân số" },
      { bai: "Bài 2. Ôn tập: Tính chất cơ bản của phân số" },
      { bai: "Bài 3. Ôn tập: So sánh hai phân số" },
      { bai: "Bài 4. Ôn tập: So sánh hai phân số (tiếp theo)" },
      { bai: "Bài 5. Số thập phân" },
      { bai: "Bài 6. Luyện tập" },
      { bai: "Bài 7. Ôn tập: Phép cộng và phép trừ hai phân số" },
      { bai: "Bài 8. Ôn tập: Phép nhân và phép chia hai phân số" },
      { bai: "Bài 9. Hỗn số" },
      { bai: "Bài 10. Hỗn số (tiếp theo)" },
      { bai: "Bài 11. Luyện tập" },
      { bai: "Bài 12+13+14. Luyện tập chung" },
      { bai: "Bài 15. Ôn tập về giải toán" },
      { bai: "Bài 16. Ôn tập và bổ sung về giải toán" },
      { bai: "Bài 17. Luyện tập – VBT Toán 5" },
      { bai: "Bài 18. Ôn tập và bổ sung về giải toán (tiếp theo)" },
      { bai: "Bài 19. Luyện tập" },
      { bai: "Bài 20. Luyện tập chung" },
      { bai: "Bài 21. Ôn tập: Bảng đơn vị đo độ dài" },
      { bai: "Bài 22. Ôn tập: Bảng đơn vị đo độ dài" },
      { bai: "Bài 23. Luyện tập – VBT Toán 5" },
      { bai: "Bài 24. Đề-ca-mét vuông. Héc-tô-mét vuông" },
      { bai: "Bài 25. Mi-li-mét vuông – Bảng đơn vị đo diện tích" },
      { bai: "Bài 26. Luyện tập – VBT Toán 5" },
      { bai: "Bài 27. Héc-ta" },
      { bai: "Bài 28. Luyện tập – VBT Toán 5" },
      { bai: "Bài 29+30+31. Luyện tập chung" },
    ],
  },
  {
    title: "Chương hai. SỐ THẬP PHÂN. CÁC PHÉP TÍNH VỚI SỐ THẬP PHÂN",
    lessons: [
      { bai: "Bài 32. Khái niệm số thập phân" },
      { bai: "Bài 33. Khái niệm số thập phân (tiếp theo)" },
      { bai: "Bài 34: Hàng của số thập phân – Đọc, viết số thập phân" },
      { bai: "Bài 35. Luyện tập – VBT Toán 5" },
      { bai: "Bài 36. Hai phân số bằng nhau" },
      { bai: "Bài 37. So sánh hai phân số thập phân" },
      { bai: "Bài 38. Luyện tập – VBT Toán 5" },
      { bai: "Bài 39. Luyện tập chung – VBT Toán 5" },
      { bai: "Bài 40. Viết các số đo độ dài dưới dạng số thập phân" },
      { bai: "Bài 41. Luyện tập – VBT Toán 5" },
      { bai: "Bài 42. Viết số đo khối lượng dưới dạng số thập phân" },
      { bai: "Bài 43. Viết các số đo diện tích dưới dạng số thập phân" },
      { bai: "Bài 44+45+46. Luyện tập chung" },
      { bai: "Bài 47. Tự kiểm tra" },
      { bai: "Bài 48. Cộng hai số thập phân" },
      { bai: "Bài 49. Luyện tập – VBT Toán 5" },
      { bai: "Bài 50. Tổng nhiều số thập phân" },
      { bai: "Bài 51. Luyện tập" },
      { bai: "Bài 52. Trừ hai số thập phân" },
      { bai: "Bài 53. Luyện tập – VBT Toán 5" },
      { bai: "Bài 54. Luyện tập chung" },
      { bai: "Bài 55. Nhân một số thập phân với một số tự nhiên" },
      { bai: "Bài 56. Nhân một số thập phân với 10, 100, 1000,….." },
      { bai: "Bài 57. Luyện tập" },
      { bai: "Bài 58. Nhân một số thập phân với một số thập phân" },
      { bai: "Bài 59+60. Luyện tập" },
      { bai: "Bài 61+62. Luyện tập chung" },
      { bai: "Bài 63. Chia một số thập phân cho một số tự nhiên" },
      { bai: "Bài 64. Luyện tập – VBT Toán 5" },
      { bai: "Bài 65. Chia một số thập phân cho 10, 100, 1000,…" },
      // {
      //   bai: "Bài 66. Chia một số tự nhiên cho một số tự nhiên mà thương tìm được là một số thập phân",
      // },
      // { bai: "Bài 67. Luyện tập" },
      // { bai: "Bài 68. Chia một số tự nhiên cho một số thập phân" },
      // { bai: "Bài 69. Luyện tập" },
      // { bai: "Bài 70. Chia một số thập phân cho một số thập phân" },
      // { bai: "Bài 71. Luyện tập" },
      // { bai: "Bài 72+73. Luyện tập chung" },
      // { bai: "Bài 74. Tỉ số phần trăm" },
      // { bai: "Bài 75. Giải toán về tỉ số phần trăm" },
      // { bai: "Bài 76. Luyện tập – VBT Toán 5" },
      // { bai: "Bài 77. Giải toán về tỉ số phần trăm (tiếp theo)" },
      // { bai: "Bài 78. Luyện tập – VBT Toán 5" },
      // { bai: "Bài 79. Giải toán về tỉ số phần trăm (tiếp theo)" },
      // { bai: "Bài 80. Luyện tập – VBT Toán 5" },
      // { bai: "Bài 81+82. Luyện tập chung" },
      // { bai: "Bài 83. Giới thiệu máy tính bỏ túi" },
      // {
      //   bai: "Bài 84. Sử dụng máy tính bỏ túi để giải toán về tỉ số phần trăm",
      // },
    ],
  },
  {
    title: "Chương ba: HÌNH HỌC",
    lessons: [
      { bai: "Bài 1: Hình tam giác" },
      { bai: "Bài 2: Diện tích hình tam giác" },
      { bai: "Bài 3: Luyện tập" },
      { bai: "Bài 4: Hình thang" },
      { bai: "Bài 5: Diện tích hình thang" },
      { bai: "Bài 6: Hình tròn, đường tròn" },
      { bai: "Bài 7: Chu vi hình tròn" },
      { bai: "Bài 8: Diện tích hình tròn" },
      { bai: "Bài 9: Giới thiệu biểu đồ hình quạt" },
      { bai: "Bài 10: Luyện tập về tính diện tích" },
      { bai: "Bài 11: Hình hộp chữ nhật - Hình lập phương" },
      {
        bai: "Bài 12: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật",
      },
      {
        bai: "Bài 13: Diện tích xung quanh và diện tích toàn phần của hình lập phương",
      },
      { bai: "Bài 14: Thể tích của một hình" },
      { bai: "Bài 15: Mét khối" },
      { bai: "Bài 16: Thể tích hình hộp chữ nhật" },
    ],
  },
  {
    title: "Chương bốn: SỐ ĐO THỜI GIAN.TOÁN CHUYỂN ĐỘNG ĐỀU",
    lessons: [
      { bai: "Bài 1: Bảng đơn vị đo thời gian" },
      { bai: "Bài 2: Cộng số đo thời gian" },
      { bai: "Bài 3: Trừ số đo thời gian" },
      { bai: "Bài 4: Nhân số đo thời gian với một số" },
      { bai: "Bài 5: Chia số đo thời gian cho một số" },
      { bai: "Bài 6: Vận tốc" },
      { bai: "Bài 7: Quãng đường" },
      { bai: "Bài 8: Thời gian" },
    ],
  },
  // {
  //   title: "Chương năm: ÔN TẬP",
  //   lessons: [
  //     {bai: "Bài "},
  //     {bai: "Bài "},
  //     {bai: "Bài "},
  //     {bai: "Bài "},
  //     {bai: "Bài "},
  //     {bai: "Bài "},
  //   ],
  // },
];
